function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == "" && password == "") {
        alert('ISI EMAIL DAN PASSWORD');        
    }else{

        window.location = 'home.html';
    }
}