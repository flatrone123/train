function render() {
  // header.render();
  biceps.render()
} 

render();


// Если есть обычная функция, в большинстве случаев значением this будет глобальный объект (для браузера window). При использовании "strict mode" - undefined.

// Обычно так вызываются функции обратного вызова(callback), вот почему значение this в них кажется неожиданным

