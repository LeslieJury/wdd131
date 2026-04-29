let title = document.querySelector('h1');

console.log(title);

title.textContent = "Web Page Components";

const topics = document.querySelector('#topics');

//topics.style.color = 'red';
const content = document.getElementById('content');

content.style.backgroundColor = 'lightblue';

let list = document.querySelector(".list");

list.style.border = "3px solid black";

const paragraph = document.querySelector('p');

paragraph.style.fontSize = "3em";

paragraph.classList.add('background');

const image = document.querySelector('img')
image.setAttribute('src', 'images/new_logo.webp');

const dropdown = document.querySelector('#webdevlist');

const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');


dropdown.addEventListener('change', function(){
    html.style.color = "black";
    css.style.color = "black";
    js.style.color = "black";

    let codeValue = dropdown.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
});
