
import React from 'react'

export default class Yes extends React.Component {

  state = {
    goOut: "Yes"
  }

  toggleGoOut = () => {
    this.setState(prevState => {
      return {
        goOut: prevState.goOut === "Yes" ? "No" : "Yes"
      }
    })
  }


  render() {
    return (
      <div className="state">
        <h1 className="state--title">Should I go out tonight?</h1>
        <div className="state--value" onClick={this.toggleGoOut}>
          <h1 style={{color: "red", cursor: "pointer"}}>{this.state.goOut}</h1>
        </div>
      </div>
    )
  }


}





// note:
// 1. props starts this.props and no longer need to accept
// 2. state are name this.state
// 3. function became a method name and should be arrow function
// 4.note that state is an object