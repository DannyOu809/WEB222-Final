function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  var latitude = document.getElementById('lat').value;
  var longitude = document.getElementById('long').value;
  var valid = true;

  var printError = document.getElementById('latERR');
  if(latitude > 90 || latitude < -90) {
    valid = false;
    printError.innerText("* must be a valid Latitude (-90 to 90)");
  }

  printError = document.getElementById('longERR');
  if(longitude > 180 || longitude < -180) {
    valid = false;
    printError.innerText("* must be a valid Longitude (-180 to 180)");
  }

  if(valid === false) {
    event.preventDefault();
  }

  return valid;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
