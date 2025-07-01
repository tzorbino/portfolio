<template>
  <div class="about-container">
    <h1>About Me</h1>
    <p>
      I’m a full stack software engineer with a focus on writing clean, maintainable code and
      collaborating effectively across teams. I have a strong foundation in Java and experience building with Python,
      JavaScript, and SQL. I'm AWS Cloud Practitioner certified and also familiar with deploying applications using
      Google Cloud.
    </p>

    <p>
      I specialize in developing full stack web and mobile apps that are both functional and user friendly. My recent
      work includes Vue.js frontends, Spring Boot APIs, and mobile development with Flutter. I’m always looking for ways
      to improve code quality and build tools that solve real problems.
    </p>

    <p>
      Originally from Memphis, I’ve lived in cities across the country such as Boston, Atlanta, and now Philadelphia.
      That journey, along with my background in hospitality, has given me the ability to thrive in diverse environments
      and bring a thoughtful, people first approach to software development.
    </p>

    <p>
      I'm eager for opportunities to learn and grow with a team. I’m excited to apply everything I’ve learned so far,
      along with my communication and collaboration skills, to real world software development. I'm looking forward to
      contributing to a new company and continuing to evolve as an engineer.
    </p>



    <!-- Skills section -->
    <div class="skills-section">
      <h2 class="skills-title">Skills</h2>

      <div class="skill-category">
        <h3>Languages</h3>
        <div class="badges">
          <span class="badge">Java</span>
          <span class="badge">Python</span>
          <span class="badge">Dart</span>
          <span class="badge">HTML/CSS</span>
          <span class="badge">JavaScript</span>
          <span class="badge">SQL</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Developer Tools</h3>
        <div class="badges">
          <span class="badge">IntelliJ</span>
          <span class="badge">VS Code</span>
          <span class="badge">Android Studio</span>
          <span class="badge">XCode</span>
          <span class="badge">Git</span>
          <span class="badge">Postman</span>
          <span class="badge">pgAdmin</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Technologies / Frameworks</h3>
        <div class="badges">
          <span class="badge">Spring Boot</span>
          <span class="badge">Vue.js</span>
          <span class="badge">Flutter</span>
          <span class="badge">JDBC</span>
          <span class="badge">PostgreSQL</span>
          <span class="badge">E/R Diagrams</span>
          <span class="badge">Agile</span>
          <span class="badge">JUnit</span>
        </div>
      </div>

      <div class="skill-category">
        <h3>Cloud Platforms</h3>
        <div class="badges">
          <span class="badge">AWS</span>
          <span class="badge">Google Cloud</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.about-container {
  max-width: 800px;
  width: 100%;
  margin: 120px auto 100px;
  /* ⬅️ Pushes container down BELOW nav bar */
  padding: 20px;
  color: #ccc5b9;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  font-size: 1.1rem;
  line-height: 1.7;
  box-sizing: border-box;
}


h1 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 2.2rem;
}

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
  justify-content: left;
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
    margin: 100px 10px 40px;
    /* ⬅️ Extra top space for stacked mobile nav */
    padding: 20px;
    width: calc(100% - 20px);
  }
}

.skill-category {
  margin-bottom: 30px;
}

.skill-category h3 {
  font-size: 1.3rem;
  color: #ccc5b9;
  text-align: left;
  margin-bottom: 12px;
}
</style>