import React from 'react';
import MySelect from './ejercicio-8/MySelect.js';
import MyInput from './ejercicio-8/MyInput.js';
import MySelector from './ejercicio-8/MySelector.js';
import ConditionalRender from './ejercicio-8/ConditionalRender.js';


class Ejercicio8 extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            data: {
                name: '',
                firstname: '',
                description: '',
                age: 18,
                genderSelected: 'Female',
                selectedHobbies: ['Art'],
                countrySelectedId: 0,
                provinceSelectedId: 0
            }
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
        this.sendForm = this.sendForm.bind(this);

    }

    countries = [
        {id: 'es',
        value: 'Spain'},
        {id: 'usa',
        value: 'USA'}
    ];

    provinces = [
        {id: 14,
        value: 'Guadalajara'},
        {id: 28,
        value: 'Madrid'}
    ];

    hobbies = ['Games', 'Football', 'Basketball', 'Art'];

    genders = ['Male', 'Female'];

    render() {
        return (
            <form>
                <h1 className="ejercicio">8. Formularios</h1>
                <MyInput 
                    label="Name:"
                    name="name" 
                    type="text" 
                    value={this.state.data.name} 
                    onChange={this.handleChange} />
                <MyInput 
                    label="Firstname:"
                    name="firstname" 
                    type="text" 
                    value={this.state.data.firstname} 
                    onChange={this.handleChange} /> 
                <MyInput 
                    label="Description:"
                    name="description" 
                    type="textarea" 
                    value={this.state.data.description} 
                    onChange={this.handleChange} /> 
                <MySelector 
                    label="Gender:"
                    type="radio" 
                    items={this.genders}
                    name="genderSelected" 
                    checkeds={[this.state.data.genderSelected]} 
                    onChange={this.handleChange} /> 
                <MyInput 
                    label="Age:"
                    name="age" 
                    type="number" 
                    value={this.state.data.age} 
                    onChange={this.handleChange} /> 
                <MySelect 
                    label="Country:"
                    itemSelectedId={this.state.data.countrySelectedId} 
                    items={this.countries} 
                    onChange={this.handleChange} 
                    name="countrySelectedId"/>
                <ConditionalRender if={this.state.data.countrySelectedId === 'es'}>
                    <MySelect 
                        label="Province:"
                        itemSelectedId={this.state.data.provinceSelectedId} 
                        items={this.provinces} 
                        onChange={this.handleChange} 
                        name="provinceSelectedId"/>
                </ConditionalRender>
                <MySelector 
                    label="Hobbies:"
                    type="checkbox" 
                    items={this.hobbies}
                    name="selectedHobbies" 
                    checkeds={this.state.data.selectedHobbies}
                    onChange={this.handleChangeCheckbox} /> 
                <button onClick={this.sendForm}>Send</button>
            </form>
        )
    }

    handleChange(e) {
        const { value, name } = e.target

        this._setState(name, value);
        if (name === 'countrySelectedId') {
            if (value === 'es') {
                this._setState('provinceSelectedId', 28);
            }
        }
    }

    handleChangeCheckbox(e) {
        const value = e.target.value;

        if (this.state.data.selectedHobbies.includes(value)) {
            this._setState('selectedHobbies', this.state.data.selectedHobbies.filter(hobbie => hobbie !== value));
        } else {
            this._setState('selectedHobbies', [...this.state.data.selectedHobbies, value]);
        } 
    }

    sendForm(e) {
        console.table(this.state.data);
        e.preventDefault();
    }

    _setState(prop, value) {
        this.setState(prevState => {
            const data = { ...prevState.data };
            
            data[prop] = value;                  
            
            return { data };
        });
    }
}

export default Ejercicio8;
