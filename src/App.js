import React from 'react'
import { Switch, BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import FormikContainer from './components/SignUpForm/FormikContainer'

const App = () => {
  const handleLogin = () => {
    setIsUserLoggedIn(!isUserLoggedIn)
  }

  React.useEffect(() => {
    console.log(isUserLoggedIn);
  }, [isUserLoggedIn])

  return (
    <Router>
      <div className="nav-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>


      <Switch>
        <Route path='/'>
          {
            isUserLoggedIn ?
              <Home word="tayo" onClick={handleLogin} />
              :
              <FormikContainer />
          }

        </Route>

      </Switch>


    </Router>
  )
}

export default App
