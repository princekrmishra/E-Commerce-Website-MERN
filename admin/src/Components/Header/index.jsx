import React, { useContext, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FaRegBell } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaRegUser } from 'react-icons/fa6';
import { LuSettings } from 'react-icons/lu';
import { FiActivity } from 'react-icons/fi';
import { PiSignOutFill } from 'react-icons/pi';
import { MyContext } from '../../App';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);

  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };

  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  const context = useContext(MyContext);

  return (
    <header
      className={`fixed top-0 z-50 h-[60px] bg-[#f1f1f1] shadow-md flex items-center justify-between px-6 transition-all duration-300 ease-in-out ${
        context.isSideBarOpen ? 'left-[18%] w-[82%]' : 'left-0 w-full'
      }`}
    >
      {/* Sidebar Toggle */}
      <div className="flex items-center">
        <Button
          className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]"
          onClick={() => context.setIsSideBarOpen(!context.isSideBarOpen)}
        >
          <IoMenu className="text-[18px]" />
        </Button>
      </div>

      {/* Notification + Profile */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <IconButton aria-label="notifications">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        {/* Profile or Login */}
        {context.isLogin ? (
          <>
            <IconButton onClick={handleClickMyAcc}>
              <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
                <img src="user-image.png" alt="User" className="w-full object-cover" />
              </div>
            </IconButton>

            <Menu
              anchorEl={anchorMyAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleCloseMyAcc}>
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
                    <img src="user-image.png" alt="User" className="w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[500] leading-5">Prince Kumar Mishra</h3>
                    <p className="text-[12px] font-[400] opacity-80">admin-01@gmail.com</p>
                  </div>
                </div>
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
                <FaRegUser />
                <span className="text-[14px]">Profile</span>
              </MenuItem>

              <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
                <LuSettings />
                <span className="text-[14px]">Account Setting</span>
              </MenuItem>

              <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
                <FiActivity />
                <span className="text-[14px]">Activity Log</span>
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
                <PiSignOutFill />
                <span className="text-[14px]">Sign Out</span>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button className="btn-blue btn-sm !rounded-full">Sign in</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
