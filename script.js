window.addEventListener("scroll", function() {
  var header = document.querySelector('.text-1');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-dashboard');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-font-2');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-font-1');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-font-4');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-font-3');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});


window.addEventListener("scroll", function() {
  var header = document.querySelector('.projects-dashboard-1');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.text-2');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  } 
});

window.addEventListener("scroll", function() {
  var header = document.querySelector('.services-parent');
  var headerPosition = header.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1;

  if (headerPosition < screenPosition) {
    header.classList.add('show');
  }
});

// Open the popup and set the image source
function openPopup(imageSrc) {
  document.getElementById('popup').style.display = 'block'; // Show the popup
  document.getElementById('popup-img').src = imageSrc; // Set the image source
}

// Close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none'; // Hide the popup
}

// Optional: Close the popup when clicking outside of the popup content
window.onclick = function(event) {
  const popup = document.getElementById('popup');
  if (event.target == popup) {
      popup.style.display = 'none';
  }
}


// for smooth effect when scrolling

const navbarLinks = document.querySelectorAll('.navbar .all-content a');

navbarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'   
 // Smooth scrolling animation
      });
    }
  });
});






particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  
  count_particles = document.querySelector('.js-count-particles');
  
  update = function() {
    stats.begin();
    stats.end();
    
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    
    requestAnimationFrame(update);
  };
  
  requestAnimationFrame(update);
  

 