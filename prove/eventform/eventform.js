
const form = document.querySelector("#eventForm");
const typeField = document.querySelector("#typeField");
const IDContainer = document.querySelector("#IDContainer");
const ID = document.querySelector("#ID");
const output = document.querySelector("#output");


function updateTypeField() {
  const value = typeField.value;

  if (value === 'student'){
    IDContainer.hidden = false;
    ID.required = true;
  } else {
    IDContainer.hidden = true;
    ID.required = false
  }    
}

travelRange.addEventListener("change", updateIDField);
updateIDField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const eventDate = form.eventDate.value;
  const ID = form.ID.value.trim();

  // Validate the input
  
  if (type === 'student' && !ID){
      output.textContent = "Please input your ID";
      return
  }

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${eventDate}</p>
  <p>Type: ${type}</p>
  `;

  form.reset();
  updateIDField();
});
          