import React from 'react'
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import FormikContainer from './components/SignUpForm/FormikContainer'

const App = () => {
  const [userState, setUserState] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState('');


  return (
    <Router>
      <div className="nav-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>


      <Switch>


        <Route exact strict path='/'>
          {userState ? <Home userDetails={userDetails}
            onClick={userState => setUserState(userState)}
            userState={userState}
          />
            :
            <FormikContainer
              letUserLogin={userState => setUserState(userState)}
              setUserDashBoardDetails={userDetails => setUserDetails(userDetails)}
            />
          }
        </Route>

        <Route path='/signup'>
          {
            userState ?
              <p className = "signedIn">You are signed in Already</p>
              :
              <FormikContainer
                letUserLogin={userState => setUserState(userState)}
                setUserDashBoardDetails={userDetails => setUserDetails(userDetails)}
              />

          }
        </Route>


      </Switch>


    </Router >
  )
}

export default App
