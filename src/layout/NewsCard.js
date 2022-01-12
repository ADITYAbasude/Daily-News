import React, { Component } from 'react';
import nofoundImh from '../img/A.png'

export class NewsCard extends Component {



    render() {
        let { header, description, image, newsUrl } = this.props;

        return (
            <>
                <div>

                    <div className='card' style={{ marginBottom: "10px" }}>
                        <img src={image ? image : nofoundImh} className="card-img-top" alt='img'></img>
                        <div className="card-body" >
                            <h5 className="card-title">{header}..</h5>
                            <p className="card-text">{description}...</p>
                            <a rel="noreferrer" href={newsUrl} target='_blank' className='btn btn-dark' >read more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsCard
