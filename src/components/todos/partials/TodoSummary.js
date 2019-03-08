import React from "react";
import {NavLink} from "react-router-dom";

class TodoSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classNames: ['badge badge-dark', 'badge badge-secondary', 'badge badge-light', 'badge badge-info']
        }
    }

    render() {
        const todo = this.props.todo;
        return (
            <div className="card mb-4">
                <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                <div className="card-body">
                    <h2 className="card-title">{todo.title}</h2>
                    <p className="card-text">{todo.content}</p>
                    <NavLink to={'/todos/' + todo.id} className="btn btn-primary">
                        <div onClick={this.props.onTodoSelected}> Read More &rarr; </div>
                    </NavLink>
                </div>
                <div className="card-footer text-muted">
                    Created at&nbsp;
                    {todo.created_at}
                    <br/>
                </div>
            </div>
        );
    }
}


export default TodoSummary;