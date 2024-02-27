function addBtn() {
    var btn = document.getElementById("newBtn");
    var element = document.getElementById("finalBtn");
    element.style.fontSize = "1.2rem";
    element.style.color = "red";
    element.innerHTML = "Sorry, Resume is not available right now!!!";
}


function dataSubmit() {

    var fName = document.getElementById("f_name").value;
    var lName = document.getElementById("l_name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("exampleFormControlTextarea1").value;

    if(fName == "") {
        alert("First name is mandatory");
        return false;
    }
    if(lName == "") {
        alert("Last name is mandatory");
        return false;
    }
    if(email == "") {
        alert("Email is mandatory");
        return false;
    }
    if(!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    if(number == "") {
        alert("Phone number is mandatory");
        return false;
    }
    if(message == "") {
        alert("Message is mandatory");
        return false;
    }

    var btn2 = document.getElementById("submit");
    var element2 = document.getElementById("response");
    element2.style.fontSize = "1.2rem";
    element2.style.color = "#070F2B";
    element2.innerHTML = "Your response submited successfully!!!";
}
