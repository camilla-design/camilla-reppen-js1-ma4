const firstName = document.querySelector("#firstName");
const error = document.querySelector(".error");

error.style.displey = `none`;

firstName.addEventListener("keyup", checkLength);

function checkLength(event) {
    const inputValue = event.target.value;
    const valueLength = inputValue.length;

    if(valueLength > 2) {
        error.style.display = `none`;
    } else {
        error.style.display = `block`;
    }

}



