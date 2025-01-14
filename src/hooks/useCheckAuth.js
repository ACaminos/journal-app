// React
import { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Firebase
import { onAuthStateChanged } from "firebase/auth";

// Components
import { FirebaseAuth } from "../firebase/config";
import { login, Logout } from "../store/auth";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch()

    useEffect( () => {
      onAuthStateChanged( FirebaseAuth, async ( user ) => {
          if ( !user ) return dispatch( Logout() );

          const { uid, email, displayName, photoURL } = user;

          dispatch( login( { uid, email, displayName, photoURL } ) );
          dispatch( startLoadingNotes() );
        } )
    }, [] );

    return{
        status
    }
}