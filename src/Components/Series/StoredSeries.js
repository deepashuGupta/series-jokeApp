import React from 'react'
import { connect } from 'react-redux';
import { RemoveSeries } from '../../store/actions/SeriesAction'

function StoredSeries(props) {

    const removeSeriesHandler = (id) => {
        props.RemoveSeries(id)
    }

    const seriesDisplay = props.series.map(s => {
        return (<div className='container mt-5' key={s.id}>
            <ol className="list-group list-group-numbered d-flex">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <img src={s.image && s.image.medium} className='rounded-start' height={100} alt='wek' />
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{s.name && s.name}</div>
                        {s.summary && s.summary.substring(0, 150).replace(/<[^>]+>/g, " ")}
                        <br />
                        <a href = {s.officialSite} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Explore</a>
                        <button onClick={removeSeriesHandler.bind(this, s.id)} className="btn btn-sm btn-danger mx-2">Delete</button>
                    </div>
                </li>
            </ol>
        </div>)
    })

    return (
        <div>
            {props.series.length ? seriesDisplay : 'No series avialable..'}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        series: state.SeriesReducer.series
    }
}

const mapDispatchToProps = ({
    RemoveSeries
})

export default connect(mapStateToProps, mapDispatchToProps)(StoredSeries);