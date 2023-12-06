const firebaseConfig = {
    apiKey: "AIzaSyA583UoRsjh62Y_sEBCV4xa4jcfH7sIYFM",
    authDomain: "travel-wise-b7d29.firebaseapp.com",
    projectId: "travel-wise-b7d29",
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
    var Full_Name = document.getElementById("Full_Name").value;
    var Email = document.getElementById("Email").value;
    var Subject = document.getElementById("Subject").value;
    var Your_Message = document.getElementById("Your_Message").value;

    detailsRef.push().set({
        Full_Name: Full_Name: ,
        Email: Email,
        Subject: Subject,
        Your_Message: Your_Message

    });
}