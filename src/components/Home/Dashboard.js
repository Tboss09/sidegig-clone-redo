import React from 'react'

const Dashboard = ({ userDetails }) => {
    const { firstName, lastName, username, email } = userDetails
    console.log(userDetails);
    return (
        <div className="dashboard">

            <div className="dashboard-profile">
                <div className="title">
                    <p>Name :</p>
                </div>
                <div className="response">{firstName} {lastName}</div>
            </div>

            <div className="dashboard-profile">
                <div className="title">
                    <p>Username :</p>
                </div>
                <div className="response">{username}</div>
            </div>

            <div className="dashboard-profile">
                <div className="title">
                    <p>Email :</p>
                </div>
                <div className="response">{email}</div>
            </div>
            
            {/* <div className="dashboard-profile">

                <div className="title">
                    <p>Sex:</p>
                </div>
                <div className="response">{sex}</div>
            </div> */}

        </div>
    )
}

export default Dashboard
