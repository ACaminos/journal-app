import { useMemo } from "react"

// Redux
import { useDispatch, useSelector } from "react-redux"

// React Router Dom
import { Link as RouterLink } from "react-router-dom"

// Thunks
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"

// Custom Hooks
import { useForm } from "../../hooks/useForm"

// Components
import { AuthLayout } from "../layout/AuthLayout"

// Resource
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const LoginPage = () => {
  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email : 'acaminos@google.com',
    password : '12345'
  })

  const isAuthenticating = useMemo( () => status === 'checking', [ status ] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log( { email, password } );
    dispatch( checkingAuthentication() )

  }

  const onGoogleSingIn = () => {
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() )
  }


  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
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

          <Grid container spacing={ 2 } sx={ { marginBottom: 2, marginTop : 1 } }>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant="contained" disabled={ isAuthenticating } fullWidth>Login</Button>
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