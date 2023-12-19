function validateEmail() {
    // get input
    var emailInput = document.getElementById('inputEmail').value;


    //toggle container to hide/show
    var containerSatu = document.getElementById("containerSatu");
    var containerDua = document.getElementById("containerDua");

    containerSatu.classList.toggle("hidden");
    containerDua.classList.toggle("hidden");

    //print email address in elementID
    var outputElement = document.getElementById("alamatEmail");
    if (outputElement) {
        outputElement.textContent = '' + emailInput;
    }

}