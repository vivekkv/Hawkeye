import React from 'react';

export default class PageLoader extends React.Component {

    render() {
        
        if(!this.props.showLoader) {
            return null
        }

        return <div className="loader">
            <div></div>
            <div></div>
            <div></div>
        </div>
    }
}