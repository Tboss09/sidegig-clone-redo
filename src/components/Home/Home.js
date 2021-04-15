import React from 'react'
import WelcomeImage from '../../assets/images/welcome.jpg'

const Home = ({ word, onClick }) => {
    return (

        <>
            <div className="App-header">
                <img src={WelcomeImage} alt="Welcome Image" />
            </div>

            <div className="App-body">
                <div className="App-body-title">
                    <h1>Welcome {word}</h1>
                </div>
                <div className="App-body-message">
                    <p>Checkout your Profile</p>
                    <p>Lorem ipsum, dolor sit Amet consectetur adipisicing elit. Quibusdam pariatur officia ullam et accusamus doloremque deserunt modi voluptas excepturi alias.</p>
                </div>
                <button onClick={onClick}>Logout</button>
            </div>
        </>

    )
}

export default Home
