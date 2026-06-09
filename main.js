// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    navbar.style.transform = 'translateY(0)';
    return;
  }
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    navbar.style.transform = 'translateY(0)';
    navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// Mobile menu handling
const checkScreenSize = () => {
  const navbar = document.getElementById('navbar');
  if (window.innerWidth <= 768) {
    navbar.style.transform = 'translateY(0)';
  }
};

window.addEventListener('resize', checkScreenSize);
checkScreenSize();

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  
  // Clear form
  contactForm.reset();
  
  // Show success message
  alert('Thank you for your message! I will get back to you soon.');
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .about-content, .contact-content').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(el);
});