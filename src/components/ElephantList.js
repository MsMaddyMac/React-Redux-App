import React from 'react'
// import bridge
import { connect } from 'react-redux';
// import thunk middleware function
import { fetchElephants } from '../actions';
import { ElephantCard } from './ElephantCard'

function ElephantList(props) {
    return (
        <div className="elephant-list">
            <h4>Press button to see Elephants!</h4>
            <button className="btn" onClick={() => props.dispatch(fetchElephants())}>Enter</button>
            {props.isFetching && <span> Here comes the herd 🐘🐘🐘!!</span>}
            {props.error && <div>{props.error.message}</div>}
            <div className="allCards">
                {props.elephants.map((elephant, id) => (
                    <ElephantCard elephant={elephant} key={id} />
                ))}
            </div>
        </div>
    );
};


export default connect(state => {
    return state;})(ElephantList);
