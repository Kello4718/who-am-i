"use strict";

const firstBlock = document.querySelector('.first');
const secondBlock = document.querySelector('.second');
const thirdBlock = document.querySelector('.third');
const thirdBlockInfo = document.querySelector('.third-info');
const fifthBlock = document.querySelector('.fifth');
const fifthBlockInfo = document.querySelector('.fifth-info');
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
buttonYes.addEventListener('click', () => {
  secondBlock.classList.remove('second--hide');
  firstBlock.style.display = 'none';
  const buttonYesYes = document.querySelector('.yes-yes');
  buttonYesYes.addEventListener('click', () => {
    secondBlock.classList.add('second--hide');
    thirdBlock.classList.remove('third--hide');
    const codeInput = document.querySelector('.code');
    const answer = document.querySelector('.answer');
    codeInput.addEventListener('input', () => {
      if (codeInput.value === 'Алина') {
        thirdBlockInfo.classList.add('third-info--hide');
        answer.classList.remove('answer--hide');
      }
    });
  });
});
buttonNo.addEventListener('click', () => {
  firstBlock.style.display = 'none';
  secondBlock.classList.add('second--hide');
  thirdBlock.classList.add('third--hide');
  fifthBlock.classList.remove('fifth--hide');
  const fifthCodeInput = document.querySelector('.fifth-code');
  const fifthAnswer = document.querySelector('.fifth-answer');
  fifthCodeInput.addEventListener('input', () => {
    if (fifthCodeInput.value === 'Алина') {
      fifthBlockInfo.classList.add('fifth-info--hide');
      fifthAnswer.classList.remove('fifth-answer--hide');
    }
  });
});