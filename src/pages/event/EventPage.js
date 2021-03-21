import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import CategoryChip from '../../components/catergory-chip/CategoryChip'
import { fetchCurrentEvent } from '../../shared/redux/events/event.actions'
import styles from './EventPage.module.scss'

const EventPage = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const { event, loading } = useSelector(state => state.events)

    useEffect(() => {
        dispatch(fetchCurrentEvent([...pathname][pathname.length - 1]))
    }, [])

    const { profile } = useSelector(state => state.auth)

    return (
        <>
            {event && <div className={styles.root}>
                <div className={styles.firstLine}>
                    <img
                        className={styles.image}
                        src="data:image/png;base64,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"
                    />
                </div>
                <div>
                    <h2 className={styles.name}>{event.title}</h2>
                    <h4 className={styles.name}>{event.subtitle}</h4>
                </div>
                <div>
                    <h4 className={styles.name} style={{ color: 'white' }}>
                        {event.description}
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
                        Schedule:
                </h4>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div className={styles.eventCard}>
                        <img className={styles.eventImage} src="https://images.squarespace-cdn.com/content/v1/5c9ba88f0cf57d7f706d2949/1606112198309-W5V1BLWSAZQS0TWZ5LO4/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/Artboard+14%402.3x.png" />
                        <h4 className={styles.eventTitle}>Elon Musk Conf'21<br />
                            <center>Time: July 21<br />12:00</center>
                        </h4>
                    </div>
                    <div className={styles.eventCard}>
                        <img className={styles.eventImage} src="https://images.squarespace-cdn.com/content/v1/5c9ba88f0cf57d7f706d2949/1606112198309-W5V1BLWSAZQS0TWZ5LO4/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/Artboard+14%402.3x.png" />
                        <h4 className={styles.eventTitle}>Zuckerberg Conf'21<br />
                            <center>Time: July 22<br />12:00</center>
                        </h4>
                    </div>
                    <div className={styles.eventCard}>
                        <img className={styles.eventImage} src="https://images.squarespace-cdn.com/content/v1/5c9ba88f0cf57d7f706d2949/1606112198309-W5V1BLWSAZQS0TWZ5LO4/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p52bY8kZn6Mpkp9xtPUVLhvLurswpbKwwoDWqBh58NLxQZMhB36LmtxTXHHtLwR3w/Artboard+14%402.3x.png" />
                        <h4 className={styles.eventTitle}>Facebook Conf'21<br />
                            <center>Time: July 23<br />12:00</center>
                        </h4>
                    </div>
                </div>
            </div>}
        </>

    )
}

export default EventPage
