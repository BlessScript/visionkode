function toggelPassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon i');

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        eyeIcon.className = 'far fa-eye-slash';
    }else{
        passwordInput.type = 'password';
        eyeIcon.className = 'far fa-eye';
    }

};

// menu styling
document.querySelector('.menu').addEventListener('click', function(){
    document.querySelector('.nav-center').classList.toggle('active');
});