import React from 'react';
import './card.css';

function MemberCard (props){

    return (
        <div className='container'>
            {props.member.map(member => (
            <div key={member.id} className='card'>
                <h2> Name: {member.name}</h2>
                <h3>Email: {member.email}</h3>
                <h3>Role: {member.role}</h3>
            </div>
            ))}
        </div>
    )
}


export default MemberCard;