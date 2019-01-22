import React, { Component } from 'react';
import Quote from './Quote'


class App extends Component {
  constructor(props){
    super(props);
    this.updatequote = this.updatequote.bind(this)
    this.share = this.share.bind(this)
    this.state = {
      quotes : ["When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us."
    ,"The only impossible journey is the one you never begin.","If you want to live a happy life, tie it to a goal, not to people or things.","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking","Life would be tragic if it weren’t funny","And now that you don't have to be perfect, you can be good.","Anyone who has never made a mistake has never tried anything new.","It hurt because it mattered.","Great works are performed not by strength but by perseverance.","The only way to do great work is to love what you do.",
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.","All our dreams can come true if we have the courage to pursue them.","As we look ahead into the next century, leaders will be those who empower others."],
  
      author : ["Alexander Graham Bell","Anthony Robbins","Albert Einstein","Steve Jobs","Stephen Hawking","John Steinbeck","Albert Einstein","John Green","Samuel Johnson","Steve Jobs",
      "Albert Einstein","Walt Disney","Bill Gates"],
      rende: {
        content:'It hurt because it mattered.',
        author:'John Green'
      }
    }
  }
  share(){
    const text = this.state.rende.content
    window.open("https://twitter.com/intent/tweet?text=" + text + "\"")
  }
  updatequote(){
    let index = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      rende:{
        content: this.state.quotes[index],
        author: this.state.author[index]
      }
    })
}
  render() {
    return (<div>
      <Quote author={this.state.rende.author} quote={this.state.rende.content} update={this.updatequote} share={this.share}/>
    </div>
    );
  }
}

export default App;
