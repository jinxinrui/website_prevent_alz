var i = 0;
var txt = 'If you are 40 to 60 years old, find out how you can reduce the chance of getting Alzheimer\'s in future.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}