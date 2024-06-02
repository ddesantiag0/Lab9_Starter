// TrackJS Initialization
if (window.TrackJS) {
  TrackJS.install({ 
    token: "84637b89ec8348d086612510b9f95bf"
    // for more configuration options, see https://docs.trackjs.com
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  });

  let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

  errorBtns[0].addEventListener('click', () => {
    console.log('Console Log button clicked!');
  });

  errorBtns[1].addEventListener('click', () => {
    console.error('This is an error message!');
  });

  errorBtns[2].addEventListener('click', () => {
    console.count('Count button clicked');
  });

  errorBtns[3].addEventListener('click', () => {
    console.warn('This is a warning message!');
  });

  errorBtns[4].addEventListener('click', () => {
    console.assert(false, 'Console Assert button clicked');
  });

  errorBtns[5].addEventListener('click', () => {
    console.clear();
  });

  errorBtns[6].addEventListener('click', () => {
    console.dir(document.body);
  });

  errorBtns[7].addEventListener('click', () => {
    console.dirxml(document);
  });

  errorBtns[8].addEventListener('click', () => {
    console.group('Grouped Messages');
  });

  errorBtns[9].addEventListener('click', () => {
    console.groupEnd();
  });

  errorBtns[10].addEventListener('click', () => {
    console.table([{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }]);
  });

  errorBtns[11].addEventListener('click', () => {
    console.time('Timer');
  });

  errorBtns[12].addEventListener('click', () => {
    console.timeEnd('Timer');
  });

  errorBtns[13].addEventListener('click', () => {
    console.trace('Trace button clicked');
  });

  errorBtns[14].addEventListener('click', () => {
    throw new Error('Global error triggered');
  });

  window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log('Global error caught: ' + msg);
    return false;
  };
});