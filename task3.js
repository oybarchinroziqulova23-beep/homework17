document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');
  const successMessage = document.getElementById('successMessage');

  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small.error');
    small.innerText = message;
  }

  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
    const small = formControl.querySelector('small.error');
    small.innerText = '';
  }

  function checkRequired(inputs) {
    let valid = true;
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} Error Msg`);
        valid = false;
      } else {
        showSuccess(input);
      }
    });
    return valid;
  }

  function checkLength(input, min) {
    if (input.value.length < min) {
      showError(input, `${getFieldName(input)} must be at least ${min} characters`);
      return false;
    }
    return true;
  }

  function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    if (!re.test(input.value.trim())) {
      showError(input, 'Email Error Msg');
      return false;
    }
    showSuccess(input);
    return true;
  }

  function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Retype Password Error Msg');
      return false;
    }
    return true;
  }

  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    successMessage.style.display = 'none';

    const isRequiredValid = checkRequired([username, email, password, password2]);
    const isUsernameValid = checkLength(username, 3);
    const isPasswordValid = checkLength(password, 6);
    const isEmailValid = checkEmail(email);
    const isPasswordsMatch = checkPasswordsMatch(password, password2);

    if (isRequiredValid && isUsernameValid && isPasswordValid && isEmailValid && isPasswordsMatch) {
      successMessage.style.display = 'block';
      form.reset();
      document.querySelectorAll('.form-control').forEach(fc => fc.classList.remove('success'));
    }
  });
});
