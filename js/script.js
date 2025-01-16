const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("toggle-btn");

const links = document.querySelectorAll('nav ul li a');


links.forEach(link => {
    link.addEventListener('click', function(event) {
        links.forEach(link => link.classList.remove('active-link'));
        event.target.classList.add('active-link');
    });
});

function openSidebar() {
  navbar.classList.add("active");
  openBtn.setAttribute ('aria.expanded', true);
  
}

function closeSidebar() {
  navbar.classList.remove("active");
  openBtn.setAttribute ('aria.expanded', false);
}

particlesJS("particles-js", {
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" 
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 1
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push",
        }
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true 
  });

