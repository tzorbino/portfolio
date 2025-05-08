<template>
  <div class="metacognitive-container">
    <h1>🧠 Metacognitives</h1>

    <section class="entry">
      <h2>What I Learned Building Kwik Tips</h2>
      <p>
        Working in high-volume bars and restaurants means constantly juggling fast-paced service, loud environments, and
        staying cool under pressure. But after the rush dies down, one of the most frustrating parts is doing tip-outs.
      </p>
      <p>
        You're exhausted, it's 4am, and now you have to split up a pile of cash and credit card tips between multiple
        bartenders, barbacks, and food runners. I've worked on teams ranging from three to fourteen people or more, with tip
        pools anywhere from a couple thousand to nearly twenty grand. Every place handles it a little differently, but it's
        never easy. I built Kwik Tips to simplify the process and take the mental math out of the end of your shift.
      </p>
      <p>
        The logic behind the app had to be both flexible and accurate. I designed it to calculate shift hours
        automatically based on clock-in and clock-out times. From there, it splits tips proportionally among bartenders
        based on hours worked, while also factoring in barback and food runner tip-outs. Users can enter custom
        percentages for each role, since every bar has its own system. Whether one barback worked a partial shift or
        multiple barbacks split a long one, the math adjusts accordingly. The same applies to food runners, whose
        payouts are based on entered food sales. The system then generates a clean report that breaks everything down by
        person.
      </p>
      <p>
        One of the biggest challenges was making sure the logic worked across different scenarios. I had to think
        through edge cases like uneven shifts, multiple barbacks, or tips that came mostly in cash or mostly on cards.
        The app also had to be customizable without being overwhelming. Striking that balance between flexibility and
        simplicity took a lot of iteration.
      </p>
      <p>
        What I'm most proud of is that this isn't just a project I built for fun. It's a real solution to a real problem
        I dealt with for years. Now, my former coworkers and other folks in the industry can use it to save time, reduce
        stress, and get home a little sooner after a long shift.
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