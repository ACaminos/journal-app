//React Router Dom
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

//Custom Hook
import { useForm } from "../../hooks/useForm"

//Resources
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

const formData = {
  email : 'acaminos@gmail.com',
  password : '123456',
  displayName : 'Ariel Caminos'
}

const formValidations = {
  email : [ ( value ) => value.include( '@' ), 'El correo debe de tener un @' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
  password : [ ( value ) => value.length >= 6, 'El password debe de tener mas de 6 letras' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
  displayName : [ ( value ) => value.length >=1, 'El nombre es obligatorio' ], // La primera posicion del arreglo es la funcion que evalua, el segundo es el mensaje del error
}

export const RegisterPage = () => {

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations )

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log ( formState )
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
              error = { !displayNameValid }
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

            <Grid item xs={ 12 }>
              <Button type="submit" variant="contained" fullWidth>Crear cuenta</Button>
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