document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling using scrollIntoView
  const links = document.querySelectorAll('header nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const sectionId = this.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      section.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Advanced email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Form data to be sent via AJAX
    const formData = new FormData(contactForm);

    // AJAX request to submit form data
    fetch('submit_contact_form.php', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle success response from server
      console.log('Success:', data);
      alert('Message sent successfully!');
      contactForm.reset(); // Reset form after successful submission
    })
    .catch(error => {
      // Handle error response from server or network
      console.error('Error:', error);
      alert('An error occurred while sending your message. Please try again later.');
    });
  });
});
