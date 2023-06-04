import React from 'react'
import StoredJoke from './StoredJoke'
import CallJokes from './CallJokes';


function Joke() {
    return (
        <div className="container">
            <CallJokes />
            <hr />
            <StoredJoke />
        </div>
    )
}

export default Joke