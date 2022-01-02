const firebaseConfig = {
  apiKey: "AIzaSyDFMy6jtaSguUVog2V7iYGt0hplAp5ZOYw",
  authDomain: "bangladesh-3fc2b.firebaseapp.com",
  databaseURL: "https://bangladesh-3fc2b-default-rtdb.firebaseio.com",
  projectId: "bangladesh-3fc2b",
  storageBucket: "bangladesh-3fc2b.appspot.com",
  messagingSenderId: "786616429988",
  appId: "1:786616429988:web:6b323a16545d4eb3a82531",
  measurementId: "G-PG7XVX0FYK"
};


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('Accounts')

document.getElementById('signupForm').addEventListener("submit", submitForm);


function submitForm(e) {

  e.preventDefault();

  var firstname = getElementVal('firstname');
  var lastname = getElementVal('lastname');
  var emailid = getElementVal('emailid');
  var password = getElementVal("password");


  console.log(firstname, lastname, emailid, password);

  saveMessages(firstname, lastname, emailid, password);

  document.getElementById("signupForm").reset();

}


const saveMessages = (firstname, lastname, emailid, password) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    firstname: firstname,
    lastname: lastname,
    emailid: emailid,
    password: password
  })
}

const getElementVal = (id) => {
  return document.getElementById(id).value;

};



