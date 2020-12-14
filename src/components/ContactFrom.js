import { useState } from 'react';
import { useAuth } from './Auth';
import FromInput from './FormInput';
import axios from 'axios';

function ContactFrom () {
    const [error, setError] = useState(false);
    const [result, setResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const auth = useAuth();
    const [message, setMessage] = useState({
        name: auth.user ? auth.user.first : '',
        email: auth.user ? auth.user.email : '',
        body: '',
    });

    const handleChange = (e) => setMessage({ ...message, [e.target.name]: e.target.value });

    const send = async (e) => {
        e.preventDefault();
        setError(false);
        setResult(false);
        setLoading(true);
        try {
            await axios.post('/api/email', message);
            handleSuccess();
        } catch (e) {
            handleError();
        }
    };

    const handleSuccess = () => {
        setLoading(false);
        setResult(true);
        setMessage({
            name: auth.user ? auth.user.first : '',
            email: auth.user ? auth.user.email : '',
            body: '',
        });
    }

    const handleError = () => {
        setLoading(false);
        setError(true);
    }

    return (
        <div className="property-contact">
            <form onSubmit={send}>
                <div className="row">
                    <div className="col-md-12 mb-1">
                        <div className="form-group">
                            <FromInput name="name" placeholder="Name *" value={message.name} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-md-12 mb-1">
                        <div className="form-group">
                            <FromInput type="email" name="email" value={message.email} placeholder="Email *" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="col-md-12 mb-1">
                        <div className="form-group">
                            <textarea
                                className="form-control" placeholder="Comment *" name="body"
                                rows="6" required onChange={handleChange} value={message.body}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-c" disabled={loading} style={{width: 225}}>
                            {loading ? <i className="fa fa-spinner fa-spin"/> : 'Send Message'}
                        </button>
                    </div>
                </div>


                <div className="col-md-12 mb-3">
                    <div className="mb-3">
                        {error && <div className="error-message">Sorry an error occurred</div>}
                        {result && <div className="sent-message">Message sent! We'll get back to you shortly</div>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactFrom;
