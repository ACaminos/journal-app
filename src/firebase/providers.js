// Firebase
import { FirebaseAuth } from "./config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return{
            ok : true,

            // User Info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log( error )

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok : false,

            // Error details
            errorCode, errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async( { email, password, displayName } ) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // console.log( 'acaa -->', resp )

        // TODO: Actualizar el displayName en Firebase
        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return{
            ok : true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log( error )
        return{ ok : false, errorMessage : error.message }
    }
}

export const loginWithEmailPassword = async( { email, password } ) => {
    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        // console.log('acaa -->', resp)
        const { displayName, photoURL, uid } = resp.user;

        return{
            ok : true,
            email, password, displayName, photoURL
        }
    } catch (error) {
        console.log( error )
        return{ ok : false, errorMessage : error.message }
    }
}