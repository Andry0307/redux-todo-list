import React from 'react';
import {connect} from 'react-redux';
import {Button, Modal} from "react-bootstrap";
import {closeModal, changeValue, onFormSubmit} from '../store/actions'

function ListModalForm({showModalForm, newListItem, close, changes, submit}) {
    function add(e) {
        e.preventDefault();
        console.log('newListItem', newListItem);
        submit(newListItem)
    }

    return (
        <div>
            <Modal show={showModalForm} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={add}>
                        <input className='form-control form-control-lg'
                               onChange={(e)=> changes({[e.target.name]: e.target.value})}
                               value={newListItem.name}
                               name='name'
                               type='text'/>
                        <Modal.Footer>
                            <Button  variant="secondary" onClick={close}>
                                Close
                            </Button>
                            <Button type='submit' variant="primary" onClick={close}>
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
    close: closeModal,
    changes: changeValue,
    submit: onFormSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(ListModalForm);