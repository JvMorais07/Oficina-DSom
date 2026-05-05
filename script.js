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
    height: "60%"
  },
  {
    title: "Instalação de engate",
    desc: "Instalação de engate para reboque com segurança e certificação.",
    image: "assets/engate.png",
    width: "100%",
    height: "60%"
  },
  {
    title: "Reparo de máquina de vidro",
    desc: "Manutenção e troca de mecanismos de vidro elétrico.",
    image: "assets/vidro.png",
    width: "100%",
    height: "60%"
  }
];

const grid = document.getElementById("servicesGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalImage = document.getElementById("modalImage");
const whatsBtn = document.getElementById("whatsBtn");
const closeModal = document.getElementById("closeModal");


services.forEach(service => {
  const card = document.createElement("div");
  card.classList.add("card");

  
  const img = document.createElement("img");
  img.src = service.image;
  img.alt = service.title;
  img.classList.add("card-image");
  
  const h3 = document.createElement("h3");
  h3.textContent = service.title;
  
  const button = document.createElement("button");
  button.textContent = "Saiba mais";
  
  button.addEventListener("click", () => {
    modalImage.src = service.image;
    modalImage.alt = service.title;
    modalTitle.textContent = service.title;
    modalText.textContent = service.desc;
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
  const phoneNumber = "+XXXXXXXXXXXXX"; // Substitua pelo número de telefone real
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
});

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
