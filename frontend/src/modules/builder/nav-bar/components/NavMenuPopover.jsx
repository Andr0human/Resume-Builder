import Popover from '@mui/material/Popover';

export const NavMenuPopover = ({
  isOpen,
  anchorElement,
  children,
  id,
  onClose,
}) => {
  return (
    <Popover
      open={isOpen}
      anchorEl={anchorElement}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      id={id}
      onClose={onClose}
    >
      {children}
    </Popover>
  );
};
