//Selected Form elements
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit');

//Show Error Message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//Show Success Message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
// Email Validation Regex
const checkEmail = input => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not define`);
  }
};
// Upper Case First Letter Error / Success Message
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

// form validation
form.addEventListener('click', function (e) {
  e.preventDefault();
});

//Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// Check Password  Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not match');
  }
}

//submit  btn Click to check validation form
submit.addEventListener('click', function () {
  checkRequired([userName, email, password, password2]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
