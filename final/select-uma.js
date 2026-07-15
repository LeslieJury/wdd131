// Selection Screen Logic

// Import json files containing tasks
import currenTasks from "./task_lists/curren_tasks.json" with {type: "json"}
import haruTasks from "./task_lists/haru_tasks.json" with {type: "json"}
import specialTasks from "./task_lists/special_tasks.json" with {type: "json"}

// Make an object class called Umas
class Uma {
    constructor(uniform_img, racing_img, task_list) {
        this.uniform_img = uniform_img;
        this.racing_img = racing_img;
        this.task_list = task_list;
    }
}

// Declare all three Uma objects
const curren = new Uma(
    "images/Curren_Uniform.png", 
    "images/Curren_Racing.png", 
    currenTasks
);

const haru = new Uma(
    "images/Haru_Uniform.png", 
    "images/Haru_Racing.png", 
    haruTasks
);

const special = new Uma(
    "images/Special_Uniform.png", 
    "images/Special_Racing.png", 
    specialTasks
);

// Declare each character button
const currenLink = document.getElementById("select-curren");
const haruLink = document.getElementById("select-haru");
const specialLink = document.getElementById("select-special");


// When character is selected, change the universal variables that we insert into training.js match the according Uma

// Listen for which button is clicked
currenLink.addEventListener("click", function(event) {
    event.preventDefault(); // Keep the page from going to "#"
    localStorage.setItem("selectedUma", JSON.stringify(curren)); // Declare the curren object as the selected uma in local storage
    window.location.href = "training.html"; // Direct to next page
});

haruLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    localStorage.setItem("selectedUma", JSON.stringify(haru));
    window.location.href = "training.html";
});

specialLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    localStorage.setItem("selectedUma", JSON.stringify(special));
    window.location.href = "training.html";
});

// Debug, placing here to remember syntax for later
console.log(curren.task_list.school);



