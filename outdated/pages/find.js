import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "Date Type",
            hour: "Date Length",
            meal: "Meal",
            loc: "Where"
        }
        this.handleType = this.handleType.bind(this);
        this.handleHour = this.handleHour.bind(this);
        this.handleMeal = this.handleMeal.bind(this);
        this.handleLoc = this.handleLoc.bind(this);
        this.handleSubmit = this.handleLoc.Submit(this);
    }

    handleType(key) {

        this.setState({
            type: key

        })
    }

    handleHour(key) {
        this.setState({
            hour: key
        })
    }
    handleMeal(key) {
        this.setState({
            meal: key
        })
    }

    handleLoc(key) {
        this.setState({
            loc: key
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        
    }
    render() {
        return (

            <div>


                <DropdownButton onSelect={this.handleType} id="dropdown-basic-button" title={this.state.type}>
                    <Dropdown.Item eventKey='First Date'>First Date</Dropdown.Item>
                    <Dropdown.Item eventKey='Second Date'>Second Date</Dropdown.Item>
                    <Dropdown.Item eventKey='Blind Date'>Blind Date</Dropdown.Item>
                    <Dropdown.Item eventKey='Birthday'>Birthday</Dropdown.Item>
                    <Dropdown.Item eventKey='Anniversary'>Anniversary</Dropdown.Item>
                    <Dropdown.Item eventKey='Other'>Other</Dropdown.Item>
                </DropdownButton>


                <DropdownButton onSelect={this.handleHour} id="dropdown-basic-button" title={this.state.hour}>
                    <Dropdown.Item eventKey='Few Hours'>Few Hours</Dropdown.Item>
                    <Dropdown.Item eventKey='Half Day'>Half Day</Dropdown.Item>
                    <Dropdown.Item eventKey='Full Day'>Full Day</Dropdown.Item>

                </DropdownButton>

                <DropdownButton onSelect={this.handleMeal} id="dropdown-basic-button" title={this.state.meal}>
                    <Dropdown.Item eventKey='No Meal'>No Meal</Dropdown.Item>
                    <Dropdown.Item eventKey='Breakfast'>Breakfast</Dropdown.Item>
                    <Dropdown.Item eventKey='Lunch'>Lunch</Dropdown.Item>
                    <Dropdown.Item eventKey='Dinner'>Dinner</Dropdown.Item>

                </DropdownButton>

                <DropdownButton onSelect={this.handleLoc} id="dropdown-basic-button" title={this.state.loc}>
                    <Dropdown.Item eventKey='Irvine'>Irvine</Dropdown.Item>
                    <Dropdown.Item eventKey='Seattle'>Seattle</Dropdown.Item>
                    <Dropdown.Item eventKey='Los Angeles'>Los Angeles</Dropdown.Item>

                </DropdownButton>

                <Button onSubmit={this.handleSubmit} variant="outline-primary">Search for {this.state.type} for {this.state.hour} with {this.state.meal} in {this.state.loc} </Button>{' '}


            </div>

        )
    }

}

export default Find;