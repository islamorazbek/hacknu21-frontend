import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { setCurrentEvent } from '../../shared/redux/events/event.actions';
import CategoryChip from '../catergory-chip/CategoryChip';
import styles from './EventCard.module.scss'

const EventCard = ({ id, ...props }) => {
    return (
        <Link to={`/event/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <div className={styles.root}>
                <img src={props.img} className={styles.img} />
                <div className={styles.textSpace}>
                    <div className={styles.titleLine}>
                        <h1 className={styles.title}>{props.title}</h1>
                        {props.online ?
                            <span style={{ color: 'greenyellow' }}>Online</span>
                            :
                            <span style={{ color: 'red' }}>Offline</span>
                        }
                    </div>
                    <span>{props.subtitle}</span>
                    <span>Participants: {props.visitorsID.length}/{props.maxVisit}</span>
                    <div className={styles.chips}>
                        {categories.map((category, idx) => {
                            return (
                                <CategoryChip key={idx} label={category} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default EventCard

const categories = [
    'IT startups',
    'conferences',
    'business',
    'hiking',
]
