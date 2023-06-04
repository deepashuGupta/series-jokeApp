import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to='/'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white" aria-current="page" to='/search'>Search WebSeries</NavLink>
            </li>
            <li className="nav-item position-relative">
              <NavLink className="nav-link text-white" to='/show'>WebSeries Cart
                <small className='bg-danger position-absolute rounded-circle d-flex justify-content-center align-items-center'
                  style={{
                    top:'0',
                    right : '-5%',
                    height: '20px',
                    width: '20px'
                  }}>
                  {props.series.length}</small>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to='/jokes'>Jokes🤢</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state, props) => {
  return {
    series: state.SeriesReducer.series
  }
}

export default connect(mapStateToProps)(Navbar);