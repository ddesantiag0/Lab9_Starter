document.addEventListener('DOMContentLoaded', () => {
  class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  // Form submission handling
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    try {
      const output = document.querySelector('output');
      const firstNum = document.querySelector('#first-num').value;
      const secondNum = document.querySelector('#second-num').value;
      const operator = document.querySelector('#operator').value;

      if (isNaN(firstNum) || isNaN(secondNum)) {
        throw new ValidationError("One of the inputs is not a valid integer.");
      }

      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
      if (err instanceof ValidationError) {
        console.error("Uncaught " + err.stack);
      }
    }
  });

  const errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

  errorBtns[0].addEventListener('click', () => {
    console.log('Console Log Button Functionality');
  });

  errorBtns[1].addEventListener('click', () => {
    console.error("Console Error Button Functionality");
  });

  errorBtns[2].addEventListener('click', () => {
    console.count();
    console.count('CSE110');
    console.count();
    console.count();
    console.count('CSE110');
    console.count('CSE110');
    console.count('CSE110');
  });

  errorBtns[3].addEventListener('click', () => {
    console.warn("Console Warn Button functionality");
  });

  errorBtns[4].addEventListener('click', () => {
    const x = 5;
    const y = 3;
    const reason = 'x is expected to be less than y';
    console.assert(x < y, { x, y, reason });
  });

  errorBtns[5].addEventListener('click', () => {
    console.clear();
  });

  errorBtns[6].addEventListener('click', () => {
    console.dir(document.head);
  });

  errorBtns[7].addEventListener('click', () => {
    console.dirxml(document.head);
  });

  const label = "people in CSE 110 Group 19";
  errorBtns[8].addEventListener('click', () => {
    console.group(label);
    console.info("Allison");
    console.info("Brandon");
    console.info("Charlie");
    console.info("David");
    console.info("Ginger");
    console.info("Julie");
    console.info("Julio");
    console.info("Milana");
    console.info("Nikolas");
    console.info("Riana");
    console.info("Wenzhe");
  });

  errorBtns[9].addEventListener('click', () => {
    console.groupEnd(label);
    console.log("group ended");
  });

  const people = [
    {
      first: 'David',
      last: 'De Santiago',
    },
    {
      first: 'Thomas',
      last: 'Powell',
    },
    {
      first: 'Kashish',
      last: 'Jain',
    }
  ];
  errorBtns[10].addEventListener('click', () => {
    console.table(people);
  });

  errorBtns[11].addEventListener('click', () => {
    console.log('Timer started');
    console.time();
  });

  errorBtns[12].addEventListener('click', () => {
    console.log('Timer ended');
    console.timeEnd();
  });

  errorBtns[13].addEventListener('click', () => {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
  });

  errorBtns[14].addEventListener('click', () => {
    try {
      nonExistentFunction();
    } catch (err) {
      console.error("Global error triggered: " + err.stack);
    }
  });

  // Global error handler
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    console.log('Global error caught: ' + msg);
    if (window.TrackJS) {
      TrackJS.track('Global error caught: ' + msg);
    }
    return false;
  };
});