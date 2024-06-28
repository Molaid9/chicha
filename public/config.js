
  const firebaseConfig = {
    apiKey: "AIzaSyA4aNSThIOH9noN663dh_Kf5NabCP1huC4",
    authDomain: "level2project-7929e.firebaseapp.com",
    projectId: "level2project-7929e",
    storageBucket: "level2project-7929e.appspot.com",
    messagingSenderId: "613623295349",
    appId: "1:613623295349:web:f9ffdf655546239f26373c"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
