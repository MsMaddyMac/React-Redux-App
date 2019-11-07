import React from 'react'
// import bridge
import { connect } from 'react-redux';
// import thunk middleware function
import { fetchElephants } from '../actions';
import { ElephantCard } from './ElephantCard'

function ElephantList(props) {
    return (
        <>
            <button>Enter</button>
            <div className="allCards">
                <ElephantCard />
            </div>
        </>
    )
}

const mapStateToProps = {
    fetchElephants
};

export default connect(state => {
    return state;})(ElephantList);
