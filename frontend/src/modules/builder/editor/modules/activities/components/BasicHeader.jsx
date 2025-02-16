import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabs,
}) => {
  return (
    <Tabs value={activeTab.key} onChange={changeActiveTab} variant="fullWidth">
      {Object.keys(tabs).map((tab) => (
        <Tab
          key={tab}
          label={tabs[tab].label}
          value={tab}
          sx={{
            color: 'rgb(46 64 82)',
            textTransform: 'none',
            fontSize: '1rem',
          }}
        />
      ))}
    </Tabs>
  );
};

export default BasicHeader;
