// index.js

//import Contact from "./contact.js";
    

/*var number = 5;
let name = "Denis";

number = 12;
name = "pluralsight"
//writing to the document
document.writeln(name + number);*/
const formInfo = document.getElementById("formInfo");
let hasJob = false;
if(hasJob){
    // i have a job
    showMessage("thanks for visiting, Im currently employed")
}
else{
    //i need a job
    showMessage("Please look around, Im currently looking for a position")
}

let today = new Date();
let dayOfWeek = today.getDay();
if(dayOfWeek === 0 ||dayOfWeek ===6){
    showMessage("Since it is the weekend, please be patient wwith my returning the email.")
}

function showMessage(Message){
    formInfo.innerHTML = "<p>" + Message + "</p>"
}

function clearMessage(){
    formInfo.innerHTML = "";
}

const contactForm = document.getElementById("contact");
contactForm.addEventListener("submit", function(event){
event.preventDefault();
const contact = new Contact(contactForm);
contact.send();
showMessage("Sending your message... Thank you"+ contact.fullname);
});

const experiences = document.getElementsByClassName("experience");
for(let x = 0; x < experiences.length;x++ ){
    const item  = experiences[x];
    item.addEventListener('mouseenter',function(event){
        event.target.style = "background-color: #808080;";
    });
    item.addEventListener('mouseleave',function(event){
        event.target.style = "";
    });
}
class Contact{
    constructor(form){
        this.fullname = form.elements["fullname"].value
        this.email = form.elements["email"].value
        this.subject = form.elements["subject"].value
        this.body = form.elements["msg"].value

    }

    fullname = "";
    email = "";
    subject = "";
    body = "";

    send(){
        console.info(this.formatMessage());
        document.getElementById("formInfo").innerHTML ="we`re not sending email yet... feature for version 2";

    }

    formatMessage(){
        return `to: ${this.fullname}
                Email:${this.email}
                Subject: ${this.subject}
                Body: ${this.body}`;
    }
};
