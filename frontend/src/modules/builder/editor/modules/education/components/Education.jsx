import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { SwitchWidget } from '../../../../../../helpers/common/atoms/Switch';
import { DATE_PICKER_FORMAT } from '../../../../../../helpers/constants';
import { useEducations } from '../../../../../../stores/education';

const Education = ({ educationInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (name, value) => {
      const currentExpInfo = { ...educationInfo };
      switch (name) {
        case 'academyName':
          currentExpInfo.institution = value;
          break;
        case 'degree':
          currentExpInfo.studyType = value;
          break;
        case 'area':
          currentExpInfo.area = value;
          break;
        case 'grade':
          currentExpInfo.score = value;
          break;
        case 'startDate':
          if (value?.isValid()) {
            currentExpInfo.startDate = value;
          }
          break;
        case 'isStudyingHere':
          currentExpInfo.isStudyingHere = value;
          break;
        case 'endDate':
          if (value?.isValid()) {
            currentExpInfo.endDate = value;
          }
          break;

        default:
          break;
      }
      useEducations.getState().updateEducation(currentIndex, currentExpInfo);
    },
    [currentIndex, educationInfo]
  );

  return (
    <>
      <TextField
        label='School or College name'
        variant='filled'
        value={educationInfo.institution}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('academyName', value);
        }}
        autoComplete='off'
        fullWidth
        required
        autoFocus={true}
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label='Degree'
        variant='filled'
        value={educationInfo.studyType}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('degree', value);
        }}
        autoComplete='off'
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label='Area'
        variant='filled'
        value={educationInfo.area}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('area', value);
        }}
        autoComplete='off'
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label='Grade'
        variant='filled'
        value={educationInfo.score}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('grade', value);
        }}
        autoComplete='off'
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <DatePicker
        label='Start date'
        format={DATE_PICKER_FORMAT}
        value={dayjs(educationInfo.startDate)}
        onChange={(newDate) => {
          onChangeHandler('startDate', newDate);
        }}
        slotProps={{
          textField: { variant: 'filled', autoComplete: 'off', fullWidth: true, required: true },
        }}
      />
      <SwitchWidget
        label={'I currently study here'}
        value={educationInfo.isStudyingHere ?? false}
        onChange={(newValue) => {
          onChangeHandler('isStudyingHere', newValue);
        }}
      />
      <DatePicker
        label='Start date'
        format={DATE_PICKER_FORMAT}
        value={educationInfo.isStudyingHere ? null : dayjs(educationInfo.endDate)}
        onChange={(newDate) => {
          onChangeHandler('endDate', newDate);
        }}
        slotProps={{
          textField: {
            variant: 'filled',
            autoComplete: 'off',
            fullWidth: true,
            required: true,
            sx: { marginBottom: '26px' },
          },
        }}
        disabled={educationInfo.isStudyingHere}
      />
    </>
  );
};

export default Education;
