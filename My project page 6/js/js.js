document.getElementById('form').addEventListener('submit', submitForm);

  // Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
  

function submitForm(e){
        e.preventDefault();
        // Get values
        var name = getInputVal('name');
        var surname = getInputVal('surname');
        var message = getInputVal('hp');
        var mobilenum = getInputVal('msg');
        saveMessage(name,surname,hp,msg);
        document.getElementById('form').reset();
    }
// Cl
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvtYT4_5T0VD6uGCRvmr9fPY8SnvoknPw",
    authDomain: "contact-us-4f0d8.firebaseapp.com",
    databaseURL: "https://contact-us-4f0d8.firebaseio.com",
    projectId: "contact-us-4f0d8",
    storageBucket: "",
    messagingSenderId: "613257275539"
  };
  firebase.initializeApp(config);
  
  
var messagesRef = firebase.database().ref('messages');

// Save message to firebase
function saveMessage(name,surname,hp,msg){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      surname:surname,
     hp :hp,
      msg:msg,
    });
  }