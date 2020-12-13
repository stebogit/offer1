import PropTypes from 'prop-types';
import { numFormatter } from '../utils';
import { Link } from 'react-router-dom';

function PropertyCard ({ data }) {
    const { property, price, state } = data;
    return (
        <div className="col-md-4">
            <Link to={`/properties/${property.id}`} className="link-a">
                <div className="card-box-a card-shadow">
                    {state.toLowerCase() === 'pending' &&
                    <small className="pending-tag-c">Pending</small>}

                    <div className="img-box-a">
                        <img src={property.primaryImageUrl} alt="Property view" className="img-a img-fluid"/>
                    </div>
                    <div className="card-overlay">
                        <div className="card-overlay-a-content">
                            <div className="card-header-a">
                                <h2 className="card-title-a">
                                    {property.address.addressLine1}
                                    {property.address.addressLine2 &&
                                    <><br/> {property.address.addressLine2}</>}
                                </h2>
                            </div>
                            <div className="card-body-a">
                                <div className="price-box d-flex">
                                    <span className="price-a">$ {numFormatter.format(price)}</span>
                                </div>
                            </div>
                            <div className="card-footer-a">
                                <ul className="card-info d-flex justify-content-around">
                                    <li>
                                        <h4 className="card-info-title">Area <i className="fa fa-map-o"/></h4>
                                        <span>{numFormatter.format(property.squareFeet)}sqft</span>
                                    </li>
                                    <li>
                                        <h4 className="card-info-title">Beds <i className="fa fa-bed"/></h4>
                                        <span>{property.numberBedrooms}</span>
                                    </li>
                                    <li>
                                        <h4 className="card-info-title">Baths <i className="fa fa-bath"/></h4>
                                        <span>{property.numberBaths}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

PropertyCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default PropertyCard;
