import React, { useState } from 'react'
import { Button, Menu, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { logoutAction } from '../../shared/redux/auth/auth.actions';
import { useHistory } from 'react-router';

export default function ProfileMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const history = useHistory()
    const authState = useSelector(state => state.auth)
    const { profile } = authState
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (type) => {
        switch (type) {
            case 'profile':
                history.push('/profile');
                break;
            case 'settings':
                history.push('/settings');
                break;
            default:
                break;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userID')
        dispatch(logoutAction())
        history.replace('/login')
    }

    return (
        <div style={{ backgroundColor: '#ffc107' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {profile.firstName}
                <AccountCircleIcon fontSize="large" />
                <KeyboardArrowDownIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuClick('profile')}>
                    {profile.firstName}
                    {profile.lastName}
                    <AccountCircleIcon fontSize="large" />
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('settings')}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
            </Menu>
        </div>
    );
}