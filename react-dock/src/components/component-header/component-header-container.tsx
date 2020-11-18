import React, { useState } from 'react';

import HeaderView from './component-header-view';
import { useHistory } from 'react-router-dom';

const HeaderContainer = () => {
  const history = useHistory();
  const [tabValue, setTabValue] = useState('/main-concepts');

  const handleTabChange = (event: React.ChangeEvent<{}>, tabValue: any) => {
    debugger;
    setTabValue(tabValue);

    history.push(tabValue);
  };

  return <HeaderView tabValue={tabValue} handleTabChange={handleTabChange} />;
};

export default HeaderContainer;
