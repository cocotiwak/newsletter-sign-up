function validateEmail() {
    // get input
    var emailInput = document.getElementById('inputEmail').value;
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
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


      } else {
        var wrongEmail = document.getElementById("wrongEmail");
        let inputEmail = document.getElementById("inputEmail");
            if (wrongEmail.classList.contains('hidden')) {
                wrongEmail.classList.toggle("hidden");
                inputEmail.classList.toggle("bg-tomatoTransparent")
            }
      }


    

}