import React, {useState} from 'react';


function Form (props){
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });
    const changeHandler  = e => {
        setMember({...member, [e.target.name]: e.target.value});
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '' ,role: ''})
    }
    
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Name
                    <input name='name' id='name' type='text' onChange={changeHandler} placeholder='Johnny AppleSeed' value={member.name} />
                </label>
                <label>Email
                    <input name='email' id='email' type='text' onChange={changeHandler} placeholder='Email@email.com' value={member.email}/>
                </label>
                <label>Role
                    <input name='role' id='role' type='text' onChange={changeHandler} placeholder='Job Title' value={member.role}/>  
                </label>
                <button type='submit'>Add Member</button>
            </form>
        </div>
    )
}
export default Form;
