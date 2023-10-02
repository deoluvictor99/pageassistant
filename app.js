const allBoxes = document.querySelectorAll(".box");
const assistant = document.getElementById("assistant");
const messageDisplay = document.createElement("p");


const messages = {
    box1: "click this button to change the background colour",
    box2: "Click this button to scale it up and down",
    box3: "Click this button to rotate it back and forth",
    box4: "Click this button to shake it",
};

function moveAssistant(button) {
    assistant.style.transition = "all 0.5s ease-in-out";
    assistant.style.left = `${button.getBoundingClientRect().right}px`;
    assistant.style.top = `${button.getBoundingClientRect().bottom}px`;
    assistant.appendChild(messageDisplay);
}

allBoxes.forEach((item) => {
    item.addEventListener("mouseover", () => {
        moveAssistant(item);
        for (const key in messages) {
            const message = messages[key];
            if (key == item.id) {
                messageDisplay.style.backgroundColor = "transparent";
                messageDisplay.style.border = '1px solid white'
                messageDisplay.style.padding = '1rem'
                messageDisplay.style.color = "white";
                messageDisplay.textContent = message;
            }
        }
});

    item.addEventListener("mouseout", () => {
        // Reset the assistant's position when the cursor leaves the button
            assistant.style.left = "10px";
            assistant.style.top = "91vh";
            messageDisplay.textContent = "";
    });
});


// Get a reference to box1
const box1 = document.getElementById('box1');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

box1.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

const box2 = document.getElementById('box2');

box2.addEventListener('click', function () {
    box2.classList.toggle('scaled');
});


// Get a reference to box3
const box3 = document.getElementById('box3');

// Add a click event listener to box3
box3.addEventListener('click', function () {
    // Toggle the "rotated" class to apply the rotation effect
    box3.classList.toggle('rotated');
});




// Get a reference to box4
const box4 = document.getElementById('box4');

// Add a click event listener to box4
box4.addEventListener('click', function () {
    // Toggle the "shake" class to apply or remove the shake animation
    box4.classList.toggle('shake');
    
    // After 0.5 seconds (duration of the shake animation), remove the "shake" class
    setTimeout(() => {
        box4.classList.remove('shake');
    }, 500);
});










