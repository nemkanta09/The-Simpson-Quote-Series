import React from 'react';
import axios from "axios";

class QuoteLists extends React.Component {
  state = {
    simpsonQuotes:[]

  }

  getSimpsonQuotes=()=>{
    // Send the request
      // Extract the DATA from the received response
        // Use this data to update the state
    //axios.get('https://simpsons-quotes-api.herokuapp.com/quotes').then(response => this.setState({simpsonQuotes:response.data}))

    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => this.setState({ simpsonQuotes : response.data }))
    }


  render(){
    return(
      <div>
        <button onClick ={this.getSimpsonQuotes}>Click me to get next Simpson Quote</button>
        {
          this.state.simpsonQuotes.map(quote=>{
            return(
            <div> 
              <p><strong>Name:</strong>  {quote.character}</p>
              <p><strong>Quote:</strong>  {quote.quote}</p>
              <p><strong>Avatar: </strong> </p>
              <img src={quote.image} alt ={quote.character} />
        </div>
          )
        })
        }
        
      </div>
    )
  }
}


export default QuoteLists;
