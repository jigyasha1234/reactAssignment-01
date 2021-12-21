import React from 'react'

export default function Order(props) {
    return (
        <div>
            <table class="table table-borderless table-sm table-responsive mp-4">
                <tr className='mx-4'>
                    <th>Status</th>
                    <th>Door</th>
                    <th>Time</th>
                </tr>
                <tr className='mx-3'>
                    <td><ul><li>{props.status}</li></ul></td>
                    <td>{props.door}</td>
                    <td>{props.time}</td>
                </tr>
            </table>
        </div>
    )
}