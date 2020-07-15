import React, { Component } from 'react';
import { Row, Form, Button } from 'react-bootstrap';

export class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: Date.now(),
            title: this.state.title,
            content: this.state.content,
        };
        this.props.onSubmit(data);
        this.setState({
            title: '',
            content: '',
        });
        // console.log(data);
    }
    render() {
        return (
            <Row className="justify-content-center mb-3">
                <div>
                    <h1>Create post</h1>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group as={Row}>
                            <Form.Control type="text" name="title"
                                placeholder="enter post title"
                                onChange={this.handleChange} value={this.state.title} />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Control as="textarea" rows="3" name="content" placeholder="enter post"
                                onChange={this.handleChange} value={this.state.content} />
                        </Form.Group>

                        <Button variant="secondary" type="submit">post</Button>

                    </Form>
                </div>
            </Row>
        );
    }
}

//export default PostForm;