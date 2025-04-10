import React, {Component} from 'react';

class About extends Component {

    render() {
        return (
            <div className="container d-flex gap-2">
                <div className={'overflow-hidden col-3'}>
                    <img src={'https://taylormadetraffic.com/wwwroot/images/saman.jpg'} style={{maxHeight:350}}/>
                    <div style={{height:10}} className={'bg-secondary mt-2'} ></div>
                </div>
                <div>
                    <h1 className="text-primary">Effective marketing begins with design.</h1>
                    <p>
                        With a background in marketing and business development, I understand how crucial visual
                        impressions are for communicating messages and capturing attention. While art can be subjective,
                        successful marketing design relies on how information is processed by the eye.</p>

                    <p>Aesthetics are tailored to both the artist and target audience, but clear, organized information
                        is key to delivering a message swiftly. By integrating style to resonate with your audience, I
                        leverage my business insight to ensure designs not only look great but also align with strategic
                        goals. My approach focuses on achieving simplicity and balance to effectively bridge design with
                        business objectives.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
