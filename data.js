var data = JSON.parse(localStorage.getItem('user'));


document.querySelector(".fname").innerHTML = data.fname;

document.querySelector(".lname").innerHTML = data.lname;
document.querySelector(".email").innerHTML = data.email;
document.querySelector(".dob").innerHTML = data.dob;
document.querySelector(".city").innerHTML = data.city;
document.querySelector(".contact").innerHTML = data.contact_number;
document.querySelector(".bio").innerHTML = data.breif_bio;

