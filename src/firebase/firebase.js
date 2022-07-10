import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  onValue,
  push,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_IS,
  appId: process.env.FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const database = getDatabase();

export { database as default };

// push(ref(db, 'expenses') ,{
//   amount: 10200,
//   note:'',
//   description: 'Rent',
//   createdAt:6646546,

// });

// set(ref(db), {
//     name: 'Santosh',
//     stressLevel:6,
//     job:{
//       title: "Hardware Engineer",
//       company:"Dacota"
//     },
//     location:{
//         city:'Hyderabad',
//         country: 'India'
//     }
// }).then(() => {
//   console.log("Data is saved");
// }).catch((err) => {
//   console.log("Error: " + err);
// });

// update(ref(db),{
//   stressLevel: 9,
//   "job/company": "Jaffa",
// }).then(() => {
//   console.log("Data is updated");
// }).catch((err) => {
//     console.log("Error: " + err);
// });

// remove(ref(db, 'name')).then(() => {
//     console.log('data is deleted')
// }).catch((e) => {
//     console.log('Error: ',e)
// })

// onValue(ref(db),
//     (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(val);
//     }, {
//         onlyOnce: true
//     }
// )
