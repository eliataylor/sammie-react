import React, {Component} from 'react';

class Landing extends Component {

    render() {
        return (
            <div id={'landing'}>
                <a href="/" className="btn fab" style={{position:"fixed", top: 15, left:5}}>
                        <img src="/favicon_rounded.png"  style={{width:60, borderRadius: 60}} />
                    </a>
                <div className={'inner'}>
                    <h4>For all inquiries please</h4>
                    <h1 className="h1">samanta.amna@gmail.com</h1>
                </div>
            </div>
        );
    }
}

export default Landing;
