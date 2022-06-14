import React, { Component } from 'react'

export default class extends Component {
  state = {//state is used to assign a value or create a value
    user: "react",
    userpassword: ""
  }
  buttonClick = () => {
    alert()
  }
  //abc is an attribute to handlechange function
  handleChange = (abc) => {
    //target is the keyword to all fields i.e, input ,p tags ....
    //console.log(abc.target.value)
    this.setState({
      user: abc.target.value
    })
  }
  passwordChange = (a) => {
    this.setState({
      userpassword: a.target.value
    })
  }
  render() {
    return (
      <div>
        {this.state.user} <br />
        {this.state.userpassword}<br />
        <input onChange={this.handleChange} placeholder="enter your name" />
        <input onChange={this.passwordChange} placeholder="enter your pasword" />
        <button onClick={this.buttonClick}>submitt</button>

      </div >
    )
  }
}
