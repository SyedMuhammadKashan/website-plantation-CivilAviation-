import * as firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyAQANpadoLTW4O1UIOkYCtf3UfvyVSIqlA",
    authDomain: "plantation-177be.firebaseapp.com",
    databaseURL: "https://plantation-177be.firebaseio.com",
    projectId: "plantation-177be",
    storageBucket: "plantation-177be.appspot.com",
    messagingSenderId: "69245795083",
    appId: "1:69245795083:web:e45f88c35cefec6360000e",
    measurementId: "G-1BS6X1E59H"
  };


  const fire =firebase.initializeApp(firebaseConfig);

  export default fire;
