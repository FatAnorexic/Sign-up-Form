

// this will call to the togglePassword id and be run through an event listener to check if the input type should
// be 'text' or 'password'
const toggle=document.getElementById('togglePassword');
const confirmToggle=document.getElementById('confirmToggle');
const password=document.querySelector('#user_password');
const confirm=document.querySelector('#confirm_password');

togglePassword.addEventListener('click', ()=>showPassword());
confirmToggle.addEventListener('click', ()=>showPassword());

function showPassword(){
    // toggle the type attribut for user password
    const type=password.getAttribute('type')==='password'?'text':'password';
    password.setAttribute('type', type);
    confirm.setAttribute('type', type);
    // toggle the eye icon
    if(togglePassword.src.match("content/eyeslash.png")&&confirmToggle.src.match("content/eyeslash.png")){
         togglePassword.src="content/eye.png";
        confirmToggle.src="content/eye.png";
    } else if(togglePassword.src.match("content/eye.png")&&confirmToggle.src.match("content/eye.png")){
         togglePassword.src="content/eyeslash.png";
        confirmToggle.src="content/eyeslash.png";
    }   
}


