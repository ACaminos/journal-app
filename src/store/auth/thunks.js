import { singInWithGoogle } from "../../firebase/providers"
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