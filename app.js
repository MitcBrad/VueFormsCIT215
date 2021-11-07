new Vue({
    el: "#input-form",
    data: {
        name: "",
        email: "",
        emailRules: [ v => /.+@.+/.test(v) || 'Email does not meet requirements.' ]
    }
})

function clicked(){
    alert("Your name requires at least 2 characters.\nYour email requires an @ and .");
}


// Input: Name (text field). The input needs to have at least 2 characters. Required.
// Input: Email (text field). The input needs to be a valid email address. Required.