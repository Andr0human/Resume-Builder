import { Button, styled, alpha } from '@mui/material';

export const StyledButton = styled(Button)(() => ({
  color: '#E7EEFA',
  borderColor: alpha('#E7EEFA', 0.8),
  ':hover': {
    borderColor: '#E7EEFA',
    backgroundColor: alpha('#E7EEFA', 0.04),
  },
}));
