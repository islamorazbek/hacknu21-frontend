import { Button, Divider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styles from './MainMenu.module.scss'

const MainMenu = ({ menuItems }) => {
    const history = useHistory()

    const handleClick = (link) => {
        history.replace(link)
    }

    return (
        <div className={styles.root}>
            {menuItems.map((item, idx) => {
                return (
                    <div key={idx}>
                        <Button onClick={() => handleClick(item.link)} fullWidth className={styles.button}>
                            {item.label}
                        </Button>
                        <Divider />
                    </div>
                )
            })}
        </div>
    )
}

export default MainMenu
