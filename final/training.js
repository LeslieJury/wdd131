// Uma Training Logic

// Import data on selected character
const rawData = localStorage.getItem("selectedUma");
const activeUma = JSON.parse(rawData);

// Declare images and task lists
const uniform_img = activeUma.uniform_img;
const racing_img = activeUma.racing_img;
const task_list = activeUma.task_list;

const school_task = document.getElementById("school_task");
const career_task = document.getElementById("career_task");
const health_task = document.getElementById("health_task");

let school_index = 0;
let career_index = 0;
let health_index = 0;

const raceButton = document.getElementById("race-button");
const print_out_container = document.getElementById("print-out-container");



// Shows tasks on screen
function display_current_tasks() {
    if (school_index < task_list.school.length) {
        school_task.textContent = task_list.school[school_index];
    }
    else {
        school_task.textContent = "All school tasks completed!"
    }

    if (career_index < task_list.career.length) {
        career_task.textContent = task_list.career[career_index];
    }
    else {
        career_task.textContent = "All career tasks completed!"
    }

    if (health_index < task_list.health.length) {
        health_task.textContent = task_list.health[health_index];
    }
    else {
        health_task.textContent = "All health tasks completed!"
    }

    if ((school_index >= task_list.school.length) && (career_index >= task_list.career.length) && (health_index >= task_list.health.length)) {
        raceButton.style.display = "block";
        raceButton.removeAttribute("disabled");
        print_out_container.style.display = "none";


        
    }

}

// Checks for click and prints out proper task in array
function task_completer() {
    document.getElementById("school-button").addEventListener("click", function() {
        school_index++;
        display_current_tasks();
    });

    document.getElementById("career-button").addEventListener("click", function() {
        career_index++;
        display_current_tasks();
    });

    document.getElementById("health-button").addEventListener("click", function() {
        health_index++;
        display_current_tasks();
    });

}

function main() {
    display_current_tasks();
    task_completer();
}

// Insert training image
document.getElementById("uniform-img-space").src = uniform_img;

// Button to start race, moves to success page, only visible after all tasks are done
document.getElementById("race-button").addEventListener("click", function() {
    window.location.href = "success.html";
});


main();