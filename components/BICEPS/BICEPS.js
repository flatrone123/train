class BICEPS {
  // в элементах button, атрибут onclick работает без собственного this, поэтому в
  // функцию передается self, как параметр самого себя
  render() {
      let exercise1 = `
        <div class="podhod__exercise">
          <div class="podhod__exercise__title">Подтягивания *11</div>
          <button class="podhod__exercise__breik" onclick="timer(this, 120)">120 сек</button>
        </div>
      `;

      let podhod1 = `
        <div class="podhod">
          <h3 class="podhod__title">подход</h3>
          ${exercise1}
          ${exercise1}
          ${exercise1}
          ${exercise1}
          <button class="podhod__breik" onclick="timer(this, 600)">След подход 10мин</button>
        </div>
        `;

        let exercise2 = `
        <div class="podhod__exercise">
          <div class="podhod__exercise__title">Подтягивания *11</div>
          <button class="podhod__exercise__breik" onclick="timer(this, 120)">120 сек</button>
        </div>
      `;

      let podhod2 = `
        <div class="podhod">
          <h3 class="podhod__title">подход</h3>
          ${exercise2}
          ${exercise2}
          ${exercise2}
          ${exercise2}
          <button class="podhod__breik" onclick="timer(this, 600)">След подход 10мин</button>
        </div>
        `;

        let exercise3 = `
        <div class="podhod__exercise">
          <div class="podhod__exercise__title">На бицепс *10</div>
          <button class="podhod__exercise__breik" onclick="timer(this, 60)">60 сек</button>
        </div>
      `;

      let podhod3 = `
        <div class="podhod">
          <h3 class="podhod__title">подход</h3>
          ${exercise3}
          ${exercise3}
          ${exercise3}
          ${exercise3}
          <button class="podhod__breik" onclick="timer(this, 600)">След подход 10мин</button>
        </div>
        `;

        let exercise4 = `
        <div class="podhod__exercise">
          <div class="podhod__exercise__title">На бицепс *10</div>
          <button class="podhod__exercise__breik" onclick="timer(this, 60)">60 сек</button>
        </div>
      `;

      let podhod4 = `
        <div class="podhod">
          <h3 class="podhod__title">подход</h3>
          ${exercise4}
          ${exercise4}
          ${exercise4}
          ${exercise4}
          <button class="podhod__breik" onclick="timer(this, 600)">След подход 10мин</button>
        </div>
        `;

      let html = `
        <div class="container">
          ${podhod1}
          ${podhod2}
          ${podhod3}
          ${podhod4}
        </div>
        `;

      ROOT_LEGS.innerHTML = html;

  }

}

const biceps = new BICEPS();