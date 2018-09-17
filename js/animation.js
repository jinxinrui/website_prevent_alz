window.onload = () => {
    typeWriter();
}

let i = 0;
function typeWriter() {
  let txt = 'If you are 40 to 60 years old, find out how you can reduce the \
   chance of getting Alzheimer\'s in future.';
  let speed = 50;
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
