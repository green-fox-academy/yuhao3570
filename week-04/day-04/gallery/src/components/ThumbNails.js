import React from 'react';
import IMAGES from './images';

const styles = {
    img: {
        background: 'white',
        padding: 2,
        width: 30, 
        height: 30
    },

    largerImg: {
        background: 'blue',
        padding: 2,
        width: '50px',
        height: '50px'
    },

    thumbnails: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const ThumbNails = (props) => {

    const handleClick = (event) => {
        props.setView(parseInt(event.target.id));
    }

    return (
        <div className="selector" style={styles.thumbnails} onClick={handleClick}>
            {(IMAGES.map((image, index) => {
                return (<img id={index} key={image.title} src={image.src} style={(index === props.current) ? styles.largerImg : styles.img} alt='Loading'/>)
            }))}
        </div>
    )
}


export default ThumbNails;