import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Apppbar({name,color}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  style={{padding:8, backgroundColor:color}} position="static">
        <Typography>
            {name}
        </Typography>
      </AppBar>
    </div>
  );
}
