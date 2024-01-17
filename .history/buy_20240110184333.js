const firebaseConfig = {
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

  // reference firebase
  var uwasteDB = firebase.database().ref('uwaste')

document.getElementById('buying').addEventListener('send',sendform);

function sendform(e){
    e.preventdefault();

    var name = getElementalVal ('name');
    var waste = getElementVal ('waste-type')
    var weight = getElementVal ('kg');
    var delivery = getElementVal ('delivery-address');
    var phone = getElementVal ('phone');

    console.log(name,waste,weight,delivery,phone);

}

const getElementVal = (id) => {
    return document .getElementById(id).value;
}