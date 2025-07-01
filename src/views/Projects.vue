<template>
  <div class="projects-page">
    <h1 class="title">Projects</h1>

    <div class="project-card">
      <div class="project-info">
        <!-- Loom Video First -->
        <div class="video-wrapper">
          <iframe
            src="https://www.loom.com/embed/ea21365b137244fab41181562dd7ac96?sid=c8137cc4-bb2a-415f-94ee-3251762c67ef"
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

        <!-- Project Content -->
        <h2>Kwik Tips</h2>
        <p>
          Kwik Tips is a completed tip distribution app built for bar and restaurant teams. It automates payouts to
          bartenders, barbacks, and food runners based on shift times and custom percentages. The app supports
          anonymous users and generates detailed tip-out reports instantly. Built with Java Spring Boot,
          PostgreSQL, and Vue.js for the web frontend, with a mobile version built in Flutter.
        </p>

        <div class="project-links">
          <a href="https://kwiktips.netlify.app" target="_blank">Live Web App</a>
          <a href="https://github.com/zorbino/kwik-tips-frontend" target="_blank">Web Frontend (Vue)</a>
          <a href="https://github.com/zorbino/kwik-tips-backend" target="_blank">Backend (Spring Boot)</a>
          <a href="https://github.com/tzorbino/kwik_tips_mobile" target="_blank">Mobile Frontend (Flutter)</a>
        </div>
      </div>
    </div>




  </div>
</template>



<style scoped>
.projects-page {
  margin-top: 100px;
  padding: 40px 40px 40px;
  color: #ccc5b9;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.project-card {
  background-color: rgba(28, 28, 30, 0.8);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  padding: 20px;
  margin-bottom: 40px;
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

@media (max-width: 768px) {
  .projects-page {
    padding-top: 10px;
    /* a little more on mobile in case nav stacks */
    padding-left: 20px;
    padding-right: 20px;
  }

  .project-card {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .project-image {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }

  .project-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .project-links a {
    margin: 0;
  }
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 12px;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 12px;
}
</style>