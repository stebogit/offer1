import PropTypes from 'prop-types';

function Header ({ title, subtitle, error, backLink }) {
    return (
        <section className="intro-single">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-9">
                        <div className="title-single-box" style={error ? { borderLeft: '1px solid #adadad' } : {}}>
                            <h1 className="title-single">{title}</h1>
                            <span className="color-text-a">{subtitle}</span>
                        </div>
                    </div>

                    {backLink &&
                    <div className="col-md-12 col-lg-3">
                        <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    {backLink}
                                </li>
                            </ol>
                        </nav>
                    </div>}
                </div>
            </div>
        </section>
    );
}

Header.propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    error: PropTypes.bool,
    backLink: PropTypes.node,
};
Header.defaultProps = {
    error: false,
    backLink: '',
};

export default Header;
