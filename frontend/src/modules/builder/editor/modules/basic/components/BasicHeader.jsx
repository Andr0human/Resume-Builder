import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const BasicHeader = ({
  activeTab,
  changeActiveTab,
  tabTitles,
}) => {
  return (
    <Tabs value={activeTab} onChange={changeActiveTab} variant="fullWidth">
      {tabTitles.map((title, index) => (
        <Tab
          key={index}
          label={title}
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
