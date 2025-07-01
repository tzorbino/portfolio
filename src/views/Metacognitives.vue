<template>
  <div class="metacognitive-container">
    <h1>🧠 Metacognitives</h1>

    <section class="entry">
      <h2>What I Learned Building Kwik Tips</h2>

      <p>
        Working in high volume bars and restaurants means juggling fast paced service and staying cool under pressure.
        But once the rush dies down, and you’ve washed the last bar mat, it’s time to get paid. Tip outs! Everyone is
        exhausted, some people have already left and are coming to pick up their cash the next day, and everyone else?
        It’s all eyes on you. They want to get paid and go home, and so do you. That’s why having a clean, readable tip
        sheet is so important. It ensures that everyone, including those who aren’t there for tip outs, can clearly see
        the breakdown of what they were paid and why. No confusion, just transparency.
      </p>

      <p>
        I’ve worked on teams of three to fourteen people, with tip pools ranging from a couple thousand to nearly twenty
        grand. Every place handles it differently, but it’s never easy. I built <strong>Kwik Tips</strong> to simplify
        this process and eliminate the end of shift mental math.
      </p>

      <p>
        On the technical side, I used SQL to design the database and Java with Spring Boot to build the backend logic
        and API. For the web app, I built the frontend using Vue.js, keeping the interface clean and responsive so users
        could input shift details quickly without confusion. When it came time to go mobile, I wanted flexibility, 
        which is why I chose Flutter. It allowed me to write one codebase that works across both iOS and Android, making
        the app accessible to a broader range of users.
      </p>

      <p>
        The app’s logic had to be both flexible and precise. It automatically calculates shift hours from clock in and
        clock out times, then distributes tips proportionally based on hours worked. Barback and food runner tip outs
        are factored in using custom percentages and food sales, since each bar has its own system. Whether one barback
        worked a partial shift or multiple covered the full night, the app adjusts accordingly. The final output is a
        clean, shareable report that breaks everything down by person.
      </p>

      <p>
        One of the biggest challenges was building logic that worked across so many scenarios like uneven shifts, mostly
        cash or mostly card tips, or multiple barbacks splitting hours. I focused on making the app customizable without
        overwhelming the user, and finding that balance took several rounds of iteration.
      </p>

      <p>
        What I’m most proud of is that <strong>Kwik Tips</strong> isn’t just a portfolio piece. It’s a real solution to
        a real problem I faced for years. It’s now helping others in the industry save time and get home
        a little sooner after a long shift.
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
  color: #ccc5b9;
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