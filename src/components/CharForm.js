import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import charOptions from '../data/characterOptions.json';
import Backstory from './Backstory.js'

class CharForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            race: {name: "human", label: "Human"},
            class: { name: "barbarian", label: "Barbarian" },
            background: { name: "acolyte", label: "Acolyte"},
            subrace: {name: '', label: ''},
        };
    }    
    
    handleInputChange = (event) => {
        const target = event.currentTarget;
        const value = target.value;
        const name = target.name;
        let option = charOptions[name].find(option => option.name === value);
        this.setState({
            [name]: option
        });
    };

    handleSubraceChange = (event) => {
        const target = event.currentTarget;
        const value = target.value;
        const name = target.name;
        let option = this.state.race.subraces.find(a => a.name === value);
        this.setState({
            subrace: option
        });
    };

    getCharOptions = (option) => {
        return charOptions[option].map((i) => 
            <option value={i.name} key={i.name}>{i.label}</option>
        );
    };

    getSubraces = () => {
        return this.state.race.subraces.map((i) => 
            <option value={i.name} key={i.name}>{i.label}</option>
        );
    }

    render() {

        let isSubraces = this.state.race.subraces;

        return (
        <Container>
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Label id="select-race">
                            Race
                        </Form.Label>
                        <Form.Control as="select"  name="race" onChange={this.handleInputChange}>
                            {this.getCharOptions("race")}
                         </Form.Control>
                         {isSubraces &&                           
                            <Form.Control as="select"  name="subrace" onChange={this.handleSubraceChange}>
                                {this.getSubraces()}
                            </Form.Control>
                         }
                    </Col>
                    <Col>
                        <Form.Label id="select-class">
                            Class
                        </Form.Label>
                        <Form.Control as="select"  name="class" onChange={this.handleInputChange}>
                            {this.getCharOptions("class")}
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Label id="select-background">
                            Background
                        </Form.Label>
                        <Form.Control as="select" name="background" onChange={this.handleInputChange}>
                            {this.getCharOptions("background")}
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
            <Container>                
                You are a {this.state.subrace.label} {this.state.race.label} {this.state.class.label}, with a {this.state.background.label} background.
</Container>
            <Backstory>
            </Backstory>
        </Container>
        )
    }
}
export default CharForm;