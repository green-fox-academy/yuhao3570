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

  handleMove = (event) => {
    if(event.key === 'ArrowLeft'){
      this.moveLeft();    
    }

    if(event.key === 'ArrowRight'){
      this.moveRight();
    }
  }

  moveLeft = () => {
    this.setView((this.state.current <= 0) ? IMAGES.length - 1 : this.state.current - 1);
  }

  moveRight = () => {
    this.setView((this.state.current >= IMAGES.length - 1) ? 0 : this.state.current + 1);
  }

  render(){
    return (
      <>
        {document.addEventListener("keydown", this.handleMove)}
        <div className="App" style={styles.app}>
          <MasterPiece moveLeft={this.moveLeft} moveRight={this.moveRight} src={IMAGES[this.state.current].src} title={IMAGES[this.state.current].title} description={IMAGES[this.state.current].description}/>
          <ThumbNails current={this.state.current} setView={this.setView}/>
        </div>
      
      </>
    );
  }
  
}

export default App;
