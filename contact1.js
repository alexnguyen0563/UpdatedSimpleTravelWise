/*const firebaseConfig = {
  apiKey: "AIzaSyDrZDW_Li-VuLD7Ir2e6uuBcxFf_vuZ1p8",
  authDomain: "tvla-c3f4d.firebaseapp.com",
  projectId: "tvla-c3f4d",
  databaseURL: "https://tvla-c3f4d-default-rtdb.firebaseio.com/",
  storageBucket: "tvla-c3f4d.appspot.com",
  messagingSenderId: "548945238419",
  appId: "1:548945238419:web:27261d51388504c3ab7066"
};
*/

const firebaseConfig = {
    apiKey: "AIzaSyDHW5-W9PWuSI4ndbZFk7MRpcdz13nFzVI",
    authDomain: "twcontact-7feee.firebaseapp.com",
    projectId: "twcontact-7feee",
    databaseURL: "https://twcontact-7feee-default-rtdb.firebaseio.com/",
    storageBucket: "twcontact-7feee.appspot.com",
    messagingSenderId: "425524810438",
    appId: "1:425524810438:web:4f526b252a8c6e53ae3dc7"
  };

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
});
function send(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    detailsRef.push().set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}
