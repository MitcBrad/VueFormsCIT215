new Vue({
    el: "#input-form",
    data: {
        name: "",
        email: "",
    },
    methods:{
        alert: function(){
            alert("thank you for signing up " + this.name + ", your account has been created with the email " + this.email )
        }
    },

})


new Vue({
    el: "#toggle",
    data: {
        toggles:[
            {
                name:"Protagonist",
                codename:"Joker"},
            {
                name:"Anne",
                codename:"Panther"},
            {
                name:"Ryuji",
                codename:"Skull"}
        ]
    },methods: {

    }
})


let starter = true;
document.addEventListener("DOMContentLoaded", () =>{
    if (starter == true){
        let nameheader = document.getElementsByClassName("header");
        nameheader.setAttribute("name", "codename");

        starter = false;
    }
});
// Input: Name (text field). The input needs to have at least 2 characters. Required.
// Input: Email (text field). The input needs to be a valid email address. Required.

// Part 2: Using [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}],
// create a list of components that have unique names and that when I click on them, it toggles between the name and codename.
