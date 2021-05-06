import React, { useState } from 'react'
// import {Typography} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  filed: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }

})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

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
      // console.log(title,  details, category )
      fetch('http://localhost:3004/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title,  details, category})
      }).then(() => history.push('/'))

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

        <FormControl className={classes.filed}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>


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
