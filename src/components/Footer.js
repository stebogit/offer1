function Footer () {
    return (
        <footer className="section-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="socials-a">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-twitter" aria-hidden="true"/>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram" aria-hidden="true"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="copyright-footer">
                            <p className="copyright color-text-a">
                                © Copyright{' '}
                                <span className="color-a">O</span><span className="color-c">ffer<span className="color-b">1</span></span> All Rights Reserved.
                            </p>
                        </div>
                        <div className="credits">
                            {/*Licensing information: https://bootstrapmade.com/license/*/}
                            Designed by <a href="https://bootstrapmade.com" rel="noopener noreferrer">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
