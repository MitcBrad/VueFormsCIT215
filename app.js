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
                codename:"Joker",

            },
            {
                name:"Anne",
                codename:"Panther"},
            {
                name:"Ryuji",
                codename:"Skull"}
        ]
    }
})

function swap(){
    let x = document.getElementById("true1");
    let y = document.getElementById("false1");
    x.setAttribute('id','false1');
    x.setAttribute('class','header visible');
    y.setAttribute('id','true1');
    y.setAttribute('class','header');
}
function swap2(){
    let x = document.getElementById("true2");
    let y = document.getElementById("false2");
    x.setAttribute('id','false2');
    x.setAttribute('class','header visible');
    y.setAttribute('id','true2');
    y.setAttribute('class','header');
}
function swap3(){
    let x = document.getElementById("true3");
    let y = document.getElementById("false3");
    x.setAttribute('id','false3');
    x.setAttribute('class','header visible');
    y.setAttribute('id','true3');
    y.setAttribute('class','header');
}

// new Vue({
//     el: '#switch',
//
//     data() {
//         return {
//             toggle: false
//             }
//         }
// })

// Input: Name (text field). The input needs to have at least 2 characters. Required.
// Input: Email (text field). The input needs to be a valid email address. Required.

// Part 2: Using [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}],
// create a list of components that have unique names and that when I click on them, it toggles between the name and codename.
