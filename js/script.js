
const container = document.querySelector('.cuadros-container');
const rows = 8;
const cols = 16;

for (let y = 0; y < rows; y++) {
  for (let x = 0; x < cols; x++) {
    const img = document.createElement('img');
    img.src = `../grid/tile_${y}_${x}.jpg`;
    img.className = 'cuadro';
    img.style.animationDelay = `${(x + y) * 0.03}s`; 
    container.appendChild(img);
  }
}




window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});


const departamentos = [
  {
    id: 1,
    titulo: "Departamento Cancún Ohana",
    precio: "$3,597,660",
    localidad: "Carretera Tulum Cancún",
    estado: "En construcción",
    habitaciones: 1,
    banos: 1.5,
    metros: "57.5 m²",
    descripcion: "Modelo Ohana en planta baja. Sala, comedor, cocina integral, zona de lavandería, terraza. Sobre avenida Colosio. Entrega abril 2025.",
    imagenes: ["../imagenes/image.jpeg","../imagenes/Modal/img (1).jpeg", "../imagenes/Modal/img (2).jpeg", "../imagenes/Modal/img (3).jpeg", "../imagenes/Modal/img (4).jpeg", "../imagenes/Modal/img (5).jpeg", "../imagenes/Modal/img (6).jpeg", "../imagenes/Modal/img (7).jpeg", "../imagenes/Modal/img (8).jpeg", "../imagenes/Modal/img (9).jpeg", "../imagenes/Modal/img (10).jpeg", "../imagenes/Modal/img (11).jpeg", "../imagenes/Modal/img (12).jpeg", "../imagenes/Modal/img (13).jpeg"],
    pdf: "../pdfs/EB-RL7782.pdf"
  },
  {
    id: 2,
    titulo: "Depto Vista Laguna",
    precio: "$5,367,944",
    localidad: "Blvd Colosio Supermanzana 295",
    estado: "En construcción",
    habitaciones: 2,
    banos: 2,
    metros: "109 m²",
    descripcion: "Vista a la laguna Nichupté. Complejo de 4 torres y más de 20 amenidades de lujo. Entrega final 2027.",
    imagenes: ["../imagenes/image2.jpeg", "../imagenes/Modal/img (14).jpeg", "../imagenes/Modal/img (15).jpeg", "../imagenes/Modal/img (16).jpeg", "../imagenes/Modal/img (17).jpeg", "../imagenes/Modal/img (18).jpeg", "../imagenes/Modal/img (19).jpeg", "../imagenes/Modal/img (20).jpeg","../imagenes/Modal/img (21).jpeg", "../imagenes/Modal/img (22).jpeg", "../imagenes/Modal/img (23).jpeg", "../imagenes/Modal/img (24).jpeg", "../imagenes/Modal/img (25).jpeg","../imagenes/Modal/img (26).jpeg", "../imagenes/Modal/img (27).jpeg", "../imagenes/Modal/img (28).jpeg"],
    pdf: "../pdfs/EB-RW1507.pdf"
  },
  {
    id: 3,
    titulo: "Depto Zona Cumbres",
    precio: "$3,740,000",
    localidad: "Cumbres, Av. Colosio",
    estado: "En construcción",
    habitaciones: 1,
    banos: 1,
    metros: "56 m²",
    descripcion: "Zona Cumbres en Cancún, con +15 amenidades tipo resort. Torres con vistas panorámicas. Entrega febrero 2026.",
    imagenes: ["../imagenes/image3.jpeg", "../imagenes/Modal/img (29).jpeg", "../imagenes/Modal/img (30).jpeg", "../imagenes/Modal/img (31).jpeg", "../imagenes/Modal/img (32).jpeg", "../imagenes/Modal/img (33).jpeg", "../imagenes/Modal/img (34).jpeg", "../imagenes/Modal/img (35).jpeg", "../imagenes/Modal/img (36).jpeg"],
    pdf: "../pdfs/EB-RW4192.pdf"
  },
  {
    id: 4,
    titulo: "Depto Av. Colosio",
    precio: "$3,302,770",
    localidad: "Av. Colosio Km 11",
    estado: "En construcción",
    habitaciones: 1,
    banos: 1,
    metros: "59 m²",
    descripcion: "Complejo con vistas a laguna y zona hotelera. +20 amenidades. Cerca de la Universidad Anáhuac. Entrega diciembre 2026.",
    imagenes: ["../imagenes/image4.jpeg",   "../imagenes/Modal/img (37).jpeg", "../imagenes/Modal/img (38).jpeg", "../imagenes/Modal/img (39).jpeg", "../imagenes/Modal/img (40).jpeg", "../imagenes/Modal/img (41).jpeg", "../imagenes/Modal/img (42).jpeg", "../imagenes/Modal/img (43).jpeg", "../imagenes/Modal/img (44).jpeg", "../imagenes/Modal/img (45).jpeg", "../imagenes/Modal/img (46).jpeg", "../imagenes/Modal/img (47).jpeg", "../imagenes/Modal/img (48).jpeg", "../imagenes/Modal/img (49).jpeg", "../imagenes/Modal/img (50).jpeg","../imagenes/Modal/img (51).jpeg", "../imagenes/Modal/img (52).jpeg", "../imagenes/Modal/img (53).jpeg", "../imagenes/Modal/img (54).jpeg"],
    pdf: "../pdfs/EB-SG7851.pdf"
  },
  {
    id: 5,
    titulo: "SLS Harbour Puerto Cancún",
    precio: "$28,000,000",
    localidad: "Puerto Cancún",
    estado: "A estrenar",
    habitaciones: 2,
    banos: 4,
    metros: "190 m²",
    descripcion: "Departamento de lujo con family room convertible, cocina italiana, vistas panorámicas, cuarto de servicio. Entrega inmediata.",
    imagenes: ["../imagenes/image5.jpeg", "../imagenes/Modal/img (55).jpeg", "../imagenes/Modal/img (56).jpeg", "../imagenes/Modal/img (57).jpeg", "../imagenes/Modal/img (58).jpeg", "../imagenes/Modal/img (59).jpeg", "../imagenes/Modal/img (60).jpeg","../imagenes/Modal/img (61).jpeg", "../imagenes/Modal/img (62).jpeg", "../imagenes/Modal/img (63).jpeg", "../imagenes/Modal/img (64).jpeg", "../imagenes/Modal/img (65).jpeg", "../imagenes/Modal/img (66).jpeg", "../imagenes/Modal/img (67).jpeg", "../imagenes/Modal/img (68).jpeg", "../imagenes/Modal/img (69).jpeg", "../imagenes/Modal/img (70).jpeg",  "../imagenes/Modal/img (71).jpeg"],
    pdf: "../pdfs/EB-SI8109.pdf"
  },
  {
    id: 6,
    titulo: "Depto Av. Huayacán",
    precio: "$3,213,272",
    localidad: "Av. Huayacán km 6",
    estado: "En construcción",
    habitaciones: 2,
    banos: 2,
    metros: "88 m²",
    descripcion: "Entrega diciembre 2026. Más de 25 amenidades como boliche, cine, canchas, pet park, clubs. Ideal para inversión.",
    imagenes: ["../imagenes/image6.jpeg",  "../imagenes/Modal/img (72).jpeg", "../imagenes/Modal/img (73).jpeg", "../imagenes/Modal/img (74).jpeg", "../imagenes/Modal/img (75).jpeg", "../imagenes/Modal/img (76).jpeg", "../imagenes/Modal/img (77).jpeg", "../imagenes/Modal/img (78).jpeg", "../imagenes/Modal/img (79).jpeg", "../imagenes/Modal/img (80).jpeg", "../imagenes/Modal/img (81).jpeg", "../imagenes/Modal/img (82).jpeg"],
    pdf: "../pdfs/EB-SJ5801.pdf"
  },
  {
    id: 7,
    titulo: "Penthouse en Mayakoba",
    precio: "$3,500,000",
    localidad: "Ciudad Mayakoba, Playa del Carmen",
    estado: "2019",
    habitaciones: 2,
    banos: 2,
    metros: "100 m²",
    descripcion: "Amueblado. Roof top con jacuzzi, vistas únicas. Casa club, kayak, elevador y alberca. Estrénalo. Documentación en orden.",
    imagenes: ["../imagenes/image7.jpeg", "../imagenes/Modal/img (83).jpeg", "../imagenes/Modal/img (84).jpeg", "../imagenes/Modal/img (85).jpeg", "../imagenes/Modal/img (86).jpeg", "../imagenes/Modal/img (87).jpeg", "../imagenes/Modal/img (88).jpeg", "../imagenes/Modal/img (89).jpeg", "../imagenes/Modal/img (90).jpeg","../imagenes/Modal/img (91).jpeg", "../imagenes/Modal/img (92).jpeg", "../imagenes/Modal/img (93).jpeg", "../imagenes/Modal/img (94).jpeg", "../imagenes/Modal/img (95).jpeg", "../imagenes/Modal/img (96).jpeg"],
    pdf: "../pdfs/EB-SY5089.pdf"
  },
  {
  id: 8,
  titulo: "Departamento en Cabo Norte",
  precio: "$8,980,000",
  localidad: "Fraccionamiento Cabo Norte, Mérida, Yucatán",
  estado: "Entrega diciembre 2025",
  habitaciones: 2,
  banos: 2,
  metros: "158 m²",
  descripcion: "Disfruta del lujo en departamentos de 2 y 3 recámaras. Terraza, balcón, cocina integral, vestidores. Amenidades como infinity pool, yoga room, coworking, sauna, pet garden y más.",
  imagenes: ["../imagenes/Modal/img (131).jpeg", "../imagenes/Modal/img (122).jpeg", "../imagenes/Modal/img (123).jpeg",  "../imagenes/Modal/img (125).jpeg", "../imagenes/Modal/img (126).jpeg", "../imagenes/Modal/img (127).jpeg", "../imagenes/Modal/img (128).jpeg", "../imagenes/Modal/img (129).jpeg", "../imagenes/Modal/img (130).jpeg", "../imagenes/Modal/img (124).jpeg", "../imagenes/Modal/img (132).jpeg", "../imagenes/Modal/img (133).jpeg", "../imagenes/Modal/img (134).jpeg", "../imagenes/Modal/img (135).jpeg", "../imagenes/Modal/img (136).jpeg"],
  pdf: "../pdfs/GAP6987403.pdf"
},
{
  id: 9,
  titulo: "Departamento amueblado en Adamant, Cabo Norte",
  precio: "$5,000,000",
  localidad: "Fraccionamiento Cabo Norte, Mérida, Yucatán",
  estado: "Usado",
  habitaciones: 2,
  banos: 2,
  metros: "87 m²",
  descripcion: "Totalmente amueblado, equipado y con vista al lago. Piso 7, ideal para Airbnb. Amenidades: gym, yoga, sauna, cowork, alberca, lago con kayak, kids club y más.",
  imagenes: ["../imagenes/image9.jpeg", "../imagenes/Modal/img (105).jpeg", "../imagenes/Modal/img (106).jpeg", "../imagenes/Modal/img (107).jpeg", "../imagenes/Modal/img (108).jpeg", "../imagenes/Modal/img (109).jpeg", "../imagenes/Modal/img (110).jpeg", "../imagenes/Modal/img (111).jpeg", "../imagenes/Modal/img (112).jpeg", "../imagenes/Modal/img (113).jpeg"],
  pdf: "../pdfs/GAP697404.pdf"
},
{
  id: 10,
  titulo: "Casa en Cabo Norte",
  precio: "$8,400,000",
  localidad: "Fraccionamiento Cabo Norte, Mérida, Yucatán",
  estado: "Disponible noviembre 2024",
  habitaciones: 3,
  banos: 4,
  metros: "274 m²",
  descripcion: "Casa en privada exclusiva, 2 plantas, jardín, terraza con alberca, cuarto de servicio. Recámaras con baño y vestidor. Acceso a sendero al lago y casa club.",
  imagenes: ["../imagenes/image (8).jpeg", "../imagenes/Modal/img (98).jpeg", "../imagenes/Modal/img (99).jpeg", "../imagenes/Modal/img (100).jpeg", "../imagenes/Modal/img (101).jpeg", "../imagenes/Modal/img (102).jpeg", "../imagenes/Modal/img (103).jpeg", "../imagenes/Modal/img (104).jpeg"],
  pdf: "../pdfs/Arietta.pdf"
},
{
  id: 11,
  titulo: "Terreno en Gran Provincia",
  precio: "$3,237,986",
  localidad: "Komchén, zona norte de Mérida, Yucatán",
  estado: "Entrega finales 2026",
  habitaciones: 0,
  banos: 0,
  metros: "457 m²",
  descripcion: "Lote residencial en desarrollo con golf nocturno, casa club, canchas, parques y restaurantes. Seguridad, naturaleza y planes de financiamiento a 36 meses.",
  imagenes: ["../imagenes/image11.jpeg", "../imagenes/Modal/img (114).jpeg", "../imagenes/Modal/img (115).jpeg", "../imagenes/Modal/img (116).jpeg", "../imagenes/Modal/img (117).jpeg", "../imagenes/Modal/img (118).jpeg", "../imagenes/Modal/img (119).jpeg", "../imagenes/Modal/img (120).jpeg", "../imagenes/Modal/img (121).jpeg"],
  pdf: "../pdfs/GLA6987400).pdf"
}

];

