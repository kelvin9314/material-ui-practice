import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Drawer, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';

import { useHistory, useLocation } from 'react-router';
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

import Notice from '../components/Notice'
// import {RDialogCenter} from '../components/Notice'

dayjs.extend(localizedFormat)

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
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
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1
    },
    avatar: {
      marginLeft: theme.spacing(2)
    }
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

  const renderSomething = () => {

    Notice.show({
      title: '變更密碼成功',
      // duration: 2000,
      // onElementRemoveFn: () => history.push('/create')
    })

  }


  return (
    <div className={classes.root}>
      {/* app bar ? */}
      <AppBar
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar >
          <Typography className={classes.date}>
            Today is { dayjs().format('LLL') }
          </Typography>
          <Typography >
            Mario
          </Typography>
          <Avatar src="/asset/images/mario-av.png"  className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer ? */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}> Kelvin Notes </Typography>
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
          <ListItem
             key={'test-total'}
             button
             onClick={renderSomething}
          >
            toggle Notice
          </ListItem>
        </List>

      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}
