import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '929690483059-nssqu9il42smo2qq6gtsl4ngqsp3070m.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }


    render() {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;