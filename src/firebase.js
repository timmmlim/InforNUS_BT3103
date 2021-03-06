import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyBuFcybqol7iY1TVRsUAuEuZU-_-Hr8Q9Q",
  authDomain: "infornus-40bae.firebaseapp.com",
  databaseURL: "https://infornus-40bae.firebaseio.com",
  projectId: "infornus-40bae",
  storageBucket: "infornus-40bae.appspot.com",
  messagingSenderId: "781195743850"
};

let app = firebase.initializeApp(config);
let db = app.database();
let course_admin_info = db.ref("/course_admin_info/data");
let student_career_info = db.ref("/student_career_info/data");

export default db;