function renderCards() {
  const track = document.getElementById("cardsTrack");
  track.innerHTML = "";

  departamentos.forEach((dpto) => {
    const card = document.createElement("div");
    card.className = "card depto-card";
    card.style.width = "250px";
    card.innerHTML = `
      <img src="${dpto.imagenes[0]}" alt="${dpto.titulo}" class="card-img-top">
      <div class="card-body" onclick="openModal(${dpto.id})">
        <h5 class="card-title">${dpto.titulo}</h5>
        <p class="card-text text-price">${dpto.precio}</p>
        <p class="mb-1"><i class="bi bi-geo-alt"></i> ${dpto.localidad}</p>
        <p class="mb-1"><i class="bi bi-house-door"></i> ${dpto.estado}</p>
        <div class="d-flex justify-content-between mt-2">
          <span><i class="bi bi-door-closed"></i> ${dpto.habitaciones} hab</span>
          <span><i class="bi bi-droplet"></i> ${dpto.banos} baño(s)</span>
        </div>
        <div class="d-flex justify-content-between mt-2">
          <span><i class="bi bi-fullscreen"></i> ${dpto.metros}</span>
          <span style="color: #3B5E5B;">+ Info</span>
        </div>
      </div>
    `;
    track.appendChild(card);
  });
}

