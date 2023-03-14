const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // previene la recarga de la página al enviar el formulario
  
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (!email || !password) {
    alert('Por favor complete todos los campos');
  } else {
    const formData = {
      email: email,
      password: password
    };
    console.log(formData);
    loginForm.reset(); // borra los valores de los campos del formulario
  } 
}); 
