import React, { useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';
import {FooterContainer} from '../containers/footer'
const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    
    }, []);

    return (
        <div>
            <Navbar />
            {children}
            <FooterContainer />
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
