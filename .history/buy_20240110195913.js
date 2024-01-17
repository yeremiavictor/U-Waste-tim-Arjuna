const firebaseConfig = {
    apiKey: "AIzaSyDbrV6Pnu_5NozhBSmG0XpoC0SPqmv85TA",
    authDomain: "uwasteupitra.firebaseapp.com",
    databaseURL: "https://uwasteupitra-default-rtdb.firebaseio.com",
    projectId: "uwasteupitra",
    storageBucket: "uwasteupitra.appspot.com",
    messagingSenderId: "231873877560",
    appId: "1:231873877560:web:d0555436cb2d5cb6c7b8cd"
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