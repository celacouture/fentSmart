import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col} from 'reactstrap';
import './SignUp.css';
import {Link} from 'react-router-dom';
import axios from 'axios'


class SignUp extends Component{
  constructor(){
    super()
    this.state={
      username: "",
      password:"",
      confirmPassword:""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


  render(){
  return (
  <div>
    <Container>
    <Form>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input type="text" name="username" id="exampleEmail" placeholder="enter Username" value={this.state.username} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Confirm Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="confirm password" value={this.state.confirmPassword} onChange={this.handleChange}/>
        </FormGroup>
        <Button><Link to="/login" className='adminbtn'>Register</Link></Button>
    </Form>

    <Row>
      <Col size="md-2">
        <Link to="/UserHome">← Back</Link>
      </Col>
    </Row>
  </Container>
  </div>
  )
  }
}

export default SignUp;
