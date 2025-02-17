import { Button } from '@mui/material';

export const OutlinedButton = ({
  onClick,
  children,
  disabled = false,
}) => (
  <Button variant="outlined" onClick={onClick} className="text-resume-900" disabled={disabled}>
    {children}
  </Button>
);

export const TextButton = ({
  onClick,
  children,
  disabled = false,
}) => (
  <Button variant="outlined" onClick={onClick} className="text-resume-900" disabled={disabled}>
    {children}
  </Button>
);
