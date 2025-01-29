import { Fragment, useState } from 'react';

import { NavMenuPopover } from './NavMenuPopover';
import { StyledButton } from '../atoms';

export const NavMenuItem = ({ caption, popoverChildren }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <StyledButton
        variant='text'
        size='small'
        onClick={handleClick}
        aria-describedby={'mark'}
        sx={{ fontSize: { xs: '10px', lg: '13px' } }}
        endIcon={
          <img
            src={'/icons/dropdown-arrow.svg'}
            alt='dropdown-arrow'
            width='20'
            height='20'
            className={`${anchorEl ? 'scale-y-[-1]' : ''}`}
          />
        }
      >
        {caption}
      </StyledButton>
      <NavMenuPopover isOpen={!!anchorEl} anchorElement={anchorEl} id='mark' onClose={handleClose}>
        {popoverChildren}
      </NavMenuPopover>
    </Fragment>
  );
};
