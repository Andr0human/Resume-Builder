/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import About from './About';
import Contacts from './Contacts';
import Links from './Links';

const BasicPanel = ({
  activeTab,
  basicTabs,
  onChangeText,
}) => {
  const onChangeHandler = (value, key) => {
    const updatedTabs = { ...basicTabs };
    updatedTabs[key] = value;
    onChangeText(updatedTabs);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { margin: '0.5rem 0' },
          backgroundColor: 'rgb(231 238 250)',
          display: 'flex',
          flexDirection: 'column',
        }}
        noValidate
        autoComplete="off"
      >
        {activeTab == 0 && (
          <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler}></Contacts>
        )}
        {activeTab == 1 && <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler}></Links>}
        {activeTab == 2 && <About basicTabs={basicTabs} onChangeHandler={onChangeHandler}></About>}
      </Box>
    </>
  );
};

export default BasicPanel;
