const firebaseConfig = {
  //   copy your firebase config informations
apiKey: "AIzaSyAA8XU1ZHlXjFuxRVauGH0BtLVx40G3ENk",
  authDomain: "uwaste-4f273.firebaseapp.com",
  databaseURL: "https://uwaste-4f273-default-rtdb.firebaseio.com",
  projectId: "uwaste-4f273",
  storageBucket: "uwaste-4f273.appspot.com",
  messagingSenderId: "631518771734",
  appId: "1:631518771734:web:cb05008ed0575486245337"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var uwasteDB = firebase.database().ref("uwaste");

document.getElementById("buying").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var name = getElementVal ('name');
    var waste = getElementVal ('waste-type')
    var weight = getElementVal ('kg');
    var delivery = getElementVal ('delivery-address');
    var phone = getElementVal ('phone');
    console.log(name,waste,weight,delivery,phone);

  saveMessages(name,waste,weight,delivery,phone);

  //   enable alert
//   document.querySelector(".alert").style.display = "block";

  //   remove the alert
//   setTimeout(() => {
//     document.querySelector(".alert").style.display = "none";
//   }, 3000);

  //   reset the form
  document.getElementById("buying").reset();
}

const saveMessages = (name,waste,weight,delivery,phone) => {
  var newUwasteDB = uwasteDB.push();

  newUwasteDB.set({
    name: name,
    waste: waste,
    weight: weight,
    delivery: delivery,
    phone: phone,
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};