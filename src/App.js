import React from 'react';
import * as ReactRedux from "react-redux";
import logo from './logo.svg';
import './App.css';
import Presentational from "./components/Presentational";
import configureStore from "./store";
import {changeQuoteAction} from "./actions/actions";

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

function mapStateToProps(state){
  return{
    currentQuote: state.randomQuoteReducer.currentQuote,
    currentAuth: state.randomQuoteReducer.currentAuth
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    newQuote: () => {
      dispatch(changeQuoteAction())
    }
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class App extends React.Component{
  render(){
    return (
      <Provider store={configureStore()}>
        <Container />
      </Provider>
    );
  }
}


export default App;
