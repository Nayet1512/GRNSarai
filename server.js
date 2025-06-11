const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Claves
const RESEND_API_KEY = 're_UyDBi5g3_76T8H9yjRSG9kgWGk7BEXVk7';
const ADMIN_EMAIL = 'grn.inversion.inmobilaria@gmail.com';
const RECAPTCHA_SECRET_KEY = '6Le5YlwrAAAAAGYF9gqA_xxxxAQUI_VA_TU_CLAVE_SECRETA';

// Ruta del formulario
app.post('/enviar', async (req, res) => {
  const { nombre, apellidoP, apellidoM, email, celular, token } = req.body;

  // Validar reCAPTCHA
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
      return res.status(403).send('Fallo la verificación de reCAPTCHA.');
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error.message);
    return res.status(500).send('Error al verificar reCAPTCHA.');
  }

  // Correos
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
      <p style="margin-bottom: 15px;">Hemos recibido tu solicitud de información. Nos alegra que estés interesado en nuestros desarrollos inmobiliarios.</p>
      <p style="margin-bottom: 15px;">Puedes descargar nuestro folleto informativo desde el siguiente enlace:</p>
      <p style="text-align: center;">
        <a href="http://localhost/Real%20Estate%20inmobilaria/pdfs/EB-RL7782-combined.pdf" 
           style="display:inline-block; padding:12px 24px; background-color:#3B5E5B; color:white; text-decoration:none; border-radius:5px; font-weight: bold;">
          Descargar PDF
        </a>
      </p>
      <p style="margin-top: 30px;">Un asesor se pondrá en contacto contigo muy pronto.</p>
      <p>Saludos cordiales,<br><strong>GRN Inversión Inmobiliaria</strong></p>
    </div>
    <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 0.9rem; color: #666;">
      Este mensaje fue enviado automáticamente. Por favor, no respondas a este correo.
    </div>
  </div>
</div>
    `
  };

  const mensajeInterno = {
    from: 'onboarding@resend.dev',
    to: ADMIN_EMAIL,
    subject: `Nuevo cliente interesado: ${nombre} ${apellidoP}`,
    html: `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <div style="background-color: #3B5E5B; padding: 20px; color: white; text-align: center;">
      <h2 style="margin: 0;">Nuevo contacto desde tu sitio web</h2>
    </div>
    <div style="padding: 30px;">
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Apellido Paterno:</strong> ${apellidoP}</p>
      <p><strong>Apellido Materno:</strong> ${apellidoM}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3B5E5B;">${email}</a></p>
      <p><strong>Celular:</strong> <a href="tel:${celular}" style="color: #3B5E5B;">${celular}</a></p>
    </div>
    <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 0.9rem; color: #666;">
      Este mensaje fue generado automáticamente por el formulario de contacto.
    </div>
  </div>
</div>
    `
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

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
