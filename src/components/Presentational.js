import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import "./presentational.scss"

export default class Presentational extends React.Component{

    handleClick(){
        this.props.newQuote();
    }

    render(){        
        console.log(this.props);
        return(
            <div id="quote-box">
                <div id="quote-text">
                    <FontAwesomeIcon id="quote-icon" icon={faQuoteLeft}/>
                    <span id="text">{this.props.currentQuote}</span>
                </div>
                <div id="quote-author">
                    <p id= "author">- {this.props.currentAuth}</p>
                </div>
                <div id="buttons">
                    <a className="button" id="tweet-quote" target="_blank" href={"https://twitter.com/intent/tweet?text=" + '"' + this.props.currentQuote + '" von ' + this.props.currentAuth}>
                        <FontAwesomeIcon icon={faTwitter} color=""/>
                    </a>
                    <button className="button" id="new-quote" onClick={this.handleClick.bind(this)}>New Quote</button>
                </div>
            </div>
        )
    }
}