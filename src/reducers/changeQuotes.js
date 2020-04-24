import * as actionTypes from "../actions/actionTypes"

const quotes = ["Abc", "Def", "Ghi", "Jkl", "Mno", "Pqr", "Stu", "Vwx", "Yz"];
const authors = ["123", "456", "789", "312", "987"];

export default function randomQuoteReducer(state = changeState(), action){
    switch(action.type){
        case actionTypes.NEW_QUOTE:
            console.log("In here jay!");
            return changeState();
        default:
            return state;
            
    }
}

const changeState = () => ({
    quotes: quotes,
    authors: authors,
    currentQuote: (quotes[Math.floor(Math.random() * quotes.length)] + " ").repeat(30),
    currentAuth: authors[Math.floor(Math.random() * authors.length)].repeat(3)
});