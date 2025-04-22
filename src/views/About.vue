<template>
    <div class="about-container">
      <h1>About Me</h1>
      <p>
        I’m Tony Zorbino, a full stack software engineer with a unique journey. I spent over a decade in the hospitality industry, where I learned how to thrive under pressure, lead with empathy, and adapt quickly—skills that now shape my approach to software development.
      </p>
      <p>
        After years behind the bar, I made the leap into tech through Tech Elevator, a rigorous coding bootcamp where I built full stack applications using Java, Spring Boot, Vue.js, and SQL. I was drawn to software because it combines logic and creativity in a way that’s always evolving, and I’ve been hooked ever since.
      </p>
      <p>
        Originally from Memphis, TN, I spent time in Boston before settling in Philadelphia, where I’m currently building out tools and web experiences that solve real-world problems with clean, practical code.
      </p>
  
      <!-- 👇 Skills section -->
      <div class="skills-section">
        <h2 class="skills-title">Skills</h2>
        <div class="badges">
          <span class="badge">Java</span>
          <span class="badge">Spring Boot</span>
          <span class="badge">Vue.js</span>
          <span class="badge">SQL</span>
          <span class="badge">PostgreSQL</span>
          <span class="badge">JavaScript</span>
          <span class="badge">HTML</span>
          <span class="badge">CSS</span>
          <span class="badge">Git</span>
          <span class="badge">IntelliJ</span>
          <span class="badge">JUnit</span>
          <span class="badge">JDBC</span>
          <span class="badge">Agile</span>
          <span class="badge">E/R Diagrams</span>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 140px 20px 20px; /* ⬅️ bumped from 120px to 140px */
  color: #f0f0f0;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-top: 100px;
}
  
  h1 {
    text-align: center;
    margin-bottom: 24px;
    font-size: 2.2rem;
  }
  
  /* 👇 Styles for the new section */
  .skills-section {
    margin-top: 40px;
  }
  
  .skills-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  .badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  .badge {
    background-color: rgba(0, 188, 212, 0.1);
    border: 1px solid #00bcd4;
    color: #00bcd4;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.95rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .about-container {
    padding: 160px 16px 20px; /* ⬅️ bumped from 140px to 160px */
    font-size: 1rem;
  }

  h1 {
    font-size: 1.8rem;
  }

  .skills-title {
    font-size: 1.4rem;
  }

  .badge {
    font-size: 0.85rem;
    padding: 5px 12px;
  }
}



  </style>
  
  