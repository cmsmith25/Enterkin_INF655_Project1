import React from 'react';

export default function FormButton({ title }) {
    return (
        <button type="submit" className="form-button">
            {title}
            </button>
    );
}