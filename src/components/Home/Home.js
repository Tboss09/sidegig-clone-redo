import React from 'react'
import WelcomeImage from '../../assets/images/welcome.jpg'
import Dashboard from './Dashboard'

const Home = ({ userDetails, onClick }) => {

    return (
        <>
            <div className="App-header">
                <img src={WelcomeImage} alt="Welcome Image" />
            </div>

            <div className="App-body">
                <div className="App-body-title">
                    <h1>Welcome to your Dashboard </h1>
                </div>

                <div className="App-body-dashboard">
                    <p>Here Are your SignUp Details</p>
                    <Dashboard userDetails={userDetails} />
                </div>

                <div className="button">
                    <button onClick={() => onClick(false)}>Logout</button>
                </div>
            </div>
        </>

    )
}

export default Home
