import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/Header';
import MainPage from './pages/main/MainPage';
import EventPage from './pages/event/EventPage'
import LoginPage from './pages/login/LoginPage'
import ProtectedRoute from './components/ProtectedRoute';
import styles from './App.module.scss'
import MainMenu from './components/main-menu/MainMenu';
import ProfilePage from './pages/profile/ProfilePage';

function App() {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <div className={styles.root}>
          <div style={{flexDirection: 'column'}}>
            <MainMenu menuItems={generalLinks} />
            <MainMenu menuItems={recommendations} />
          </div>
          <div className={styles}>
            <ProtectedRoute path="/events" component={MainPage} />
            <ProtectedRoute path="/event/:id" component={EventPage} />
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <ProtectedRoute path="/chats" component={MainPage} />
          </div>
          <MainMenu menuItems={rightMenu} />
        </div>
        <Route path="*" render={() => <Redirect to="/login" />} />

      </Switch>
    </Router>

  );
}

export default App;

const recommendations = [
  {
    label: 'Shymbulak 2021 Festival',
    link: '/event/shymbulak'
  },
  {
    label: 'HPAIR Asia Conference 2021',
    link: '/event/shymbulak'
  },
  {
    label: 'HPAIR Harvard Conference 2021',
    link: '/event/shymbulak'
  },
  {
    label: 'HackNU 2021',
    link: '/event/shymbulak'
  }
]

const generalLinks = [
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
    link: '/events'
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
]


const rightMenu = [
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
]


