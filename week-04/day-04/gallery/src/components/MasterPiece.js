import React from 'react';

const styles = {
    viewer: {   
        flexGrow: 1,  
        width: '100%', 
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },

    detail: {
        flexGrow: 1,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    button: {
        background: 'linear-gradient(#FFFFFF, #E3E3E3)',
        width: '3%',
        display: 'flex',
        justifyContent: 'center'
    },

    intro: {
        background: 'rgba(36, 36, 36, .5)',
        color: 'white'
    }
}

const MasterPiece = (props) => {
    return (
        <div className="central-viewer" style={styles.viewer}>

            <button className="leftButton" style={styles.button}><img src='images/buttonArrow.svg'/></button>

            <div className="details" style={{...styles.detail, backgroundImage: `url(${props.src})`}}>
                <div className="intro" style={styles.intro}>
                    <h4 style={{margin: '0px'}}>{props.title}</h4>
                    <p style={{margin: '5px 0px'}}>{props.description}</p>
                </div>
                
            </div>

            <button className="rightButton" style={{...styles.button, transform:"rotate(180deg)"}}><img src='images/buttonArrow.svg'/></button>
        
        </div>
    );
}

export default MasterPiece;