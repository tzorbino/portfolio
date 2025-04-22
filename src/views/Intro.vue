<template>
    <div class="intro-container">
      <div class="text-section">
        <h1 class="greeting">Hi, I'm Tony Zorbino</h1>
        <p class="tagline">Full Stack Engineer | Creative Problem Solver | Critical Thinker</p>
        <p class="subtagline">Building practical solutions with clean code</p>
      </div>
      <img src="/headShot.jpeg" alt="Tony Zorbino Headshot" class="headshot" />
    </div>
  </template>
  
  <style scoped>
  .intro-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    color: #f5f5f5;
    text-align: left;
    padding: 40px;
    gap: 40px;
    margin-top: 100px;
  }
  
  .text-section {
    flex: 1;
    max-width: 50%;
  }
  
  .headshot {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
}
  
  .greeting {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }
  
  .tagline {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 8px;
  }
  
  .subtagline {
    font-size: 1rem;
    color: #aaa;
    font-style: italic;
  }

  @media (max-width: 768px) {
  .intro-container {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 20px;
    margin-top: 60px; /* slightly reduced for mobile */
  }

  .text-section {
    max-width: 100%;
  }

  .headshot {
    width: 240px;
    height: 240px;
    margin-top: 20px;
  }

  .greeting {
    font-size: 1.8rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .subtagline {
    font-size: 0.95rem;
  }
}

  </style>