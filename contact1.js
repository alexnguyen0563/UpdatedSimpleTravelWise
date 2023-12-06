const firebaseConfig = {
    apiKey: "AIzaSyA583UoRsjh62Y_sEBCV4xa4jcfH7sIYFM",
    authDomain: "travel-wise-b7d29.firebaseapp.com",
    projectId: "travel-wise-b7d29",
    databaseURL: "https://travel-wise-b7d29-default-rtdb.firebaseio.com/",
    storageBucket: "travel-wise-b7d29.appspot.com",
    messagingSenderId: "406298994217",
    appId: "1:406298994217:web:9e436bb16a3d76fd0f9e38"
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
        name: name: ,
        email: email,
        subject: subject,
        message: message

    });
}
