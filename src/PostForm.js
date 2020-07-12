import React, { Component } from 'react';

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
            <div>
                <h1>Create post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title"
                        placeholder="enter post title"
                        onChange={this.handleChange} value={this.state.title} /><br />
                    <textarea name="content" placeholder="enter post"
                        onChange={this.handleChange} value={this.state.content} /><br />
                    <button type="submit">post</button>
                </form>
            </div>
        );
    }
}

//export default PostForm;