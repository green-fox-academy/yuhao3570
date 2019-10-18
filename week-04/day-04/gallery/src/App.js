import React, {Component} from 'react';
import ThumbNails from './components/ThumbNails';
import MasterPiece from './components/MasterPiece';
import IMAGES from './components/images';

const styles = {
  app: {
    width: 800,
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

    this.move = {
      arrowleft: (() => (this.state.current <= 0) ? IMAGES.length - 1 : this.state.current - 1),
      arrowright: (() => (this.state.current >= IMAGES.length - 1) ? 0 : this.state.current + 1),
    }

    this.setView = this.setView.bind(this);
  }

  setView(index){
    this.setState({current: index});
  }

  handleMove = (event) => {
    let selectedKey = (event.key || event.target.className).toLowerCase();
    if(this.move.hasOwnProperty(selectedKey)){
      this.setView(this.move[selectedKey]())
    }
  }

  render(){
    return (
        <div className="App" style={styles.app} >
          {document.addEventListener('keydown', this.handleMove)}
          <MasterPiece move={this.handleMove} src={IMAGES[this.state.current].src} title={IMAGES[this.state.current].title} description={IMAGES[this.state.current].description}/>
          <ThumbNails current={this.state.current} setView={this.setView}/>
        </div>
    );
  }
  
}

export default App;
