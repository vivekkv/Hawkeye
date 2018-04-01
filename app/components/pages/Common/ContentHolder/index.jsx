import React from 'react';

export default class ContentHolder extends React.Component {

    render() {
        return <div style={{ "paddingBottom": "80px" }}> <div className="container-fluid">

            {this.props.children}

        </div></div>
    }
}