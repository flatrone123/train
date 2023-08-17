class HEADER {
  showTodayTrain() {
    let day = new Date().getDay();
    console.log(day)
    switch (day) {
      case 6:
        legs.render();
        break;
      case 0:
      case 3:
        triceps.render();
        break;
      case 1:
      case 4:
        biceps.render();
        break;
      case 2:
      case 5:
        abd.render();
        break;
      default:
        break;
    }
  }

  showTodayDay() {
    let day = new Date().getDay();
    day--;
    if (day == -1 ) {day = 6};

    let week = document.querySelectorAll("li");

    week[day].classList.add("today");
  }
  

  render() {
    const html = `
    <ul>
      <li>понедельник</li>
      <li>вторник</li>
      <li>среда</li>
      <li>четверг</li>
      <li>пятница</li>
      <li>суббота</li>
      <li>воскресенье</li>
    </ul>
    `;

    ROOT_HEADER.innerHTML = html;

    this.showTodayDay();
    this.showTodayTrain();
  }
}

const header = new HEADER();