function openModal(id) {
  const dpto = departamentos.find(d => d.id === id);
  if (!dpto) return;

  document.getElementById("infoModalLabel").textContent = dpto.titulo;

  document.getElementById("modalInfoList").innerHTML = `
    <li><strong>Precio:</strong> ${dpto.precio}</li>
    <li><strong>Ubicación:</strong> ${dpto.localidad}</li>
    <li><strong>Estado:</strong> ${dpto.estado}</li>
    <li><strong>Recámaras:</strong> ${dpto.habitaciones}</li>
    <li><strong>Baños:</strong> ${dpto.banos}</li>
    <li><strong>Metros cuadrados:</strong> ${dpto.metros}</li>
    <li class="mt-2"><strong>Descripción:</strong> ${dpto.descripcion}</li>
  `;


const carousel = document.getElementById("carouselImages");
const indicators = document.getElementById("carouselIndicators");
carousel.innerHTML = "";
indicators.innerHTML = "";

dpto.imagenes.forEach((img, i) => {
  const item = document.createElement("div");
  item.className = `carousel-item ${i === 0 ? "active" : ""}`;
  item.innerHTML = `<img src="${img}" class="d-block w-100 rounded" alt="Imagen ${i + 1}">`;
  carousel.appendChild(item);

const button = document.createElement("button");
button.type = "button";
button.setAttribute("data-bs-target", "#modalCarousel");
button.setAttribute("data-bs-slide-to", i);
button.setAttribute("aria-label", `Slide ${i + 1}`);
button.className = i === 0 ? "active" : "";

button.innerHTML = `<i class="bi ${i === 0 ? 'bi-circle-fill' : 'bi-circle'}"></i>`;
indicators.appendChild(button);

});


const modalCarousel = document.getElementById("modalCarousel");

modalCarousel.addEventListener("slid.bs.carousel", function (e) {
  const buttons = document.querySelectorAll("#carouselIndicators button i");
  buttons.forEach((icon, i) => {
    icon.className = `bi ${i === e.to ? "bi-circle-fill" : "bi-circle"}`;
  });
});
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");
const carouselElement = document.querySelector("#modalCarousel");

prevButton.addEventListener("click", () => {
  const carousel = bootstrap.Carousel.getInstance(carouselElement);
  carousel.prev();
});

nextButton.addEventListener("click", () => {
  const carousel = bootstrap.Carousel.getInstance(carouselElement);
  carousel.next();
});

;


  const btnPdf = document.getElementById("btnPdf");
  btnPdf.onclick = () => window.open(dpto.pdf, "_blank");

  new bootstrap.Modal(document.getElementById("infoModal")).show();
}


