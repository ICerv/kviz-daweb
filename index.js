console.log('funguju!');

const questionElm = document.querySelector('.question');
const question = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.";
questionElm.textContent = question;


const userAnswear = prompt(question);

const answearTextElm = document.querySelector('.answear__text');
answearTextElm.textContent = userAnswear;

const answearElm = document.querySelector('.answear');

if (answear === 'Bell') {
  answearElm.classList.add('answer--correct');
} else {
  answearElm.classList.add('answer--wrong');
}
