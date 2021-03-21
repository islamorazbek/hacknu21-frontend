import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EventCard from '../../components/event-card/EventCard'
import { fetchEvents } from '../../shared/redux/events/event.actions'
import styles from './MainPage.module.scss'

const MainPage = () => {
    const eventState = useSelector(state => state.events)
    const { events } = eventState
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.feed}>
                {events.reverse().map((event) => {
                    return (
                        <EventCard
                            key={event.id}
                            {...event}
                            src='https://s31606.pcdn.co/wp-content/uploads/2019/02/group-of-people-on-peak-mountain-climbing-helping-team-work-travel-picture-id1009803562.jpg'
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default MainPage

const leftSideMenu = {
    generalLinks: [
        {
            label: 'My Profile',
            link: '/profile'
        },
        {
            label: 'Chats',
            link: '/hot-events'
        },
        {
            label: 'Events Feed',
            link: '/hot-events'
        },
        {
            label: 'Hot Events',
            link: '/hot-events'
        },
        {
            label: 'Friends',
            link: '/hot-events'
        },
        {
            label: 'Recommendations',
            link: '/recommendations'
        }
    ],
    specialLinks: [
        {
            label: 'Furmanov Pik Chat',
            link: '/profile'
        },
        {
            label: 'Shymbulak Event Chat',
            link: '/hot-events'
        },
        {
            label: 'HackNU Event Chat',
            link: '/recommendations'
        }
    ]
}

const rightSideMenu = {
    generalLinks: [
        {
            label: 'Sport',
            link: '/profile'
        },
        {
            label: 'Education',
            link: '/hot-events'
        },
        {
            label: 'Startups',
            link: '/Startups'
        }
    ],
}

