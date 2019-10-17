import React, {Component} from 'react';
import ThumbNails from './components/ThumbNails';
import MasterPiece from './components/MasterPiece';
import IMAGES from './components/images';

const styles = {
  app: {
    width: 1000,
    height: 360, 
    marginTop: '15%',  
    position: 'relative',
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "center"
  }
}



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      current: 0
    };

    this.setView = this.setView.bind(this);
  }

  setView(index){
    this.setState({current: index});
  }

  render(){
    return (
      <>
        <div className="App" style={styles.app}>
          <MasterPiece src={IMAGES[this.state.current].src} title={IMAGES[this.state.current].title} description={IMAGES[this.state.current].description}/>
          <ThumbNails current={this.state.current} setView={this.setView}/>
        </div>
      
      </>
    );
  }
  
}

export default App;
