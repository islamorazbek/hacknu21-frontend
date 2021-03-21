import React from 'react'
import { useSelector } from 'react-redux'
import CategoryChip from '../../components/catergory-chip/CategoryChip'
import styles from './ProfilePage.module.scss'

const ProfilePage = () => {
    const { profile } = useSelector(state => state.auth)

    return (
        <div className={styles.root}>
            <div className={styles.firstLine}>
                <img
                    className={styles.image}
                    src="https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2"
                />
                <div>
                    <h2 className={styles.name}>{profile.firstName} {profile.secondName}</h2>
                    <h5 className={styles.name}>@{profile.username}</h5>
                </div>
            </div>
            <div>
                <h4 className={styles.name} style={{ color: 'white' }}>
                    {profile.description}
                </h4>
            </div>
            <div>
                <CategoryChip label="Facebook" />
                <CategoryChip label="Coding" />
                <CategoryChip label="IT Startups" />
                <CategoryChip label="Social Networks" />
                <CategoryChip label="Instagram" />
                <CategoryChip label="WhatsApp" />
            </div>
            <div>
                <h4 className={styles.name} style={{ color: 'white' }}>
                    My Events:
                </h4>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                <div className={styles.eventCard}>
                    <img className={styles.eventImage} src="https://cnet3.cbsistatic.com/img/sgFVFVXTsly1PnM-4-acBWYznAI=/1200x675/2018/05/01/701f869f-32b9-4a98-8efc-a6d3a681b36c/facebook-f8-mark-zuckerberg-2018-0176.jpg" />
                    <h4 className={styles.eventTitle}>Facebook Conf'21</h4>
                </div>
                <div className={styles.eventCard}>
                    <img className={styles.eventImage} src="https://cnet3.cbsistatic.com/img/sgFVFVXTsly1PnM-4-acBWYznAI=/1200x675/2018/05/01/701f869f-32b9-4a98-8efc-a6d3a681b36c/facebook-f8-mark-zuckerberg-2018-0176.jpg" />
                    <h4 className={styles.eventTitle}>Facebook Conf'21</h4>
                </div>
                <div className={styles.eventCard}>
                    <img className={styles.eventImage} src="https://cnet3.cbsistatic.com/img/sgFVFVXTsly1PnM-4-acBWYznAI=/1200x675/2018/05/01/701f869f-32b9-4a98-8efc-a6d3a681b36c/facebook-f8-mark-zuckerberg-2018-0176.jpg" />
                    <h4 className={styles.eventTitle}>Facebook Conf'21</h4>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
