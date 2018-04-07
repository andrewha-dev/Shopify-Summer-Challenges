$(document).ready(function () {
    $("#formSubscription").submit(function (e) { 
        e.preventDefault();
        if (validateEmail() === true)
        {
            displayFormInputs();
        }
        
    });

    var validateEmail = function(){
        const EMAIL_ERROR_MESSAGE = "Please enter a valid email address";
        let emailRegex =/.+@.+[.]/;
        let emailEntered = $("#txtEmail").val();
        let errorMessage = emailRegex.test(emailEntered) ? "" : EMAIL_ERROR_MESSAGE;
        $(".errorMessage").text(errorMessage);
        return errorMessage == EMAIL_ERROR_MESSAGE ? false : true;
    }

    var displayFormInputs = function(){        
        console.log("Email Entered: " + $("#txtEmail").val());        
        let interestedIn = $("#ddlInterested").val() || "Newsletter not selected";
        console.log("Interested In: " + interestedIn);
    }
});