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