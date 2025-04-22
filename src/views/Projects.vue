<template>
    <div class="projects-page">
      <h1 class="title">Projects</h1>
  
      <div class="project-card">
        <img src="/kwikTipsScreenshot.png" alt="Kwik Tips App Screenshot" class="project-image" />
        <div class="project-info">
          <h2>Kwik Tips</h2>
          <p>
            Kwik Tips is a tip distribution web application designed for bar and restaurant staff. It automates tip-outs for bartenders, barbacks, and food runners using shift hours and custom percentages. Built with a Java Spring Boot backend, PostgreSQL database, and Vue.js frontend.
          </p>
          <div class="project-links">
            <a href="https://kwiktips.netlify.app" target="_blank">Live Site</a>
            <a href="https://github.com/zorbino/kwik-tips-frontend" target="_blank">Frontend Code</a>
            <a href="https://github.com/zorbino/kwik-tips-backend" target="_blank">Backend Code</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
.projects-page {
  padding: 120px 40px 40px; /* top padding pushes content under nav */
  color: #f5f5f5;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.project-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  background-color: rgba(28, 28, 30, 0.8);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  padding: 20px;
}

.project-image {
  width: 300px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.project-info {
  flex: 1;
}

.project-info h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.project-info p {
  margin-bottom: 15px;
  line-height: 1.6;
}

.project-links a {
  margin-right: 15px;
  text-decoration: none;
  color: #00bcd4;
  font-weight: bold;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>


  
  