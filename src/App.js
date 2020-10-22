import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import NavSearchBar from './components/navSearchBar';
import InfoPanel from './components/infoPanel';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 10
  },
  paper: {
    height: 'auto',
    width: 350,
    margin: '0 auto',
    marginTop: 25,
    textAlign: 'center',
    padding: 15
  },
  input:{
    width: '90%',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavSearchBar />
      <InfoPanel />
    </div>
  );
}

export default App;
