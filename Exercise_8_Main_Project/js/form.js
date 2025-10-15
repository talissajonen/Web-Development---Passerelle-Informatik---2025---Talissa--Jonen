// Get the form and the result paragraph
let form = document.getElementById('contact-form'); 
let result = document.getElementById('result');   

// Add an event listener for form submission
form.onsubmit = function(event) {
  event.preventDefault(); // prevents the page from reloading

  // Get the values from the inputs and cut with trim the spaces in the beggining and end
  let name = document.getElementById('nameid').value.trim();
  let phone = document.getElementById('phoneid').value.trim();
  let email = document.getElementById('emailid').value.trim();
  let message = document.getElementById('msgid').value.trim();

  // Check required fields and if not filled, send to the user to fill the required fields
  if (name === "" || email === "" || message === "") {
    result.style.color = "red";
    result.innerText = "Please fill all required fields.";
    return; // stop the function if validation fails
  }

  // Simple email validation using regex
  let emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailCheck)) {
    result.style.color = "red";
    result.innerText = "Invalid email address.";
    return;
  }

  // Show a "sending" message while the data is sent
  result.style.color = "black";
  result.innerText = "Sending message...";

  // Send the form data to the server using fetch
  fetch('/send', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ // turns the data into a JSON text
      name: name,
      phone: phone,
      email: email,
      message: message
    })
  })
  .then(res => res.json()) // convert response to JSON
  .then(data => {
    if (data.success) {
      result.style.color = "green";
      result.innerText = data.message;
      form.reset(); // If it is success, show the message in green and clear the form
    } else {
      result.style.color = "red";
      result.innerText = data.message;   // If the server responds but indicates failure, show the error message in re
    }
  })
  .catch(error => { // catch any network or server errors
    result.style.color = "red";
    result.innerText = "Error sending form.";
    console.log(error); // log error to console for debugging
  });
};