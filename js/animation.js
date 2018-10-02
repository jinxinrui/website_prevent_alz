window.onload = () => {
    typeWriter();
}

let i = 0;
function typeWriter() {
  let txt = 'If you are between 40 to 60 years of age, find out how you can reduce the \
   chance of getting Alzheimer\'s Disease.';
  let speed = 50;
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
