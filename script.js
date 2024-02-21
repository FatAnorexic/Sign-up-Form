

// this will call to the togglePassword id and be run through an event listener to check if the input type should
// be 'text' or 'password'
const toggle=document.getElementById('togglePassword');
// const confirmToggle=document.getElementById('confirmToggle');
const password=document.getElementById('user_password');
const confirm=document.getElementById('confirm_password');

// add regex for testing
const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// varable for flags around password
var message=document.getElementById('match-pass')
// Adds an event listener to the button, if clicked and somthing is invalid a flag will be raised
const button=document.querySelector('button').addEventListener('click', function (e){
    //This will allow our passwords red border to flare if the information is invalid
    document.querySelector('form').classList.add('submitted')
    if(password.value!==confirm.value){
        message.style.visibility='visible';
        message.textContent="*passwords do not match";
    }else if(!regex.test(password.textContent)||!regex.test(confirm.textContent)){
        message.style.visibility='visible';
        message.textContent=
        "*Passowrd must be 8 characters long with 1 capitol,"+ 
        "1 lowercase, 1 number and 1 special character(!@#$%^&*)";
    }
    
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


