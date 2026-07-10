console.log("test");
// Training logic

school = ["WDD Homework 2", "CSE Homework 2", "ECEN Project 1", "Study for Exam 1", "Talk to professor", "Extra credit assignment"];
career = ["Apply to 5 jobs", "Informational Interview", "Research Companies", "Cold Email a local tech company", "Make 5 Connections", "Play Puzzle"];
health = ["Shower", "Eat breakfast", "Take Medication", "Clean up floor", "Do a Relaxing Task", "Drink a glass of water"];

function random_task(task_list){
    let random_task_num = Math.floor(Math.random() * task_list.length);
    let task = task_list[random_task_num];
    task_list.splice(random_task_num, 1);
    return task;
}

function check_if_done() {
    if (school.length === 0 && career.length === 0 && health.length === 0) {
        const doneButton = document.getElementById("done-button");
        doneButton.disabled = false;
        doneButton.style.display = "inline-block";
    }
}

document.getElementById("done-button").addEventListener("click", function() {
    window.location.href = "success.html";
});

school_counter = 0;
career_counter = 0;
health_counter = 0;

function main() {
    let school_task = random_task(school);
    let career_task = random_task(career);
    let health_task = random_task(health);
    document.getElementById("school").innerHTML = school_task;
    document.getElementById("career").innerHTML = career_task;
    document.getElementById("health").innerHTML = health_task;

    document.getElementById("school-button").addEventListener("click", function() {
        if (school.length > 0) {
            document.getElementById("school").innerHTML = random_task(school);
            school_counter++;
            document.getElementById("school-counter").innerHTML = school_counter
        } else {
            document.getElementById("school").innerHTML = "No more tasks!";
        }
        check_if_done();
    });

    document.getElementById("career-button").addEventListener("click", function() {
        if (career.length > 0) {
            document.getElementById("career").innerHTML = random_task(career);
            career_counter++
        } else {
            document.getElementById("career").innerHTML = "No more tasks!";
        }
        check_if_done();
    });

    document.getElementById("health-button").addEventListener("click", function() {
        if (health.length > 0) {
            document.getElementById("health").innerHTML = random_task(health);
            health_counter++
        } else {
            document.getElementById("health").innerHTML = "No more tasks!";
        }
        check_if_done();
    });
}


main();