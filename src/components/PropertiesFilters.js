import React from 'react';
import PropTypes from 'prop-types';
import PropertiesSelect from './PropertiesSelect';
import PropertiesInput from './PropertiesInput';

function PropertiesFilters ({ filters, bedroomOptions, cityOptions, onChange, onPriceChange, onReset }) {
    return (
        <div className="grid-option">
            <form className="form-a">
                <div className="row">
                    <div className="col-md-3">
                        <PropertiesSelect
                            options={cityOptions}
                            defaultValue={{ value: '', text: 'Any' }}
                            label={<>City <i className="fa fa-map-marker" aria-hidden="true"/></>}
                            name="city"
                            value={filters.city}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <PropertiesSelect
                            options={bedroomOptions}
                            defaultValue={{ value: '', text: 'Any' }}
                            label={<>Bedrooms <i className="fa fa-bed" aria-hidden="true"/></>}
                            name="minBedrooms"
                            value={filters.minBedrooms}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <PropertiesInput
                            placeholder="0"
                            label={<>Min <i className="fa fa-usd" aria-hidden="true"/></>}
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={onPriceChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <PropertiesInput
                            placeholder="Max"
                            label={<>Max <i className="fa fa-usd" aria-hidden="true"/></>}
                            name="maxPrice"
                            value={filters.maxPrice === Infinity ? '' : filters.maxPrice}
                            onChange={onPriceChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <button type="button" onClick={onReset} className="btn btn-sm btn-reset">
                            Reset <i className="fa fa-repeat" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

PropertiesFilters.propTypes = {};
PropertiesFilters.defaultProps = {};

export default PropertiesFilters;
