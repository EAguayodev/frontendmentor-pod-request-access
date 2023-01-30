document.getElementById('btn').addEventListener('click', function() {
    checkEmail();
    validateEmail();
});


function checkEmail() {
    const email = document.getElementById('email');

    if (email.value.length === 0 || !email.checkValidity()) {
        document.getElementById('error-message').style.color = "rgb(233, 10, 10)";
        document.getElementById('error-message').innerHTML = "Oops! Please check your email";
        document.getElementById('error-message').style.display = 'block';
        
        e.preventDefault();
    } else {
        document.getElementById("error-message").innerHTML = "";
        document.getElementById("error-message").style.display = "none";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}