import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider, useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles({
  list: {
    width: 250,
    paddingLeft:8,
    paddingRight:5,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Wrapper({setCategory}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );



  const toggleDrawer = (left, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [left]: open });
  };

  const list = (left) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: left === 'top' || left === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(left, false)}
      onKeyDown={toggleDrawer(left, false)}
    >
      <List>
        
          <ListItem style={{color:'#2196f3',fontSize:'1.5rem',fontWeight:'bold'}}>
           Categories
          </ListItem>
      </List>
      <Divider />
      <List>
        {['business','entertainment','general','health','science','sports','technology'].map((text, index) => (
          <ListItem style={{height:40,borderRadius:10}} button key={text} onClick={() => setCategory(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}><MenuIcon/></Button>
          <ThemeProvider theme={theme}>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            {list("left")}
          </SwipeableDrawer>
          </ThemeProvider>
         
        </React.Fragment>
    </div>
  );
}
