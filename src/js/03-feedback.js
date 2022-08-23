import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};
populateForm();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInputText);

function onInputText(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm(evt) {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';
  console.log(savedMessage);
  if (savedMessage) {
    refs.textarea.value = savedMessage.message;
    refs.input.value = savedMessage.email;
  }
}
