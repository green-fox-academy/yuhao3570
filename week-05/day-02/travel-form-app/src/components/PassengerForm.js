import React, { useState } from 'react';

const initState = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    location: 'Shen Zhen',
    dietary: []
}

function PassengerForm() {
    let [data, setData] = useState(initState);
    let {firstName, lastName, age, gender, location, dietary} = data;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert( `
            First name: ${firstName}
            Last name: ${lastName}
            Age: ${age}
            Gender: ${gender}
            Destination: ${location}
            Dietary restrictions: ${dietary.map(e => ' ' + e)}
        `)
    }

    const handleChange = (event) => {
        console.log(event.target);
        let {name, type, value} = event.target;

        setData({
            ...data,
            [name]: (type === 'checkbox')
                    ? toggleDietary(value)
                    : value
        });
    }

    const toggleDietary = (value) => {
        return dietary.includes(value)
                ? dietary.filter(diet => diet !== value)
                : [...dietary, value];
    }

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            <h1>Travel Form</h1>
            <div>
                <h2>Personal Info</h2>
                <label>First Name
                    <input 
                        type="text"
                        value={firstName}
                        name='firstName'
                    />
                </label>

                <label>Last Name
                    <input 
                        type="text"
                        value={lastName}
                        name='lastName'
                    />
                </label>

                <label>Age
                    <input 
                        type="text"
                        value={age}
                        name='age'
                    />
                </label>
            </div>

            <div>
                <h2>Gender</h2>
                <label>
                    <input 
                        type="radio"
                        value={gender}
                        name='gender'
                    />Male

                    <input 
                        type="radio"
                        value={gender}
                        name='gender'
                    />Female
                </label>
            </div>

            <div>
                <h2>You are going to </h2>
                <select 
                    name="location"
                    value={location}
                >
                    <option value="Shenzhen">Shen Zhen</option>
                    <option value="Beijing">Beijing</option>
                    <option value="Shanghai">Shanghai</option>
                    <option value="Guangzhou">Guang Zhou</option>
                </select>
            </div>

            <div>
                <h2>Any Dietary Needs</h2>
                <label>
                    <input
                        name="dietary"
                        type="checkbox"
                        value="Gluten Free"
                        checked={dietary.includes("Gluten Free")}
                    />GlutenFree
                </label>
                <label>
                    <input
                        name="dietary"
                        type="checkbox"
                        value="Vegetarian"
                        checked={dietary.includes("Vegetarian")}
                    />Vegetarian
                </label>
                <label>
                    <input
                        name="dietary"
                        type="checkbox"
                        value="Kosher"
                        checked={dietary.includes("Kosher")}
                    />Kosher
                </label>
                <label>
                    <input
                        name="dietary"
                        type="checkbox"
                        value="Lactose free"
                        checked={dietary.includes("Lactose free")}
                    />Lactose free
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default PassengerForm;