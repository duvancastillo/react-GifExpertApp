import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {


    const [inputValue, setinputValue] = useState(''); 

    const handleInputChangue = (e) => {
        setinputValue(e.target.value);
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( cast => [inputValue, ...cast]);
            setinputValue('');
        }

        
    }

    return(
        
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {inputValue}
                onChange  = {handleInputChangue}
            />
        </form>
        
    )

    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};