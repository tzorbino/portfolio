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

    <!-- glowing orb -->
    <div id="mouse-orb"></div>

    <div id="light-blob"></div>


    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const orb = document.getElementById('mouse-orb');
  document.addEventListener('mousemove', (e) => {
    orb.style.left = `${e.clientX}px`;
    orb.style.top = `${e.clientY}px`;
  });

  const blob = document.getElementById('light-blob');
  let x = 100;
  let y = 100;
  let vx = 2;
  let vy = 1.6;

  const animate = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    x += vx;
    y += vy;

    let hitX = false;
    let hitY = false;

    if (x <= 0 || x >= w - 180) {
      vx *= -1;
      hitX = true;
    }
    if (y <= 0 || y >= h - 180) {
      vy *= -1;
      hitY = true;
    }

    if (hitX && hitY) {
      blob.style.transform = 'translate(-50%, -50%) scale(1.2, 1.2)';
    } else if (hitX) {
      blob.style.transform = 'translate(-50%, -50%) scale(1.3, 0.7)';
    } else if (hitY) {
      blob.style.transform = 'translate(-50%, -50%) scale(0.7, 1.3)';
    } else {
      blob.style.transform = 'translate(-50%, -50%) scale(1, 1)';
    }

    blob.style.left = `${x + 90}px`;
    blob.style.top = `${y + 90}px`;

    requestAnimationFrame(animate);
  };

  animate();

});


</script>



<style>
body {
  background-color: #2c2c2c; /* fallback */
  background-image: url('/tvFuzz.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Sora', sans-serif;
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
  color: #ccc5b9;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  white-space: nowrap;
  padding: 4px 8px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ccc5b9;
  transform: scale(1.3);
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

#mouse-orb {
  position: fixed;
  width: 160px;
  height: 160px;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.15), transparent 60%);
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
  z-index: 1;
}

#light-blob {
  position: fixed;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6), rgba(0, 255, 255, 0.1));
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
  transform: translate(-50%, -50%) scale(1, 1);
  transition: transform 0.25s ease-out;
}



</style>
