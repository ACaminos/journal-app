import { useMemo } from "react"

// Redux
import { useDispatch, useSelector } from "react-redux"

// React Router Dom
import { Link as RouterLink } from "react-router-dom"

// Thunks
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"

// Custom Hooks
import { useForm } from "../../hooks/useForm"

// Components
import { AuthLayout } from "../layout/AuthLayout"

// Resource
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

const formData = {
  email : "",
  password: ""
}


export const LoginPage = () => {
  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm( formData );

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword( { email, password } ) )
    console.log( { email, password } );
  }

  const onGoogleSingIn = () => { dispatch( startGoogleSignIn() ) }

  const onLoginSignIn = () => { dispatch( startLoginWithEmailPassword( { email, password } ) ) }

  return (
    <AuthLayout title="Login">
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={ { mt : 2 } }>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={ { mt : 2 } }>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={ 12 } sx={ { mt: 2 } } display={ !!errorMessage ? '' : 'none' }>
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid>

          <Grid container spacing={ 2 } sx={ { marginBottom: 2, marginTop : 1 } }>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" disabled={ isAuthenticating } fullWidth onClick={ onLoginSignIn }>Login</Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" disabled={ isAuthenticating } fullWidth onClick={ onGoogleSingIn }>
                <Google/>
                <Typography sx={ { marginLeft : 1 } }>Google</Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction={ "row" } justifyContent={ "end" }>
            <Link component={ RouterLink } color="inherit" to="/auth/register">Crear una cuenta</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}