const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyDbrV6Pnu_5NozhBSmG0XpoC0SPqmv85TA",
    authDomain: "uwasteupitra.firebaseapp.com",
    databaseURL: "https://uwasteupitra-default-rtdb.firebaseio.com",
    projectId: "uwasteupitra",
    storageBucket: "uwasteupitra.appspot.com",
    messagingSenderId: "231873877560",
    appId: "1:231873877560:web:645aae2336fe2740c7b8cd"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var uwasteDB = firebase.database().ref("uwaste");

document.getElementById("buying").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var name = getElementalVal ('name');
    var waste = getElementVal ('waste-type')
    var weight = getElementVal ('kg');
    var delivery = getElementVal ('delivery-address');
    var phone = getElementVal ('phone');
    console.log(name,waste,weight,delivery,phone);

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};