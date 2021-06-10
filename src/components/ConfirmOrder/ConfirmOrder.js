import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmOrder = () => {
    return (
        <div className="text-center mt-5 text-success">
            <h3>Thank You So Much</h3>
            <h1>Your Order Has Been placed</h1>
            <Link to="/" className="btn btn-primary">Go back to the Home</Link>
        </div>
    );
};

export default ConfirmOrder;