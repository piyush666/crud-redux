import React, { Component } from 'react';

export class AllPost extends Component {
    render() {
        const posts = this.props.posts.map((p) => (
            <EditablePost
                key={p.id}
                post={p}
                onDeleteClick={this.props.onDeleteClick}
                onEditFormSubmit={this.props.onEditFormSubmit}
            />

        ));
        return (
            <div>
                <h1>all post</h1>
                <div>
                    {posts}
                </div>
                {console.log('all post')}
                {console.log(this.props.posts)}

            </div>
        );
    }
}
class EditablePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editFormOpen: false,
        }
        this.handleEditclick = this.handleEditclick.bind(this);
        this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    }
    handleEditclick() {
        console.log('edit clicked in editablepost');
        this.setState({
            editFormOpen: true,
        })
    }
    handleEditFormSubmit(data) {
        this.props.onEditFormSubmit(data);
        this.setState({
            editFormOpen: false,
        })
    }
    render() {
        if (this.state.editFormOpen) {
            return (<EditForm
                post={this.props.post}
                onEditFormSubmit={this.handleEditFormSubmit}
                onEditFormCancel={() => {
                    this.setState({
                        editFormOpen: false
                    })
                }}
            />);
        } else {
            return (<Post
                onEditClick={this.handleEditclick}
                post={this.props.post}
                onDeleteClick={this.props.onDeleteClick}
            />);
        }

    }
}
class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.post.id || '',
            title: this.props.post.title || '',
            content: this.props.post.content || '',
        }
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
            id: this.state.id,
            title: this.state.title,
            content: this.state.content,
        };
        this.props.onEditFormSubmit(data);
        // console.log(data);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title"
                        placeholder="enter post title"
                        onChange={this.handleChange} value={this.state.title} /><br />
                    <textarea name="content" placeholder="enter post"
                        onChange={this.handleChange} value={this.state.content} /><br />
                    <button type="submit">update</button>
                    <button onClick={this.props.onEditFormCancel}>cancel</button>
                </form>
            </div >
        );
    }

}

const Post = (props) => {
    const p = props.post;
    return (
        <div>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <button onClick={() => props.onEditClick()}> Edit</button>
            <button onClick={() => props.onDeleteClick(p.id)}>Delete</button>
        </div>
    );
}
