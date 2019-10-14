import React from 'react';

class Filter extends React.Component{

    renderFilter(filterKey, filter){
        return (
            <div className = "filter" key={filterKey}>
                {filter.map(item => this.renderCheckbox(item))}
            </div>
        );
    }

    renderCheckbox(check){
        return (
            <li key={check.name}>
                <input type="checkbox" name={check.name} checked={check.checked} />
                <label for={check.name}>{check.name}</label>
            </li>
        );
    }

    convertFilters(filters){
        let result = [];

        Object.keys(filters).forEach(filterKey => {
            result.push(this.renderFilter(filterKey, filters[filterKey]))
        })

        return result;
    }

    render(){
        return (
            <>
                {this.convertFilters(this.props.filters)} 
            </>
        );
    }
}
export default Filter;