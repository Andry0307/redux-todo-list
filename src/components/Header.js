import React from 'react';
import {connect} from 'react-redux';
import {showModal} from '../store/actions';

function Header({show}) {
    return (
        <nav className='navbar  bg-dark'>
            <h2>Task List</h2>
            <button className='btn btn-success' onClick={show}>
                Add New
            </button>
        </nav>
    );
}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = {
        show: showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);