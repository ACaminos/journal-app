import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch();

    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal )

    const { body, title, date, onInputChange, formState } = useForm( note )

    const dateString = useMemo( () => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [ date ] )

    useEffect( () => { dispatch( setActiveNote( formState ) ); }, [ formState ] )

    useEffect( () => { if( messageSaved.length > 0 ) { 
        Swal.fire('Nota Actualizada', messageSaved, 'success');
    }}, [ messageSaved ] )

    const onSaveNote = () => {
        dispatch( startSaveNote() );
    }
    

  return (
    <Grid className='animate__animated animate__fadeIn animate__faster' container direction={ "row" } justifyContent={ "space-between" } alignItems={ 'center' } sx={ { mb : 1 } }>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight={ 'light' }>{ dateString }</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={ { padding : 2 } } disabled={ isSaving } onClick={ onSaveNote }>
                <SaveOutlined sx={ { fontSize : 30, mr : 1 } }/>Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField type="text" name="title" value={ title } onChange={ onInputChange } variant="filled" fullWidth placeholder="Ingrese un titulo" label="Titulo" sx={ { border : 'none', mb : 1 } } />

            <TextField type="text" name="body" value={ body } onChange={ onInputChange } variant="filled" fullWidth multiline placeholder="¿Que sucedio el dia de hoy?" minRows={ 5 } />
        </Grid>

        {/* Image gallery */}
        <ImageGallery />
    </Grid>
  )
}
