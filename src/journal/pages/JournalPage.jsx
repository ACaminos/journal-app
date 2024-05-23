import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab animi maxime placeat deserunt est corporis sed quisquam, minus doloremque porro libero excepturi? Atque impedit explicabo quaerat quas, expedita dolorum inventore.</Typography> */}

      <NothingSelectedView/>

      {/* <NoteView /> */}

      <IconButton size="large" sx={ { color : 'white', backgroundColor : 'error.main', ':hover': { opacity : 0.9 }, position : 'fixed', right : 50, bottom : 50 } }>
        <AddOutlined sx={ { fontSize : 30 } }/>
      </IconButton>
    </JournalLayout>
  )
}
