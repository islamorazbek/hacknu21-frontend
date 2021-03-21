import { Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ProfileMenu from '../profile-menu/ProfileMenu';
import SearchField from '../search-field/SearchField';
import styles from './Header.module.scss';

const Header = () => {

    const authState = useSelector(state => state.auth)
    const { profile } = authState
    const history = useHistory()

    const handleLogin = () => {
        history.replace('/login')
    }

    return (
        <div className={styles.root}>
            <div>
                <span className={styles.logo}>Join Us!</span>
            </div>
            {profile && <div className={styles.navBar}>
                <SearchField />
                <Link to="/events" style={{ textDecoration: 'none' }}>
                    <Button size="large" variant="outlined" className={styles.button}>
                        EVENTS
                    </Button>
                </Link>
                <Link to="/chats" style={{ textDecoration: 'none' }}>
                    <Button size="large" variant="outlined" className={styles.button}>
                        CHATS
                    </Button>
                </Link>
            </div>}
            {profile !== null ?
                < ProfileMenu />
                :
                <Button
                    onClick={handleLogin}
                    className={styles.button}
                    size="large"
                    variant="outlined">
                    Log In
                </Button>
            }
        </div >
    )
}

export default Header
