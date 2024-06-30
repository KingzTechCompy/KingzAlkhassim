const dynamicText = document.querySelector(".text-three .body span");
const words = ["A Programmer.", "Web developer.", "A hero.", "Join the Tornament below.",];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();



//get modal
var modal = document.getElementById('mymodal');

//inserting img in the modal -  use its "alt" text as a caption
var img = document.getElementById('mylogo');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

//get the span element that closes the modal

var span = document.getElementsByClassName("closes")[0];

//when the user click on the <span> (x) close the modal
span.onclick = function() {
    modal.style.display = "none";
}