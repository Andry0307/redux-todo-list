import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {closeModal, changeValue, onFormSubmit} from '../store/actions'

function ListModalForm({showModalForm, newListItem, onCloseModal, changes, submit}) {
    function add(e) {
        e.preventDefault();
        submit(newListItem)
    }

    return (
        <div>
            <Modal show={showModalForm} onHide={onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>add new</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={add}>
                        <input className='form-control form-control-lg'
                               onChange={(e)=> changes({[e.target.name]: e.target.value})}
                               value={newListItem.name}
                               name='name'
                               type='text'/>
                        <Modal.Footer>
                            <Button  variant="secondary" onClick={onCloseModal}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary" onClick={onCloseModal}>
                                add
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        showModalForm: state.showModalForm,
        newListItem: state.newListItem
    }
}

const mapDispatchToProps = {
    onCloseModal: closeModal,
    changes: changeValue,
    submit: onFormSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalForm);