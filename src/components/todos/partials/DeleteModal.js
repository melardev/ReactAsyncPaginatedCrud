import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

const DeleteModal = (props) => {
    return (
        <>
            <Modal show={props.shouldShow || false} onHide={props.onCancelClicked}>
                <ModalHeader closeButton>
                    <ModalTitle>A to do(id: {props.todo.id}) is gonna be deleted</ModalTitle>
                </ModalHeader>
                <ModalBody>Are you really sure??</ModalBody>
                <ModalFooter>
                    <Button variant="primary" onClick={props.onCancelClicked}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={props.onDeleteClicked}>
                        Yes, Delete It!
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};


export default DeleteModal;