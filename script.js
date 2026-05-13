const services = [
  {
    title: "Instalação de alarme",
    desc: "Instalação completa de sistemas de alarme automotivo para proteção contra furtos.",
    image: "assets/alarme.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Trava protecar",
    desc: "Instalação de travas elétricas com sistema de segurança Protecar.",
    image: "assets/trava.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Instalação de películas",
    desc: "Aplicação de películas automotivas para proteção solar e privacidade.",
    image: "assets/pelicula.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Instalação de aparelho",
    desc: "Instalação de som automotivo e centrais multimídia.",
    image: "assets/multimidia.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Instalação de alto-falante",
    desc: "Upgrade de áudio com instalação profissional de alto-falantes.",
    image: "assets/altofalante.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "LED de farol",
    desc: "Conversão para iluminação LED com melhor visibilidade e estética.",
    image: "assets/lampada.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Câmera de ré",
    desc: "Instalação de câmera traseira para facilitar manobras.",
    image: "assets/cameradere.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Sensor de ré",
    desc: "Sensores com alerta sonoro para evitar colisões ao estacionar.",
    image: "assets/sensor.png",
    width: "100%",
    height: "70%"
  },
  {
    title: "Instalação de engate",
    desc: "Instalação de engate para reboque com segurança e certificação.",
    image: "assets/engate.png",
    width: "100%",
    height: "70%"
  },
  {
    title: "Reparo de máquina de vidro",
    desc: "Manutenção e troca de mecanismos de vidro elétrico.",
    image: "assets/vidro.png",
    width: "100%",
    height: "80%"
  }
];

const grid = document.getElementById("servicesGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalImage = document.getElementById("modalImage");
const whatsBtn = document.getElementById("whatsBtn");
const closeModal = document.getElementById("closeModal");

const safeText = (element, value) => {
  if (element) {
    element.textContent = String(value);
  }
};

services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("card");

  
  const img = document.createElement("img");
  img.src = service.image;
  img.alt = service.title;
  img.classList.add("card-image");
  img.style.width = service.width;
  img.style.height = service.height;
  
  const h3 = document.createElement("h3");
  safeText(h3, service.title);
  
  const button = document.createElement("button");
  button.type = "button";
  safeText(button, "Saiba mais");
  
  button.addEventListener("click", () => {
    modalImage.src = service.image;
    modalImage.alt = service.title;
    safeText(modalTitle, service.title);
    safeText(modalText, service.desc);
    modal.style.display = "block";
  });

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(button);
  
  grid.appendChild(card);
});

// Fechar modal
closeModal.onclick = () => modal.style.display = "none";

// WhatsApp redirecionamento
whatsBtn.addEventListener("click", () => {
  const message = `Olá! Gostaria de saber mais sobre: ${modalTitle.textContent}`;
  const phoneNumber = "5511981016075"; // Substitua pelo número de telefone real sem o +
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const newWindow = window.open(whatsappUrl, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
});

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
