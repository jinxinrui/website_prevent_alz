function login() {
    var p = document.getElementById('password').value;
    if (p == '4leaf123') {
        window.location.replace('index.html');
    } else {
        alert('Wrong password!');
    }
}