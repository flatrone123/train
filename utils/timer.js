function timer(self, count) {
  let sound = document.createElement('audio');
  
  function makeSound() {
    sound.src = '../sound.mp3';
    sound.setAttribute('autoplay', '');
    let body = document.querySelector('body');
    body.append(sound);
  }

  let interval = setInterval(() => {
    self.innerHTML = --count + ' сек';
    if (count == 0) {
      makeSound();

      clearInterval(interval);
      self.parentElement.classList.add('podhod__done')
      setTimeout(() => {sound.remove()}, 10000)
    }
  }, 1000)
}