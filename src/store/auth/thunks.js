import { loginWithEmailPassword, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkingCredential, login, Logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async ( dispatch ) => {
        dispatch( checkingCredential() )
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredential() );

        const result = await singInWithGoogle();

        if( !result.ok ) return dispatch( Logout( result.errorMessage ) );

        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = ( { email, password, displayName } ) => {
    return async( dispatch ) => {
        dispatch( checkingCredential() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword( { email, password, displayName } );

        if( !ok ) return dispatch(Logout( { errorMessage } ) );

        dispatch( login( { uid, displayName, email, photoURL } ) );

        // console.log( resp );

    }
}

export const startLoginWithEmailPassword = ( { email, password } ) => {
    return async( dispatch ) => {
        dispatch( checkingCredential() );

        const result = await loginWithEmailPassword( { email, password } );

        if( !result.ok ) return dispatch(Logout( ( result ) ) );

        dispatch( login( result ) );
    }
}