let scrollIndex = 0;

function scrollCards(direction) {
  const cards = document.querySelectorAll(".depto-card");
  if (!cards.length) return;

  const cardWidth = cards[0].offsetWidth + 16; 
  const track = document.getElementById("cardsTrack");
  const visibleCards = Math.floor(track.parentElement.offsetWidth / cardWidth);
  const totalCards = cards.length;

  scrollIndex += direction;


  if (scrollIndex < 0) {
    scrollIndex = totalCards - visibleCards;
  } else if (scrollIndex > totalCards - visibleCards) {
    scrollIndex = 0;
  }

  track.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
}



const carousel = document.getElementById('carouselPilares');
const indicators = document.querySelectorAll('#pilares-indicadores i');

carousel?.addEventListener('slid.bs.carousel', function (e) {
  indicators.forEach((icon, i) => {
    icon.classList.toggle('bi-circle-fill', i === e.to);
    icon.classList.toggle('bi-circle', i !== e.to);
  });
});


function mostrarAlertaBootstrap(tipo, mensaje) {
  const alerta = document.getElementById("alertaFija");
  alerta.className = `alert alert-${tipo} alerta-global show`;
  alerta.innerHTML = `<strong>${tipo === "success" ? "Éxito" : "Error"}:</strong> ${mensaje}`;
  alerta.style.display = "block";

  setTimeout(() => {
    alerta.style.opacity = "0";
    setTimeout(() => {
      alerta.style.display = "none";
      alerta.style.opacity = "1";
    }, 500);
  }, 2000);
}

