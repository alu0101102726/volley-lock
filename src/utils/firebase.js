import { useFirebaseAuth } from 'vuefire';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

async function firebaseRegister(auth, swal) {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    }).catch((error) => {
      swal('ERROR en la autenticación', error.toString(), 'error')
  });
}

function firebaseLogin () {
    const auth = useFirebaseAuth();
    return auth;  
}

async function firebaseLogout (swal) {
    const auth = useFirebaseAuth();
    return await signOut(auth).then(() => {
        swal('Cierre de sesión con éxito', '', 'success')
        return false;
    }).catch((error) => {
        swal('ERROR al cerrar sesión', error.toString(), 'error')
    });
}

export { firebaseLogin, firebaseRegister, firebaseLogout }