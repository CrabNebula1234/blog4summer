let myname="Avery";
let age=13; 
let likesushi=true; 

function greeter(myname) {
    console.log("Hello, ",myname)
}

greeter("Avery")

function saveName() {
    let newName = document.getElementById("greeter").value; //text field value from the user
    document.getElementById('username').textContent = newName; 
    document.getElementById("greeter").value = ""; 
}

//Accordion Functionality 
document.querySelectorAll('.accordion-header').forEach(function (button) {
    button.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none': 'block';
    });
}); 

//Password 4 secret entries
const PASSWORD="password4blog";

function validatePass() {
    const login = document.getElementById('password');
    const message = document.getElementById('message');
    const hiddenEntries = document.querySelectorAll(".hidden");

    if (login.value === PASSWORD) {
        message.textContent= 'Password correct. See hidden entries below.';
        hiddenEntries.forEach(function(entry) {entry.style.display ='flex';});
    } else {
        message.textContent= 'Password incorrect. Try again.';
        hiddenEntries.forEach(function(entry) {entry.style.display ='none';});
    }

    login.value='';
    
}; 