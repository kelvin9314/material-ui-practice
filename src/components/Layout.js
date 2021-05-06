import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer, Typography } from '@material-ui/core';

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: 'flex'
  }
})

export default function Layout({ children }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {/* app bar ? */}
      {/* side drawer ? */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5"> Kelvin Notes </Typography>
        </div>
      </Drawer>
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}
