const firebaseConfig = {
    apiKey: "AIzaSyAGTDrvPy_SHN01wRFlvRPJqRIe91nnay4",
    authDomain: "travelwiselogin.firebaseapp.com",
    projectId: "travelwiselogin",
    databaseURL: "https://travelwiselogin-default-rtdb.firebaseio.com/",
    storageBucket: "travelwiselogin.appspot.com",
    messagingSenderId: "204944130935",
    appId: "1:204944130935:web:c7801218afb84f66b61772",
    measurementId: "G-BYKD0JC786"
  };
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
});
function send(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    detailsRef.push().set({
        email: email,
        username: username,
        password: password,
    });
}