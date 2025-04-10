import React, {Component} from 'react';

import florul from '../florul.json';
import MasonryGrid from "./MasonryGrid";

class Florul extends Component {

    render() {
        return (
            <div id="florulStudy" className="mt-3 mb-3">
                <div className={'container'}>
                    <MasonryGrid images={florul.images} columns={4}/>
                </div>
            </div>
        );
    }
}

export default Florul;
