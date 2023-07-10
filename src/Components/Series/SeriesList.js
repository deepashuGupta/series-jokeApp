import React from 'react';
import { connect } from 'react-redux';
import {StoreSeries} from '../../store/actions'


function SeriesList(props) {

  const addSeriesHandler = () => {
    props.StoreSeries(props.series)
  }

  let {
    genres, image, language, name, officialSite, premiered, rating, summary,
  } = props.series;

  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image && image.medium}  className="img-fluid rounded-start" alt="image312" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name && name}</h5>
            <p className="card-text">{summary && summary.substring(0,150).replace(/<[^>]+>/g, " ")}...</p>
            <p className="card-text"><small className="text-body-secondary">{language && language}  || [ {genres && genres.map(g => g+' ')}]<br />Released At :{premiered && premiered} || Rating : {rating && Math.round(rating.average)} </small></p>
            <a href ={officialSite ? officialSite : ''} rel="noreferrer" target = "_blank" className="btn btn-sm btn-primary mx-2">Explore</a>
            <button onClick={addSeriesHandler} className="btn btn-sm btn-primary">Add TO Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = ({
  StoreSeries
})

export default connect(null,mapDispatchToProps)(SeriesList);