<template>
    <div class="contact-container">
      <h1 class="title">📫 Contact Me</h1>
  
      <div class="contact-info">
        <p>📍 <strong>Location:</strong> Philadelphia, PA</p>
        <p>📧 <strong>Email:</strong> <a href="mailto:tzorbino@gmail.com">tzorbino@gmail.com</a></p>
        <p>💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tonyztech" target="_blank">tonyztech</a></p>
        <p>🐱 <strong>GitHub:</strong> <a href="https://github.com/tzorbino" target="_blank">tzorbino</a></p>
      </div>
  
      <form
        action="https://formspree.io/f/xblojdal"
        method="POST"
        class="contact-form"
      >
        <!-- Honeypot field -->
        <input type="text" name="_gotcha" style="display: none;" />
        <!-- Redirect -->
        <input type="hidden" name="_redirect" value="https://kwiktips.netlify.app/thank-you" />
  
        <input type="text" name="name" placeholder="Your Name ✍️" required />
        <input type="email" name="_replyto" placeholder="Your Email 📬" required />
        <textarea name="message" placeholder="Your Message 💬" rows="6" required></textarea>
        <button type="submit">Send Message 🚀</button>
      </form>
    </div>
  </template>
  
  <style scoped>
  .contact-container {
    padding: 40px;
    color: #f5f5f5;
    max-width: 700px;
    margin: auto;
    margin-top: 200px;
  }
  
  .title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
  
  .contact-info {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.8;
  }
  
  .contact-info a {
    color: #00bcd4;
    text-decoration: none;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 12px;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    background-color: #2a2a2c;
    color: #fff;
  }
  
  .contact-form input::placeholder,
  .contact-form textarea::placeholder {
    color: #999;
  }
  
  .contact-form button {
    background-color: #00bcd4;
    color: white;
    border: none;
    padding: 12px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #0097a7;
  }

  @media (max-width: 768px) {
  .contact-container {
    padding: 20px;
    margin-top: 100px; 
  }

  .title {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .contact-info {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  .contact-form input,
  .contact-form textarea {
    font-size: 0.95rem;
    padding: 10px;
  }

  .contact-form button {
    font-size: 0.95rem;
    padding: 10px;
  }
}


  </style>
  
  
  