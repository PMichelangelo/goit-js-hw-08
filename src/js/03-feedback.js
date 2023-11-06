
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const submitButton = form.querySelector('button[type="submit"]');


const updateLocalStorage = throttle(() => {
  const feedbackState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}, 500);


const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const feedbackState = JSON.parse(savedState);
  emailInput.value = feedbackState.email;
  messageTextarea.value = feedbackState.message;
}

form.addEventListener('input', updateLocalStorage);


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const feedbackState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(feedbackState);
  localStorage.removeItem('feedback-form-state'); // Очистка локального хранилища

  emailInput.value = '';
  messageTextarea.value = '';
});