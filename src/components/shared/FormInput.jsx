import React from 'react';

export default function FormInput(props) {
    return (
        <div className='row'>
            <label htmlFor={props.id}>{props.description}</label>
            <input
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            className={props.className}
            name={props.id}
            />
        </div>
    );
}