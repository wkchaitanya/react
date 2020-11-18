import { makeStyles } from '@material-ui/core';

const AppStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#20232A'
  },
  tabs: {
    color: '#ffffff',
    '&:focus': {
      color: '#67D4DF'
    }
  }
}));

export { AppStyles };