// 🔹 Pon esto al principio o justo antes del addEventListener:
const API_URL = 'https://grnsarai-production.up.railway.app'; // Reemplaza con tu URL real de Railway

document.getElementById("contactoForm")?.addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellidoP = document.getElementById("apellidoP").value.trim();
  const apellidoM = document.getElementById("apellidoM").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !apellidoP || !apellidoM || !email || !celular) {
    mostrarAlertaBootstrap("danger", "Todos los campos son obligatorios.");
    return;
  }

  if (!/^[0-9]{10}$/.test(celular)) {
    mostrarAlertaBootstrap("danger", "El número celular debe tener 10 dígitos.");
    return;
  }

  const token = grecaptcha.getResponse(); // Captura del reCAPTCHA
// Si no hay token, mostramos advertencia pero NO detenemos el envío
if (!token) {
  console.warn("reCAPTCHA no completado, pero continuamos...");
  // Opcionalmente puedes avisar:
  mostrarAlertaBootstrap("warning", "Se recomienda completar el reCAPTCHA.");
}


  try {
    const res = await fetch(`${API_URL}/enviar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, apellidoP, apellidoM, email, celular, token }),

    });

    const mensaje = await res.text();
    mostrarAlertaBootstrap("success", mensaje);
    document.getElementById("contactoForm").reset();
    grecaptcha.reset();
  } catch (err) {
    console.error(err);
    mostrarAlertaBootstrap("danger", "No se pudo enviar el formulario. Inténtalo más tarde.");
  }
});

document.addEventListener("DOMContentLoaded", renderCards);




function limpiarPrecio(precioStr) {
  if (typeof precioStr === "string") {
    return parseInt(precioStr.replace(/[$,]/g, ''));
  }
  return precioStr;
}

function filtrarDepartamentos() {
  const nombre = document.getElementById("filtroNombre").value.toLowerCase();
  const precio = document.getElementById("filtroPrecio").value;
  const metros = document.getElementById("filtroMetros").value;

  if (!departamentos || !Array.isArray(departamentos)) {
    console.warn("departamentos no está definido correctamente.");
    return;
  }

  const filtrados = departamentos.filter(dpto => {
    const cumpleNombre = dpto.titulo.toLowerCase().includes(nombre);

    let cumplePrecio = true;
    if (precio !== "") {
      const [minP, maxP] = precio.split("-").map(Number);
      const precioNumerico = limpiarPrecio(dpto.precio);
      cumplePrecio = precioNumerico >= minP && precioNumerico <= maxP;
    }

    let cumpleMetros = true;
    if (metros !== "") {
      const [minM, maxM] = metros.split("-").map(Number);
      const metrosNum = parseFloat(dpto.metros);
      cumpleMetros = metrosNum >= minM && metrosNum <= maxM;
    }

    return cumpleNombre && cumplePrecio && cumpleMetros;
  });

  renderCardsGrandes(filtrados);
}

function renderCardsGrandes(filtrados) {
  const contenedor = document.getElementById("contenedorTarjetasGrandes");
  contenedor.innerHTML = "";

  if (filtrados.length === 0) {
    contenedor.innerHTML = `<p style="color: #3B5E5B; font-weight: 600; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
  <i class="bi bi-emoji-frown" style="font-size: 2rem;"></i>
  Parece que está muy solitario por aquí...
</p>
`;
    return;
  }

  filtrados.forEach((dpto) => {
    const card = document.createElement("div");
    card.className = "col card-grande";
    card.innerHTML = `
      <div class="card h-100 card-grande" style="cursor:pointer;" onclick="openModal(${dpto.id})">
        <img src="${dpto.imagenes[0]}" class="card-img-top img-fluid" alt="${dpto.titulo}">

        <div class="card-body">
          <h5 class="card-title">${dpto.titulo}</h5>
          <p class="card-text text-price">${dpto.precio}</p>
          <p><i class="bi bi-geo-alt"></i> ${dpto.localidad}</p>
          <p><i class="bi bi-house-door"></i> ${dpto.estado}</p>
          <div class="d-flex justify-content-between mt-2">
            <span><i class="bi bi-door-closed"></i> ${dpto.habitaciones} hab</span>
            <span><i class="bi bi-droplet"></i> ${dpto.banos} baño(s)</span>
          </div>
          <div class="d-flex justify-content-between mt-2">
            <span><i class="bi bi-fullscreen"></i> ${dpto.metros}</span>
            <span style="color: #3B5E5B; font-weight: 600;">+ Info</span>
          </div>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Ejecuta al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  renderCardsGrandes(departamentos);
  renderCards(); // Asumiendo que esta función existe en tu código

  // Agrega los listeners
  ["filtroNombre", "filtroPrecio", "filtroMetros"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const eventType = (id === "filtroNombre") ? "input" : "change";
      el.addEventListener(eventType, filtrarDepartamentos);
    }
  });
});

