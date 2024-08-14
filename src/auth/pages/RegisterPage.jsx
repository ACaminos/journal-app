import { useMemo, useState } from "react"

// Redux
import { useDispatch, useSelector } from "react-redux"

//React Router Dom
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

//Auth
import { startCreatingUserWithEmailPassword } from "../../store/auth"

//Custom Hook
import { useForm } from "../../hooks/"

//Resources
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

const formData = {
  email : '',
  password : '',
  displayName : ''
}

const formValidations = {
  email : [ ( value ) => value.includes( '@' ), 'El correo debe de tener un @' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
  password : [ ( value ) => value.length >= 6, 'El password debe de tener mas de 6 letras' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
  displayName : [ ( value ) => value.length > 0, 'El nombre es obligatorio' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
}

export const RegisterPage = () => {

  const dispatch = useDispatch()

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [ status ] );

  const [ formSubmitted, setformSubmitted ] = useState( false )

  const { formState, isFormValid, displayName, displayNameValid, email, emailValid, password, passwordValid, onInputChange } = useForm( formData, formValidations )

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted( true );

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={ { mt : 2 } }>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error = { !!displayNameValid && formSubmitted } //doble negacion para convertir el valor en un booleano
              helperText = { displayNameValid }
            />
          </Grid>

          <Grid item xs={ 12 } sx={ { mt : 2 } }>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error = { !!emailValid && formSubmitted } //doble negacion para convertir el valor en un booleano
              helperText = { emailValid }
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
              error = { !!passwordValid && formSubmitted } //doble negacion para convertir el valor en un booleano
              helperText = { passwordValid }
            />
          </Grid>

          <Grid container spacing={ 2 } sx={ { marginBottom: 2, marginTop : 1 } }>

            <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
              <Alert severity="error">{ errorMessage }</Alert>
            </Grid>

            <Grid item xs={ 12 }>
              <Button type="submit" variant="contained" disabled={ isCheckingAuthentication } fullWidth>Crear cuenta</Button>
            </Grid>

          </Grid>

          <Grid container direction={ "row" } justifyContent={ "end" }>
            <Typography sx={ {marginRight : 1 } }>¿Ya tienes cuenta?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">Ingresar</Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}