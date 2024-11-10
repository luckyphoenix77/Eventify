const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
       // Toggle password visibility
       if (input.type === 'password') {
           // Change input type to text to show password
           input.type = 'text';

           // Change the eye icon to "eye open"
           iconEye.classList.add('ri-eye-line');
           iconEye.classList.remove('ri-eye-off-line');
       } else {
           // Change input type back to password
           input.type = 'password';

           // Change the eye icon back to "eye closed"
           iconEye.classList.remove('ri-eye-line');
           iconEye.classList.add('ri-eye-off-line');
       }
   });
};

// Call the function to activate password toggle
showHiddenPass('login-pass', 'login-eye');

