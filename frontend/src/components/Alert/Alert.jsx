import AlertComponent from '@mui/material/Alert';
import { Box } from '../Box';
import { Collapse } from '../Collapse';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../Icons';

const Alert = ({ open, setAlert, children, ...rest }) => {
  return (
    <Box
      sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <Collapse in={open}>
        <AlertComponent
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setAlert({
                  open: false,
                  message: '',
                  severity: '',
                });
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
          {...rest}
        >
          {children}
        </AlertComponent>
      </Collapse>
    </Box>
  );
};

export default Alert;
