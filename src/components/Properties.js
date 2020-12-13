import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import PropertiesFilters from './PropertiesFilters';
import Loader from './Loader';
import Header from './Header';

function Properties ({ properties, loading, error }) {
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [filters, setFilters] = useState({
        city: '',
        minBedrooms: 0,
        minPrice: '',
        maxPrice: Infinity,
    });

    useEffect(() => filterProprieties(), [filters, properties]);

    if (error) {
        return <Header error title="Error" subtitle="Sorry, an error occurred, please try again later"/>;
    }

    const handleChange = (e) => {
        const v = e.target.value;
        const value = !v || isNaN(v) ? e.target.value : Number(v);
        setFilters({ ...filters, [e.target.name]: value });
    };

    const handlePriceChange = (e) => {
        const name = e.target.name;
        const value = e.target.value !== ''
            ? Number(e.target.value)
            : name === 'maxPrice' ? Infinity : '';
        setFilters({ ...filters, [name]: value });
    };

    const handleReset = () => setFilters({
        city: '',
        minBedrooms: 0,
        minPrice: '',
        maxPrice: Infinity,
    });

    const filterProprieties = () => {
        // TODO: mark property as hidden instead
        let filtered = properties;
        if (filters.city !== '') filtered = filtered.filter(p => p.property.address.city === filters.city);
        if (filters.minBedrooms > 0) filtered = filtered.filter(p => p.property.numberBedrooms > filters.minBedrooms);
        if (filters.minPrice > 0) filtered = filtered.filter(p => p.price > filters.minPrice);
        if (filters.maxPrice < Infinity) filtered = filtered.filter(p => p.price < filters.maxPrice);
        setFilteredProperties(filtered);
    };

    const cityOptions = [...new Set(properties.map(({ property: { address: { city } } }) => city))] // filter unique
        .map((c) => ({ value: c, text: c }));
    const bedroomOptions = [2, 3, 4, 5, 6].map((c) => ({ value: c, text: `${c}+` }));

    return (
        <>
            <Header title="Our Amazing Properties" subtitle="Chose the one right for you!"/>

            <section className="property-grid grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <PropertiesFilters
                                filters={filters}
                                cityOptions={cityOptions}
                                bedroomOptions={bedroomOptions}
                                onPriceChange={handlePriceChange}
                                onReset={handleReset}
                                onChange={handleChange}
                            />
                        </div>

                        {loading
                            ? <Loader/>
                            : filteredProperties.map((property, i) => <PropertyCard key={i} data={property}/>)}
                    </div>
                </div>
            </section>
        </>
    );
}

Properties.propTypes = {
    properties: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
};

export default Properties;
