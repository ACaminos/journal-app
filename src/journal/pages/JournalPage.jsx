import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal/thunks"
import { NoteView } from "../views/NoteView"

export const JournalPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => { dispatch( startNewNote() ); }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi maxime placeat deserunt est corporis sed quisquam, minus doloremque porro libero excepturi? Atque impedit explicabo quaerat quas, expedita dolorum inventore.</Typography> */}

      { !!active ? <NoteView /> : <NothingSelectedView/> }

      <IconButton
        onClick={ onClickNewNote }
        size="large"
        sx={ { color : 'white', backgroundColor : 'error.main', ':hover': { opacity : 0.9 }, position : 'fixed', right : 50, bottom : 50 } }
        disabled={ isSaving } >
        <AddOutlined sx={ { fontSize : 30 } }/>
      </IconButton>
    </JournalLayout>
  )
}