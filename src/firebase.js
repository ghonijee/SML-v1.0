
import Firebase from 'firebase'

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

const app =Firebase.initializeApp(config);

const db = app.database();

export default db;

// var todo = db.ref('nama root pertaman') *untuk konnek ke root
