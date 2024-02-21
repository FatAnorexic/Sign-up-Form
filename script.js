

// this will call to the togglePassword id and be run through an event listener to check if the input type should
// be 'text' or 'password'
const toggle=document.getElementById('togglePassword');
// const confirmToggle=document.getElementById('confirmToggle');
const password=document.querySelector('#user_password');
const confirm=document.querySelector('#confirm_password');

// Adds an event listener to the button, if clicked and somthing is invalid a flag will be raised
const button=document.querySelector('button').addEventListener('click', function (e){
    //This will allow our passwords red border to flare if the information is invalid
    document.querySelector('form').classList.add('submitted')
});

togglePassword.addEventListener('click', ()=>showPassword());
// confirmToggle.addEventListener('click', ()=>showPassword());

function showPassword(){
    // toggle the type attribut for user password
    const type=password.getAttribute('type')==='password'?'text':'password';
    password.setAttribute('type', type);
    confirm.setAttribute('type', type);
    // toggle the eye icon
    if(togglePassword.src.match("content/eyeClosed.png")){
        togglePassword.src="content/eyeOpen.png";
        // confirmToggle.src="content/eyeOpen.png";
    } else if(togglePassword.src.match("content/eyeOpen.png")){
        togglePassword.src="content/eyeClosed.png";
        // confirmToggle.src="content/eyeClosed.png";
    }   
}


