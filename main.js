console.log('dupa');

const button = document.querySelector('#submit');
const name = document.querySelector('#name');
const email = document.querySelector('#email')
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password')
const rodo = document.querySelector('#rodo')
const form = document.querySelector('#form')
const errors = document.querySelectorAll('.error-text')

const manageErrorMessage = (container, option) => {
   if (option === 'add'){
      container.classList.add('error')
   } else if (option === 'remove'){
      container.classList.remove('error')
   }
}

const manageErrorText = (input, option) => {
   if (option === 'add'){
      errors.forEach((el) => {
         if(el.classList.contains(`${input}`)){
            el.style.display = 'block'
         }
      })
   } else if (option === 'remove'){
      errors.forEach((el) => {
         if(el.classList.contains(`${input}`)){
            el.style.display = 'none'
         }
      })
   }

}

const checkName = name => {
   const regex = /^[a-zA-Z]+$/g
   const nameValue = name.value;

   if (nameValue.length >= 2 && nameValue.match(regex)){
      manageErrorMessage(name, 'remove')
      manageErrorText('name', 'remove')
      return true;
   } else {
      manageErrorMessage(name, 'add')
      manageErrorText('name', 'add')
      return false;
   }
}

const checkEmail = email => {
   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
   const emailValue = email.value;

   if (emailValue.match(regex)) {
      manageErrorMessage(email, 'remove')
      manageErrorText('email', 'remove')
      return true;
   } else {
      manageErrorMessage(email, 'add')
      manageErrorText('email', 'add')
      return false;
   }
}

const checkPassword = password => {
   const passwordValue = password.value;
   
   const hasNumber = /[0-9]/.test(passwordValue);
   const hasUpperCase = /[A-Z]/.test(passwordValue);
   const isEightChar = passwordValue.length >= 8;
   const hasSpecialChar = /[\W_]/g.test(passwordValue);
   
   if (hasNumber && hasUpperCase && isEightChar && hasSpecialChar) {
      manageErrorMessage(password, 'remove');
      manageErrorText('password', 'remove')
      return true;
   } else {
      manageErrorMessage(password, 'add');
      manageErrorText('password', 'add')
      return false;
   }
}

const confirmPasswordCheck = password => {
   const passwordValue = password.value;
   const confirmPasswordValue = confirmPassword.value;

   if(passwordValue === confirmPasswordValue) {
      manageErrorMessage(confirmPassword, 'remove');
      manageErrorText('confirmPassword', 'remove')
      return true;
   } else {
      manageErrorMessage(confirmPassword, 'add');
      manageErrorText('confirmPassword', 'add')
      return false;
   }
}

// const checkRodo = checkbox => checkbox.checked ? true : false;

const checkRodo = checkbox => {
   if (checkbox.checked) {
      manageErrorMessage(checkbox, 'remove');
      manageErrorText('checkbox', 'remove')
      return true;
   } else {
      console.log('ch');
      manageErrorMessage(checkbox, 'add');
      manageErrorText('checkbox', 'add')
      return false
   }
}

button.addEventListener('click', (e) => {
   e.preventDefault()
   checkName(name);
   checkEmail(email)
   checkPassword(password)
   confirmPasswordCheck(password)
   checkRodo(rodo)
})

// form.addEventListener('submit', async (e) => {
//    e.preventDefault();
//    console.log('dupa')

//    form.action = '';
//    form.submit()

// })