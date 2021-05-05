import React from 'react'
// import {Typography} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
// import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
// import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  // bth: {
  //   fontSize: 40,
  //   backgroundColor: 'violet',
  //   '&:hover': {
  //     backgroundColor: 'blue',
  //   }
  // },
  // title: {
  //   textDecoration: 'underline',
  //   marginBottom: 20
  // }
})

export default function Create() {
  // const classes = useStyles()

  return (
    <Container>
      <Typography
        // className={classes.title}
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

      <Button
        // className={classes.bth}
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        // disableElevation
        // startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >
        SUbmit
      </Button>

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
