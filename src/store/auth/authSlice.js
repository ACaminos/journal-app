import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
     name: 'auth',
     initialState: {
         status : 'not-authenticated', // 'not-authenticated', 'authenticated'
         uid : null,
         email : null,
         displayName : null,
         photoURL : null,
         errorMessage : null,
     },
     reducers: {
         login: (state, /* action */ ) => { state.counter += 1; },

         Logout : ( state, payload ) => {},

         checkingCredential : ( state ) => { state.status = 'checking'; }
     }
  });
export const { Logout, login, checkingCredential } = authSlice.actions;