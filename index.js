'use strict'

{
function setWord() {
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  target.textContent = word;
  loc = 0;
}

  const words = [
      'second',
      'english',
      'target',
      'javascript',
      'python',
      'basketball',
      'reading',
  ];
  let word;
  let loc = 0;
  let startTime;
  let isplay = false;


  const target = document.getElementById('target');
   


  document.addEventListener('click', () => {

    if (isplay === true) {
        return;
    }


      isplay = true;
      startTime = Date.now();
      setWord();
  });
  
  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
        return;
    }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);
    

    if (loc === word.length) {

    if (words.length === 0) {
        const endTime = ((Date.now() - startTime) / 100);
        const result = document.getElementById('result');
        const one = document.getElementById('one');
        result.textContent = `The End ! ${endTime} Second!`;
        one.textContent = `もう１度始めますか？>>>`;
        return;
    }
        setWord();
    }

  });
}