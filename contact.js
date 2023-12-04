// get details through from contact form
// name, email, subject, message

// after connecting your application through firbase use this code to send data on firebase firestore

import { setDoc, doc } from "firebase/firestore";
const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && subject && message) {
    //   const uid=nanoid(); you have to get a unique id you can use nanoid or any other method
      const docRef = setDoc(doc(fs, "queries",uid), { // you can use any name for collection or you can use queries as a collection name
        id:uid,
        name: name,
        email: email,
        subject: subject,
        message: message,
      });
      alert('We will contact you soon!');
    }
};


// to retrieve data from firestore use this code
import { getDocs, collection} from "firebase/firestore";

const fetchData = async () => {

    let queryData = collection(fs, "queries");// just write the collection name here
    let queryDataSnapshot = await getDocs(queryData);
    const result = queryDataSnapshot.docs.map((doc) => doc.data());
    //you will get data as a object in result
  };