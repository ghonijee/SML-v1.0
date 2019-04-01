
import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBVlstHuTtJ1WMQKhSGGpNvp3OEjL-GsOs",
  authDomain: "solomobilelearning.firebaseapp.com",
  databaseURL: "https://solomobilelearning.firebaseio.com",
  projectId: "solomobilelearning",
  storageBucket: "solomobilelearning.appspot.com",
  messagingSenderId: "1097040946073"
};

const app =Firebase.initializeApp(config);

const db = app.database();

export default db;

// var todo = db.ref('nama root pertaman') *untuk konnek ke root
