import React from 'react'

export default function Customer(props) {
    return (
        <div>
            <div className=' my-4'><strong>Appointment</strong> <span>{props.appointment}</span></div>
            <div className=' my-4'><strong>Email</strong> :<span>{props.email}</span></div>
            <div className=' my-4'><strong>Phone </strong><span>{props.phone}</span></div>
        </div>
    )
}
