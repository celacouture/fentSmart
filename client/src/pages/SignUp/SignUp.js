import React, { Component } from "react";
import { withRouter } from "react-router";
import SignUp from "../../components/SignUp/SignUp";
import LoginJumbo from "../../components/LoginJumbo/LoginJumbo";

class LogIn extends Component {
  // handleLogIn = async event => {
  //   event.preventDefault();
  //   const { email, password } = event.target.elements;
  //   try {
  //     const user = await config
  //       .auth()
  //       .signInWithEmailAndPassword(email.value, password.value);
  //     this.props.history.push("/AdminForm");
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  render() {
    return (
    <div>
    <LoginJumbo />
    <SignUp/>
    </div>
    )
  }
}

export default withRouter(LogIn);
