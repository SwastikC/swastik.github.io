/*
 * Small JavaScript helpers used across the website.
 *
 * Currently this script toggles the mobile navigation menu and hooks into
 * the contact form to compose a mailto link with the user’s input. No
 * backend is required; pressing the send button will open the user’s mail
 * client with a pre‑filled message.
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');

  // Toggle navigation menu on small screens
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  // Handle contact form submission by composing a mailto link
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[name="name"]').value.trim();
      const email = contactForm.querySelector('input[name="email"]').value.trim();
      const message = contactForm.querySelector('textarea[name="message"]').value.trim();
      const subject = encodeURIComponent('Website Contact from ' + name);
      const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
      // Update location to open the default mail client
      window.location.href = `mailto:swastik.chowbay@iiap.res.in?subject=${subject}&body=${body}`;
    });
  }
});