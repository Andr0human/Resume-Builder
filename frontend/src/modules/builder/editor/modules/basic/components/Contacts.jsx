/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@mui/material/TextField';

const Contacts = ({ basicTabs, onChangeHandler }) => {
  return (
    <>
      <TextField
        label='Name'
        variant='filled'
        value={basicTabs.name}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'name');
        }}
      />
      <TextField
        label='Image URL'
        variant='filled'
        value={basicTabs.image}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'image');
        }}
      />
      <TextField
        label='Title'
        variant='filled'
        value={basicTabs.label}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'label');
        }}
      />
      <TextField
        label='Email'
        variant='filled'
        value={basicTabs.email}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'email');
        }}
      />
      <TextField
        label='Website URL'
        variant='filled'
        value={basicTabs.url}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'url');
        }}
      />
      <TextField
        label='Phone'
        variant='filled'
        value={basicTabs.phone}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'phone');
        }}
      />
      <TextField
        label='Location'
        variant='filled'
        value={basicTabs.location.city}
        onChange={(event) => {
          const location = basicTabs.location;
          location.city = event.target.value;
          onChangeHandler(location, 'location');
        }}
      />
      <TextField
        label='Relevant Experience'
        variant='filled'
        value={basicTabs.relExp}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'relExp');
        }}
      />
      <TextField
        label='Total Experience'
        variant='filled'
        value={basicTabs.totalExp}
        onChange={(event) => {
          onChangeHandler(event.target.value, 'totalExp');
        }}
      />
    </>
  );
};

export default Contacts;
