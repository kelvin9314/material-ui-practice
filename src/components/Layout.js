import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

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
  },
  active: {
    background: '#f4f4f4'
  }
})

export default function Layout({ children }) {
  const history = useHistory()
  const classes = useStyles()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create',
    },
  ]

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

        {/* list / links */}
        <List>
          { menuItems.map( item => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={ location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}
