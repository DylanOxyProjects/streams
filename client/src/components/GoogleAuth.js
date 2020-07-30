import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '826464201493-lqctrdhf70mb7v9773tu1q3s7ns1c5bc.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render(){
        return <div>Google Auth</div>
    };
};

export default GoogleAuth;