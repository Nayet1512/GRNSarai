const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const app = express();

// CORS correctamente configurado
const corsOptions = {
  origin: 'https://nayet1512.github.io',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('/enviar', cors(corsOptions)); // 💡 Fix importante para CORS preflight

// Verifica el origin (opcional para debug)
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Variables de entorno
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Ruta POST /enviar
app.post('/enviar', async (req, res) => {
  const { nombre, apellidoP, apellidoM, email, celular, token } = req.body;

  if (!nombre || !email || !token) {
    return res.status(400).send('Faltan datos obligatorios.');
  }

  // Validar reCAPTCHA
  if (token) {
    try {
      const recaptchaRes = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: RECAPTCHA_SECRET_KEY,
            response: token,
          },
        }
      );

      if (!recaptchaRes.data.success) {
        console.warn('Fallo reCAPTCHA, pero no se detiene el envío.');
      }
    } catch (error) {
      console.error('Error al verificar reCAPTCHA:', error.message);
    }
  } else {
    console.warn('Token reCAPTCHA no enviado.');
  }

  // Email para el cliente
  const mensajeCliente = {
    from: 'onboarding@resend.dev',
    to: email,
    subject: `Gracias por tu interés, ${nombre}`,
    html: `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="background-color: #3B5E5B; padding: 20px; color: white; text-align: center;">
          <h2 style="margin: 0;">Gracias por tu interés, ${nombre}.</h2>
        </div>
        <div style="padding: 30px;">
          <p>Hemos recibido tu solicitud de información.</p>
          <p>Puedes descargar nuestro folleto:</p>
          <p style="text-align: center;">
            <a href="https://solucionesenbebidas.com/GRN/pdfs/EB-RL7782-combined.pdf" style="display:inline-block; padding:12px 24px; background-color:#3B5E5B; color:white; text-decoration:none; border-radius:5px; font-weight: bold;">
              Descargar PDF
            </a>
          </p>
          <p>Un asesor se pondrá en contacto contigo pronto.</p>
        </div>
        <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 0.9rem; color: #666;">
          Este mensaje fue enviado automáticamente.
        </div>
      </div>
    </div>`
  };

  // Email para el administrador
  const mensajeInterno = {
    from: 'onboarding@resend.dev',
    to: ADMIN_EMAIL,
    subject: `Nuevo cliente interesado: ${nombre} ${apellidoP}`,
    html: `
    <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div style="background-color: #3B5E5B; padding: 20px; color: white; text-align: center;">
          <h2>Nuevo contacto desde tu sitio web</h2>
        </div>
        <div style="padding: 30px;">
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Apellido Paterno:</strong> ${apellidoP}</p>
          <p><strong>Apellido Materno:</strong> ${apellidoM}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Celular:</strong> ${celular}</p>
        </div>
        <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 0.9rem; color: #666;">
          Este mensaje fue generado automáticamente.
        </div>
      </div>
    </div>`
  };

  try {
    await axios.post('https://api.resend.com/emails', mensajeCliente, {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    await axios.post('https://api.resend.com/emails', mensajeInterno, {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    res.status(200).send('Correos enviados correctamente.');
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send('Error al enviar el correo.');
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
