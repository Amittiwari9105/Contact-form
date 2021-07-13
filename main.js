
function onSubmit() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var contact_number = document.getElementById("contact_number").value;
    var dob = document.getElementById("dob").value;
    var city = document.getElementById("city").value;
    var breif_bio = document.getElementById("breif_bio").value;
    const person = {
        "fname" : first_name,
        "lname" : last_name,
        "email" : email,
        "contact_number" : contact_number,
        "dob" : dob,
        "city": city,
        "breif_bio": breif_bio
    }
        localStorage.setItem('user', JSON.stringify(person) );
        alert("Data Added Sucessfully");


        var data =  JSON.parse(localStorage.getItem('user'));
       
        
        document.querySelector(".fname").innerHTML = data.fname;
    
        document.querySelector(".lname").innerHTML = data.lname;
        document.querySelector(".email").innerHTML = data.email;
        document.querySelector(".dob").innerHTML = data.dob;
        document.querySelector(".city").innerHTML = data.city;
        document.querySelector(".contact").innerHTML = data.contact_number;
         document.querySelector(".bio").innerHTML = data.breif_bio;
    }
 