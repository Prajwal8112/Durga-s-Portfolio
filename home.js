function showCertificate(imageSrc1, imageSrc2) {
    const certWindow = window.open("", "_blank", "width=800,height=600");
    certWindow.document.writeln(`
        <html>
        <head>
            <title>Certificates</title>
            <style>
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background: black;
                    margin: 0;
                    flex-direction: column;
                    gap: 20px;
                }
                img {
                    max-width: 90%;
                    max-height: 90%;
                    border: 5px solid white;
                    box-shadow: 0px 0px 20px white;
                }
            </style>
        </head>
        <body>
            <img src="${imageSrc1}" alt="Certificate 1">
            <img src="${imageSrc2}" alt="Certificate 2">
        </body>
        </html>
    `);
}


const canvas = document.getElementById("glowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const numParticles = 100;

const colors = [
  'rgba(0, 216, 255, 0.4)',  // Neon Cyan
  'rgba(255, 255, 255, 0.2)', // Soft White
  'rgba(224, 86, 136, 0.3)'   // Magenta Glow
];

// Particle class
class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (
      this.x < 0 || this.x > canvas.width ||
      this.y < 0 || this.y > canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create particles
function initParticles() {
  particlesArray = [];
  for (let i = 0; i < numParticles; i++) {
    particlesArray.push(new Particle());
  }
}

// Animate
function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // trail effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }

  requestAnimationFrame(animate);
}

// Responsive canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animate();