// Adaptación móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  document.getElementById("bloque-escritorio").style.display = "none";
  document.getElementById("bloque-movil").style.display = "block";
}









// Animación de caída para los miembros del equipo
        document.addEventListener('DOMContentLoaded', function() {
            const teamMembers = document.querySelectorAll('.team-member');
            
            // Función para verificar si un elemento está visible en el viewport
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // Función para animar los elementos cuando entran en vista
            function animateOnScroll() {
                teamMembers.forEach((member, index) => {
                    if (isElementInViewport(member) && !member.classList.contains('animate-fall')) {
                        setTimeout(() => {
                            member.classList.add('animate-fall');
                        }, index * 200);
                    }
                });
            }

            // Ejecutar al cargar la página
            setTimeout(animateOnScroll, 500);

            // Ejecutar al hacer scroll
            window.addEventListener('scroll', animateOnScroll);
        });

          const select = document.getElementById('selectDepartamento');
  const porcentajeInput = document.getElementById('porcentaje');
  const porcentajeValor = document.getElementById('porcentajeValor');
  const engancheTexto = document.getElementById('engancheTexto');
  const mensualidadResultado = document.getElementById('mensualidadResultado');

  function formatearNumero(num) {
    return num.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  }

  function actualizarCalculo() {
    const seleccion = select.value;
    const porcentaje = parseInt(porcentajeInput.value);
    porcentajeValor.innerText = porcentaje + "%";
    const inputWidth = porcentajeInput.offsetWidth;
    porcentajeValor.style.left = `calc(${porcentaje}% - ${inputWidth * (porcentaje / 100) * 0.01}px)`;
    porcentajeValor.style.opacity = 1;
    clearTimeout(porcentajeValor._timeout);
    porcentajeValor._timeout = setTimeout(() => porcentajeValor.style.opacity = 0, 3000);

    const dep = departamentos.find(d => d.titulo === seleccion);
    if (!dep) return;

    const precio = parseFloat(dep.precio.replace(/[$,]/g, ''));
    const enganche = precio * (porcentaje / 100);
    const restante = precio - enganche;

    engancheTexto.innerText = `Enganche: ${formatearNumero(enganche)} MXN`;

    const tasaMensual = 0.10 / 12;
    const pagos = 240;
    const mensualidad = restante * (tasaMensual * Math.pow(1 + tasaMensual, pagos)) / (Math.pow(1 + tasaMensual, pagos) - 1);

    mensualidadResultado.innerText = `${formatearNumero(mensualidad)}`;
  }

  departamentos.forEach(dep => {
    const option = document.createElement('option');
    option.value = dep.titulo;
    option.textContent = `${dep.titulo} - ${dep.precio}`;
    select.appendChild(option);
  });

  select.addEventListener('change', actualizarCalculo);
  porcentajeInput.addEventListener('input', actualizarCalculo);
  window.addEventListener('load', () => {
    select.value = departamentos[0].titulo;
    actualizarCalculo();
  });

  