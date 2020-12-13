const containerStyle = {
    textAlign: 'center',
    width: '100%',
    paddingTop: '5rem',
};

const textStyle = {
    fontSize: '2.5rem',
    fontWeight: 600,
};

function Loader () {
    return (
        <div style={containerStyle}>
            <p style={textStyle}>Loading <i className="fa fa-spinner fa-spin"/></p>
        </div>
    );
}

export default Loader;
