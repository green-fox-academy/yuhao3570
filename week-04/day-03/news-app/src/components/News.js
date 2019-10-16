import React from 'react';

class News extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const articles = [];
        (async () => {
            let result = await fetch(this.props.url);
            let titles = await result.json();
            for (let article of titles.articles) {
                articles.push(article.title);
            }
            console.log('1',articles);
            this.setState({news: articles})
            return articles;
        })();

        
        
        console.log('2',this.state.news);
    }

    render() {
        return (
            <div>
                {this.state.news.map(article => <p>{article}</p>)}
            </div>
        );
    }

}

export default News;