import React from 'react';
import './App.css';
import News from './components/News';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      apiKey: 'f5bdda68a887445bb4d26831177a0efc',
      country: 'cn',
      articles: []
    }

    this.addNews = this.addNews.bind(this);
  }

  addNews(news){
    this.setState({articles: news});
  }

  render(){
    return (
      <div className="App">
        <News url={`https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=${this.state.apiKey}`}
              addNews={this.addNews}
        />
      </div>
    );
  }
}

export default App;
