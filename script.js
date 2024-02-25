

// this will call to the togglePassword id and be run through an event listener to check if the input type should
// be 'text' or 'password'
const toggle=document.getElementById('togglePassword');
const password=document.getElementById('user_password');
const confirm=document.getElementById('confirm_password');
const form=document.querySelector("form")

// add regex for testing
const regex=new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

// varable for flags around password
var message=document.getElementById('match-pass')
// Adds an event listener to the button, if clicked and somthing is invalid a flag will be raised
const button=document.querySelector('button').addEventListener('click', function (e){
    //This will allow our passwords red border to flare if the information is invalid
    document.querySelector('form').classList.add('submitted')
    if(password.value!==confirm.value){
        message.style.visibility='visible';
        message.textContent="*passwords do not match";
    }else if(!regex.test(password.value)||!regex.test(confirm.value)){
        message.style.visibility='visible';
        message.textContent="Special characters (!@#$%^&*()_+)";
        alert("*Passowrd must be 8 characters long with 1 capitol,"+ 
        "1 lowercase, 1 number and 1 special character(!@#$%^&*)");
    }
    
});

togglePassword.addEventListener('click', ()=>showPassword());

// Add a common conditional that checks if the two passwords are the same and pass the regex test
// This is done to give the user intuitive feedback. Without looking or counting dots the user can surmise
// the password is in bounds

function check(){
    password.addEventListener('keyup', ()=>{
        if(regex.test(password.value)&&password.value===confirm.value){
            document.querySelector('form').classList.add('validated');
            message.style.visibility='hidden';
        }
    });
    confirm.addEventListener('keyup', ()=>{
        if(regex.test(confirm.value)&&password.value===confirm.value){
            document.querySelector('form').classList.add('validated');
            message.style.visibility='hidden';
        }
    })
}

// Function to check if form is still valid, If not validated is deleted from the form

function reCheck(){
    if(form.classList.contains('validated') && 
        (password.value!==confirm.value) && 
        (!regex.test(password.value) || !regex.test(confirm.value))
        ){
        form.classList.remove('validated');
    }
}

function showPassword(){
    // toggle the type attribut for user password
    const type=password.getAttribute('type')==='password'?'text':'password';
    password.setAttribute('type', type);
    confirm.setAttribute('type', type);
    // toggle the eye icon
    if(togglePassword.src.match("content/eyeClosed.png")){
        togglePassword.src="content/eyeOpen.png";

    } else if(togglePassword.src.match("content/eyeOpen.png")){
        togglePassword.src="content/eyeClosed.png";
    }   
}


