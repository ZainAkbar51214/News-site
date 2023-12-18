import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsItem extends Component {
    render() {
        let {title,  description, imageUrl} = this.props;
        return (
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="card" style={{width: '18rem'}}>
                                <img src={imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text"> {description} </p>
                                    <Link to="/" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;