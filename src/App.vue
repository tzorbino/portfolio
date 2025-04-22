<template>
  <div class="background">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
      <a href="/Zorbino_Resume.pdf" target="_blank" class="nav-link">Resume</a>
    </nav>

    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden; /* ✅ Only hide horizontal scroll, not vertical */
}

#app {
  min-height: 100vh; /* ✅ Allow content to grow */
  width: 100%;
  background-image: url('/portfolioWallpaper.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
}

.background {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 10;
}

.nav-link {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00e1ff;
}

.page-content {
  padding-top: 80px; /* 👈 Adjust based on navbar height */
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
