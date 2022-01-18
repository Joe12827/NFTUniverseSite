import React, { Component } from 'react';
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Container, Row, Col} from 'reactstrap';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state={data: "",
                firstName: "", //For capturing user input
                lastName: "", //For capturing user input
                showModal: false,
                testMessage: "",
                summary: ""}
    }

    updateData = (apiResponse) => {
        this.setState({data: apiResponse})
    }

    fetchMessage = () => {
        //In package.json add "proxy": "http://localhost:5000" 
        //This will allow redirect to REST api in Flask w/o CORS errors
         fetch('/test_message')
         .then(
             response => response.json() 
             )//The promise response is returned, then we extract the json data
         .then (jsonOutput => //jsonOutput now has result of the data extraction
                  {
                      this.setState({testMessage: jsonOutput})
                    }
              )
      }

    fetchData = () => {
        //In package.json add "proxy": "http://localhost:5000" 
        //This will allow redirect to REST api in Flask w/o CORS errors
         fetch('/example_api')
         .then(
             response => response.json() 
             )//The promise response is returned, then we extract the json data
         .then (jsonOutput => //jsonOutput now has result of the data extraction
                  {
                      this.updateData(jsonOutput)
                    }
              )
      }

    componentDidMount(){
        this.fetchData();
    }

    updateFirstName = (e) =>
     { this.setState({firstName: e.target.value}) //Update the text data in state
    }
    updateLastName = (e) => 
    { this.setState({lastName: e.target.value}) //Update the text data in state
    }

    handleSubmit = ()=> {
            let msg = 
            'Your name is ' + this.state.firstName + ' ' + this.state.lastName; //Use the updated state variables to capture the user input
            this.setState({showModal: true,
                    summary: msg})
    }
    render(){
        {/*If the data has not yet been loaded from the server, return empty page */}
        if ( this.state.data == null )
        return (<div>No data</div>)
        else
        {
        return (
            <Container>
                <div><h2>Success: The api returned a count of {this.state.data}</h2>
                <Label for="fName">First Name</Label>
                <Input id="fName" type='text' placeholder="Enter firstname" onChange={this.updateFirstName}></Input>
                <Label for="lName">Last Name</Label>
                <Input id="lName" type='text' placeholder='Enter lastname' onChange={this.updateLastName}></Input>
                <Button normal onClick={this.handleSubmit}>Submit</Button>
                <Modal isOpen={this.state.showModal} onOpened={this.fetchMessage}>
                    <ModalHeader>Results from submit and API call</ModalHeader>
                    <ModalBody>
                        <Container>
                            <Row className='border'><Col className='border'>{this.state.summary}</Col></Row>
                            <Row className='border' ><Col xs='3' className='border'>The server message is: </Col>
                            <Col className='border' >{ this.state.testMessage}</Col></Row>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.setState({showModal:false})}>Ok</Button>
                    </ModalFooter>
                </Modal>
                </div>
            </Container>
        )
        }
    }
}

export default MyComponent;