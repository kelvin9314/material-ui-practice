import React, { useState } from 'react'
// import {Typography} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  filed: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }

})

export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)

  const resetErrors = () => {
    setTitleError(false)
    setDetailsError(false)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    resetErrors()

    if(title === '') setTitleError(true)
    if(details === '') setDetailsError(true)

    if(title && details) {
      console.log(title,  details)

    }

  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
      Create a new notes
      </Typography>
      {/* <Typography
        variant="h1"
        color="primary"
        align="center"
      >
      Create a new notes
      </Typography> */}
      {/* <Typography
        noWrap
        color="secondary"
      >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque molestiae magnam voluptate reiciendis fuga totam facere officia, animi sint laboriosam dolorum voluptas cupiditate explicabo dolore veritatis recusandae rem inventore sunt.
      </Typography> */}

      <form noValidate autoComplete="off" onSubmit={handlerSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.filed}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.filed}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          // disableElevation
          // startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          SUbmit
        </Button>

      </form>


      {/* <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" variant="outlined" color="secondary">Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}

      {/* icons */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/>
      <AcUnitOutlinedIcon color="secondary" fontSize="small"/>
      <AcUnitOutlinedIcon color="action" fontSize="small"/>
      <AcUnitOutlinedIcon color="error" fontSize="small"/>
      <AcUnitOutlinedIcon color="disabled" fontSize="small"/> */}
    </Container>
  )
}
