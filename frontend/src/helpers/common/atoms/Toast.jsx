import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export const Toast = ({
  open,
  onClose,
  content,
}) => (
  <Snackbar
    open={open}
    autoHideDuration={4000}
    onClose={(event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      onClose();
    }}
    TransitionComponent={TransitionUp}
  >
    <div className="bg-resume-900 rounded py-[10px] px-4">
      <span className="text-white text-sm">{content}</span>
    </div>
  </Snackbar>
);
