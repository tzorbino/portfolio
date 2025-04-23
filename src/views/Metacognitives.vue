<template>
    <div class="metacognitive-container">
      <h1>🧠 Metacognitives</h1>
  
      <section class="entry">
        <h2>What I Learned Building Kwik Tips</h2>
        <p>
          Working in high-volume bars and restaurants, there’s always a constant juggling act—fast-paced service, loud environments, and staying cool under pressure. But after the rush dies down, one of the most frustrating parts is doing tip-outs.
        </p>
        <p>
          You’re exhausted, it’s 4am, and now you’ve got to split up a pile of cash and credit card tips between multiple bartenders, barbacks, and food runners. I’ve been on teams ranging from three to fourteen people, with tip pools anywhere from a couple thousand to over ten grand. Every place does it a little differently, but the common thread is that it’s never easy. That’s why I built Kwik Tips—a tool that simplifies the process and takes the mental math out of the end of your shift.
        </p>
        <p>
          The logic behind the app had to be flexible and accurate. I designed it to calculate shift hours automatically based on clock-in and clock-out times. From there, the app splits tips proportionally among bartenders based on hours worked, while also factoring in things like barback and food runner tip-outs. Users can enter custom percentages for each role, since every bar has its own system. Whether one barback worked a partial shift or multiple barbacks split a long one, the math adjusts accordingly. Same with food runners—if they’re used, the payout is based on food sales input. The system then generates a clean report that breaks everything down by person.
        </p>
        <p>
          The tricky part was making sure the logic held up across different scenarios. I had to think through edge cases—like uneven shifts, multiple barbacks, or tips that were mostly cash versus mostly credit. It also needed to be customizable without overwhelming the user. Getting that balance right between flexibility and simplicity took a lot of trial and error.
        </p>
        <p>
          What I’m most proud of is that this isn’t just a project—it’s something useful. It’s a real solution to a real problem I experienced nightly for years. And now, my past coworkers and service industry friends can use this to save time, reduce stress, and head home a little sooner after a long shift.
        </p>
      </section>
    </div>
  </template>
  
  <style scoped>
  .metacognitive-container {
    max-width: 800px;
    margin: 100px auto;
    margin-top: 200px;
    padding: 40px 20px;
    color: #f5f5f5;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    font-size: 1.05rem;
    line-height: 1.7;
  }
  
  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
  
  .entry h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #00bcd4;
  }
  
  .entry p {
    margin-bottom: 18px;
  }
  
  
  @media (max-width: 768px) {
    .metacognitive-container {
      margin-top: 100px;
      padding: 30px 16px;
      font-size: 1rem;
    }
  
    h1 {
      font-size: 2rem;
      margin-bottom: 24px;
    }
  
    .entry h2 {
      font-size: 1.5rem;
    }
  }
  </style>
  