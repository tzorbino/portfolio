<template>
  <div class="background">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
      <router-link to="/metacognitives" class="nav-link">Metacognitives</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
      <a href="/Antonio_Zorbino_Resume.pdf" target="_blank" class="nav-link">Resume</a>
    </nav>

    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>


<style>
body {
  background: url('/portfolioWallpaper.png') center center / cover no-repeat fixed;
  background-color: #000; /* fallback color */
}
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.background {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
}

.navbar {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; 
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 10;
  overflow-x: auto; 
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
}

.nav-link {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  white-space: nowrap;
  padding: 4px 8px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00e1ff;
}

.page-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .navbar {
    gap: 10px;
    padding: 8px 12px;
    top: 10px;
  }

  .navbar {
    gap: 12px;
    padding: 8px 12px;
  }

  .nav-link {
    font-size: 0.95rem;
  }

  .page-content {
    padding-top: 140px;
  }
}

</style>
