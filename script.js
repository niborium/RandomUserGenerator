// AJAX - XMLHttpRequest

var xhr = new XMLHttpRequest();
xhr.open("GET", 'https://randomuser.me/api/', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        var myStuff = JSON.parse(xhr.responseText);
        console.log(myStuff);
        document.getElementById("name").textContent = "Namn: " + myStuff.results[0].name.first + " " + myStuff.results[0].name.last
        document.getElementById("phone").textContent = "Telfonnummer: " + myStuff.results[0].phone
        document.getElementById("dob").textContent =  "Ålder: " + myStuff.results[0].dob.age + " -  Datum: (" + myStuff.results[0].dob.date + ")";
        document.getElementById("email").textContent = "Email: " + myStuff.results[0].email
        document.getElementById("gender").textContent = "Kön: " + myStuff.results[0].gender
        gender.textContent = gender.textContent.replace("Kön: male", "Kön: Man");
        gender.textContent = gender.textContent.replace("Kön: female", "Kön: Kvinna");
        document.getElementById("bostadsort").textContent = "Bostadsort: " + myStuff.results[0].location.city
        document.getElementById("land").textContent = "Land: " + myStuff.results[0].location.country
        document.getElementById("postkod").textContent = "Postkod: " + myStuff.results[0].location.postcode
        document.getElementById("street").textContent = "Adress: " + myStuff.results[0].location.street.number + " " + myStuff.results[0].location.street.name
    }
}
xhr.send();

// JavaScript Fetch API

fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(res => {
    document.getElementById("name2").textContent = "Namn: " + res.results[0].name.first + " " + res.results[0].name.last
    document.getElementById("phone2").textContent = "Telfonnummer: " + res.results[0].phone
    document.getElementById("dob2").textContent =  "Ålder: " + res.results[0].dob.age + " -  Datum: (" + res.results[0].dob.date + ")";
    document.getElementById("email2").textContent = "Email: " + res.results[0].email
    document.getElementById("gender2").textContent = "Kön: " + res.results[0].gender
    gender2.textContent = gender2.textContent.replace("Kön: male", "Kön: Man");
    gender2.textContent = gender2.textContent.replace("Kön: female", "Kön: Kvinna");
    document.getElementById("bostadsort2").textContent = "Bostadsort: " + res.results[0].location.city
    document.getElementById("land2").textContent = "Land: " + res.results[0].location.country
    document.getElementById("postkod2").textContent = "Postkod: " + res.results[0].location.postcode

    document.getElementById("street2").textContent = "Adress: " + res.results[0].location.street.number + " " + res.results[0].location.street.name

});