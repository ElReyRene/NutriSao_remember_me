// Importamos las funciones necesarias desde Firebase
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase, usa los valores proporcionados
const firebaseConfig = {
  apiKey: "AIzaSyCH32pB5Dk7cqHkaTv4SpWCHFsFrSKX9Qw",
  authDomain: "nutrisaoapp.firebaseapp.com",
  projectId: "nutrisaoapp",
  storageBucket: "nutrisaoapp.firebasestorage.app",
  messagingSenderId: "508649226829",
  appId: "1:508649226829:web:cfa0f7c95da012ff2f9204",
  databaseURL: "https://nutrisaoapp-default-rtdb.firebaseio.com" // <- AGREGAR ESTO
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos Firestore
const db = getFirestore(app);

// Inicializamos la autenticación
const auth = getAuth(app);

// Variable para obtener el usuario autenticado
let user = null;

// Verificamos el estado de la autenticación
onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    user = currentUser; // Si el usuario está autenticado, guardamos su información
  } else {
    user = null; // Si no está autenticado
  }
});

// Exportamos lo necesario
export { db, user };
