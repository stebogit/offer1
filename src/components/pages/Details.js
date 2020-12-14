import { Link, useParams } from 'react-router-dom';
import ShareButtons from '../ShareButtons';
import Loader from '../Loader';
import Header from '../Header';
import PropTypes from 'prop-types';
import { capitalize, fromCamelCase, numFormatter } from '../../utils';
import ContactFrom from '../ContactFrom';

function Details ({ properties, loading, error }) {
    const { propertyId } = useParams();

    if (error) {
        return (
            <Header error title="Oops!..." subtitle="Sorry, something went wrong on our end."/>
        );
    }

    if (loading) {
        return (
            <section className="intro-single" style={{ paddingTop: '12rem' }}>
                <Loader/>
            </section>
        );
    }

    const details = properties.find(p => p.id === Number(propertyId)) ?? {};
    const { property, price, includedItems, state, listingAgent } = details;

    const backLink = <Link to="/properties"> &lt; All properties</Link>;

    return (
        <>
            {property
                ? <Header
                    title={`${property.address.addressLine1} ${property.address.addressLine2}`}
                    subtitle={`${property.address.city}, ${property.address.state} ${property.address.zip}`}
                    backLink={backLink}
                />
                : <Header
                    error title="Listing not found"
                    subtitle="The property might no longer be available, please contact us and we will be happy to help you."
                    backLink={backLink}
                />}

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
                                    <ContactFrom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    );
}

Details.propTypes = {
    properties: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};

export default Details;
