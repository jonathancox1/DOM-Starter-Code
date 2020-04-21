const myButton = document.getElementById("clickMe");
const name = document.getElementById("name");
const nameInput = document.getElementById("nameInput");

const email = document.getElementById("email");
const emailInput = document.getElementById("emailInput");

const age = document.getElementById("age");
const ageInput = document.getElementById("ageInput");

const defMsg = document.getElementById("defMsg");
const heading = document.getElementsByTagName("span");


myButton.addEventListener('click', function (e) {
    // prevents the default response to the 'click' event
    // which would submit and refresh the page
    e.preventDefault();
    // reassigning noun1.innerHTML
    name.innerHTML = nameInput.value;
    defMsg.style.display = 'none';
    email.textContent = 'Your email: ' + (emailInput.value);
    age.innerHTML = 'Your age: ' + (ageInput.value);
    document.getElementById('myForm').style.display = 'none';
    document.getElementById('invisible').style.display = 'block';
});


//style.display = 'none';