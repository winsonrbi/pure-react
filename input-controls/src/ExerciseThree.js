import React, { useState } from 'react';

function ExerciseThree() {
    const [size, setSize] = useState('small');
    const [topping, setTopping] = useState('pepperoni')
    const [glutenFree, setGlutenFree] = useState(false);
    const [specialInstructions, setSpecialInstructions] = useState('');

    function handleChange(event) {
        setSize(event.target.value);
    }

    function submitForm(event){
        console.log(size);
        console.log(topping);
        console.log(glutenFree);
        console.log(specialInstructions);
        event.preventDefault();
    }
    return(
        <form onSubmit={submitForm}>
            <span>Order Your Pizza</span>
            <div>
                <input
                    type='radio'
                    value='small'
                    checked={size === 'small'}
                    onChange={handleChange}
                />
                <span>Small</span>
                <input
                    type='radio'
                    value='medium'
                    checked={size === 'medium'}
                    onChange={handleChange}
                />
                <span>Medium</span>
                <input
                    type='radio'
                    value='large'
                    checked={size === 'large'}
                    onChange={handleChange}
                />
                <span>Large</span>
            </div>
            <div>
                <span>Topping</span>
                <select onChange={(event)=>{setTopping(event.target.value)}} value={topping}>
                    <option value='pepperoni'>Pepperoni</option>
                    <option value='pineapple'>Pineapple</option>
                    <option value='sausage'>Sausage</option>
                </select>
            </div>
            <input checked={glutenFree === true} onChange={()=>{setGlutenFree(!glutenFree)}} type='checkbox'/>
            <span >Gluten free</span>
            <div>
            <span>Special Instructions:</span>
            <textarea value={specialInstructions} onChange={(event)=>{setSpecialInstructions(event.target.value)}}/>

            </div>
            <input type="submit" value='Send Order'/>
        </form>
    );
}

export default ExerciseThree;