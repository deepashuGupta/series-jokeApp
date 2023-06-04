import React from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {removeJoke} from '../../store/actions/JokeActions'

function StoredJoke(props) {

    const jokes = useSelector(state => state.JokeReducer.jokes);
    const dispatch = useDispatch()

    const removeJokeHandler = (id) => {
        dispatch(removeJoke(id))
    }

    const jokeDisplay = jokes.map(j => {
         return (<div key={j.id}>
            <ol className="list-group list-group-numbered">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{j.question ? j.question : j.joke}</div>
                        {j.question ? j.answer : ''}
                    </div>
                    <button onClick={removeJokeHandler.bind(this,j.id)} className="badge btn btn-danger ">Delete</button>
                </li>
            </ol>
            <br />
        </div>)
    })

    return (
        <div>
            { jokes.length ? jokeDisplay : 'No jokes avialable..' }
        </div>
    )
}

// const mapStateToProps = (state, props) => {
//     return {
//         jokes: state.JokeReducer.jokes
//     }
// }

// const mapDispatchToProps = ({
//     removeJoke
// })

export default StoredJoke;