

console.log("Hello bitches");

// document.getElementById('title').innerHTML = '<h1>Hello World!!</h1>';

document.getElementById('content').innerHTML = "Hello";

fetch('http://localhost:3000/burgers')
  .then((response) => response.json())
    .then((json) => console.log(json));
  
