import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useCallback } from 'react';

import dayjs from 'dayjs';
import { RichtextEditor } from '../../../../../../helpers/common/components/richtext';
import { DATE_PICKER_FORMAT } from '../../../../../../helpers/constants';
import { useAwards } from '../../../../../../stores/awards';

const AwardComp = ({ awardInfo, currentIndex }) => {
  const onChangeHandler = useCallback(
    (name, value) => {
      const currentAwardInfo = { ...awardInfo };
      const updateAward = useAwards.getState().updateAward;
      switch (name) {
        case 'title':
          currentAwardInfo.title = value;
          break;
        case 'awarder':
          currentAwardInfo.awarder = value;
          break;
        case 'date':
          currentAwardInfo.date = value;
          break;
        case 'summary':
          currentAwardInfo.summary = value;
          break;
        default:
          break;
      }
      updateAward(currentIndex, currentAwardInfo);
    },
    [currentIndex, awardInfo]
  );

  const onSummaryChange = useCallback(
    (htmlOutput) => {
      onChangeHandler('summary', htmlOutput);
    },
    [onChangeHandler]
  );

  return (
    <>
      <TextField
        label="Award name"
        variant="filled"
        value={awardInfo.title}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('title', value);
        }}
        autoComplete="off"
        fullWidth
        required
        autoFocus={true}
        sx={{ marginBottom: '26px' }}
      />
      <TextField
        label="Awarded by"
        variant="filled"
        value={awardInfo.awarder}
        onChange={(e) => {
          const value = e.target.value;
          onChangeHandler('awarder', value);
        }}
        autoComplete="off"
        fullWidth
        required
        sx={{ marginBottom: '26px' }}
      />
      <DatePicker
        label="Date"
        value={dayjs(awardInfo.date)}
        onChange={(newDate) => {
          onChangeHandler('date', newDate);
        }}
        format={DATE_PICKER_FORMAT}
        slotProps={{
          textField: {
            variant: 'filled',
            autoComplete: 'off',
            fullWidth: true,
            required: true,
            sx: { marginBottom: '26px' },
          },
        }}
      />
      <RichtextEditor
        label="About the award"
        value={awardInfo.summary}
        onChange={onSummaryChange}
        name="summary"
      />
    </>
  );
};

export default AwardComp;
