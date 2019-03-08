import React from 'react';
import {NavLink} from "react-router-dom";
import DeleteModal from "./partials/DeleteModal";
import {TodoAxiosService} from "../../services/remote/TodoAxiosService";
import {NotificationService} from "../../services/local/NotificationService";

export const TodoDetails = class TodoDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            showDialog: false
        };
    }

    componentWillMount() {
        TodoAxiosService.fetchById(this.props.match.params.id).then(res => {
            if (res.data.success) {
                NotificationService.showToastSuccess('Todo Loaded successfully');
                delete res.data.success;
                delete res.data.full_messages;
                this.setState({
                    todo: {...res.data},
                });
            } else {
            }
        }).catch(err => {
            console.error(err);
        });
    }

    requestDelete() {
        this.setState({
            showDialog: true,
        });
    }

    deleteTodo() {
        this.setState({showDialog: false});
        TodoAxiosService.delete(this.state.todo.id).then(res => {
            NotificationService.showToastSuccess('Todo deleted successfully');
            this.props.history.push('/')
        }).catch(err => {
            NotificationService.showDialogError('Error:' + err.message);
        });
    }

    render() {
        const {todo} = this.state;
        // todo has to be loaded
        if (!todo.id) {
            return <div>Loading...</div>
        }

        return (
            <div className="text-center container">
                <DeleteModal todo={todo} onDeleteClicked={this.deleteTodo.bind(this)}
                             shouldShow={this.state.showDialog}
                             onCancelClicked={() => {
                                 this.setState({showDialog: false})
                             }}/>
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="form-group">
                            <h3>Title:</h3>
                            <p>{todo.title}</p>
                        </div>
                        <h3>Description:</h3>
                        <p>{todo.description}</p>
                    </div>
                </div>
                <br/>

                <span className='btn btn-danger'
                      onClick={(evt) => this.requestDelete()}>Delete</span>
                &nbsp;
                <NavLink className="btn btn-warning" to={`/todos/${todo.id}/edit`}>
                    Edit
                </NavLink>

                &nbsp;
                <NavLink className="btn btn-success" to="/">Back to home
                </NavLink>
            </div>
        )
    }
};

