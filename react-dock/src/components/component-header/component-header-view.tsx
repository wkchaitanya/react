import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { AppStyles } from '../../utils/index';
import './component-header.scss';

const HeaderView = ({ tabValue, handleTabChange }: any) => {
  const classes = AppStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <Grid container wrap='wrap' alignItems='center' spacing={1}>
            <Grid item>
              <FontAwesomeIcon color='#61dafb' icon={faReact} size='2x' />
            </Grid>
            <Grid item xs={3}>
              <Typography className='header-icon' variant='h5'>
                React - D o c k
              </Typography>
            </Grid>
            <Grid item>
              <Typography className='header-icon' variant='h5'>
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                  <Tab className={classes.tabs} label='Main Concepts' value={'/main-concepts'} />
                  <Tab className={classes.tabs} label='Advance Guides' value={'/advance-guides'} />
                  <Tab className={classes.tabs} label='Api References' value={'/api-references'} />
                  <Tab className={classes.tabs} label='Hooks' value={'/hooks'} />
                </Tabs>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderView;
