import React, { useState } from 'react';

const initState = {
    base: '',
    topping: [],
    cut: '',
    comment:''   
}

function PizzaForm() {
    let [data, setData] = useState(initState);
    let {base, topping, cut, comment} = data;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        setData(initState);
    }

    const handleChange = (event) => {
        let {name, value, type} = event.target;
        
        setData({
            ...data,
            [name]: type === 'checkbox' 
                    ? toggleTopping(value)
                    : value
        })
    }

    const toggleTopping = (value) => {
        return (topping.includes(value)
                ? topping.filter(top => top !== value) 
                : [...topping, value])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Select Base</h2>
                <select name='base' value={base} onChange={handleChange}>
                    <option value="Chinese">Chinese</option>
                    <option value="Italian">Italian</option>
                    <option value="American">American</option>
                    <option value="Hungarian">Hungarian</option>
                </select>
            </div>

            <div>
                <h2>Select Topping</h2>
                <label>
                    <input 
                        name='topping'
                        type="checkbox" 
                        value="cheese"
                        checked={topping.includes('cheese')}
                        onChange={handleChange}
                    />cheese
                </label>
                
                <label>
                    <input 
                        name='topping'
                        type="checkbox" 
                        value="pepperoni"
                        checked={topping.includes('pepperoni')}
                        onChange={handleChange}
                    />pepperoni
                </label>

                <label>
                    <input 
                        name='topping'
                        type="checkbox" 
                        value="mushroom"
                        checked={topping.includes('mushroom')}
                        onChange={handleChange}
                    />mushroom
                </label>

                <label>
                    <input 
                        name='topping'
                        type="checkbox" 
                        value="apple"
                        checked={topping.includes('apple')}
                        onChange={handleChange}
                    />apple
                </label>

                <label> 
                    <input 
                        name='topping'
                        type="checkbox" 
                        value="durian"
                        checked={topping.includes('durian')}
                        onChange={handleChange}
                    />durian
                </label>
            </div>

            <div>
                <h2>Want your pizza cutted?</h2>
                <label>
                    <input 
                        name="cut"
                        type="radio"
                        value="cut"
                        checked={cut==="cut"}
                        onChange={handleChange}
                    />Cut
                </label>
                
                <label>
                    <input 
                        name="cut"
                        type="radio"
                        value="uncut"
                        checked={cut==="uncut"}
                        onChange={handleChange}
                    />Uncut
                </label>
                
            </div>
                
            <div>
                <h2>Having any comments?</h2>
                <textarea name="comment" value={comment} onChange={handleChange}/>
            </div>

            <button>Submit</button>
        </form>
    )
}

export default PizzaForm;