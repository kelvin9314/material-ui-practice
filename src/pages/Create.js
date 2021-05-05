import React from 'react'
// import {Typography} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

export default function Create() {
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

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        // disableElevation
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
    </Container>
  )
}
