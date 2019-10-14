import React from 'react';

class Hotel extends React.Component{

    renderHotel(hotel){
        return (
            <div className = "hotel" key = {hotel.name}>
                <h2>{hotel.name}</h2>
                <div  className="content">
                    <div><img src={hotel.imageURL}></img></div>
                    <div>
                        <p>{hotel.description}</p>
                        <button>Click me!</button>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <>
                {this.props.hotels.map(hotel => this.renderHotel(hotel))}
            </>
        );
    }
}

export default Hotel;