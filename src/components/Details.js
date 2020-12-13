import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ShareButtons from './ShareButtons';
import Loader from './Loader';
import PropTypes from 'prop-types';
import { numFormatter, capitalize, fromCamelCase } from '../utils';

function Details ({ properties, loading }) {
    const { propertyId } = useParams();

    if (loading) {
        return (
            <section className="intro-single" style={{ paddingTop: '12rem' }}>
                <Loader/>
            </section>
        );
    }

    const details = properties.find(p => p.id === Number(propertyId)) ?? {};
    const { property, price, includedItems, state, listingAgent } = details;

    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            {property
                                ? <div className="title-single-box">
                                    <h1 className="title-single">
                                        {property.address.addressLine1} {property.address.addressLine2}
                                    </h1>
                                    <span className="color-text-a">
                                        {property.address.city}, {property.address.state} {property.address.zip}
                                    </span>
                                </div>
                                : <div className="title-single-box" style={{borderLeft: '1px solid #adadad'}}>
                                    <h1 className="title-single color-d">
                                        Listing not found
                                    </h1>
                                    <span className="color-text-a">
                                        The property might no longer be available, please contact us and we{' '}
                                        will be happy to help you.
                                    </span>
                                </div>}
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/properties"> &lt;&lt; All properties</Link>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {property &&
            <section className="property-single nav-arrow-b">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="owl-carousel owl-arrow gallery-property">
                                <div className="details-image"
                                     style={{ backgroundImage: `url(${property.primaryImageUrl})` }}
                                     title="Property picture"
                                />
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-4">
                                    <div className="property-price d-flex justify-content-center foo">
                                        <div className="card-header-c d-flex">
                                            <div className="card-box-ico">
                                                <span className="ion-money">$</span>
                                            </div>
                                            <div className="card-title-c align-self-center">
                                                <h5 className="title-c">{numFormatter.format(price)}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-summary">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="title-box-d section-t4">
                                                    <h3 className="title-d">Quick Summary</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-list">
                                            <ul className="list">
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property ID:</strong>
                                                    <span>{property.id}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Property Type:</strong>
                                                    <span>{fromCamelCase(property.propertyType)}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Status:</strong>
                                                    <span>{state}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Area:</strong>
                                                    <span>{numFormatter.format(property.squareFeet)} sqft</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Beds:</strong>
                                                    <span>{property.numberBedrooms}</span>
                                                </li>
                                                <li className="d-flex justify-content-between">
                                                    <strong>Baths:</strong>
                                                    <span>{property.numberBaths}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-7 section-md-t3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Property Description</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="property-description">
                                        <p className="description color-text-a">
                                            {property.description}
                                        </p>
                                    </div>
                                    <div className="row section-t3">
                                        <div className="col-sm-12">
                                            <div className="title-box-d">
                                                <h3 className="title-d">Amenities</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amenities-list color-text-a">
                                        {includedItems.length
                                            ? <ul className="list-a no-margin">
                                                {includedItems.map((item, i) => <li
                                                    key={i}>{capitalize(item.name)}</li>)}
                                            </ul>
                                            : <p className="text-muted">None</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="row section-t3">
                                <div className="col-sm-12">
                                    <div className="title-box-d">
                                        <h3 className="title-d">Contact Agent</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="property-agent">
                                        <h4 className="title-agent">
                                            {listingAgent.user.firstName} {listingAgent.user.lastName}
                                        </h4>
                                        <p className="color-text-d">
                                            Licence #: {listingAgent.licenseNumber} ({listingAgent.licenseState})
                                        </p>
                                        <ul className="list-unstyled">
                                            <li className="d-flex justify-content-between">
                                                <strong>Phone:</strong>
                                                <span className="color-text-a">
                                                    {listingAgent.user.phone ?? <span className="text-muted">-</span>}
                                                </span>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <strong>Email:</strong>
                                                <span className="color-text-a">{listingAgent.user.email}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <h5 className="title-agent mt-5 color-b">
                                        Share listing:
                                    </h5>
                                    <ShareButtons text="Check this out!" pageUrl={window.location.href}/>
                                </div>
                                <div className="col-md-6">
                                    <div className="property-contact">
                                        <form className="form-a">
                                            <div className="row">
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input type="text"
                                                               className="form-control form-control-sm form-control-a"
                                                               id="inputName" placeholder="Name *" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <input type="email"
                                                               className="form-control form-control-sm form-control-a"
                                                               id="inputEmail1" placeholder="Email *" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-1">
                                                    <div className="form-group">
                                                        <textarea id="textMessage" className="form-control"
                                                                  placeholder="Comment *" name="message"
                                                                  rows="6" required/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-c">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    );
}

Details.propTypes = {};
Details.defaultProps = {};

export default Details;
