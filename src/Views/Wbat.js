import React, {Component} from 'react';

class Wbat extends Component {

    render() {
        return (
            <div id="wbatStudy" className="mt-3 mb-3">
                <div className="container text-center">
                    <h1>WBAT</h1>
                    <img src={'/assets/wbat/logo.png'} width={'100'} alt="WBAT Logo"/>
                </div>

                <div className="container">
                    <div className="d-flex justify-content-around text-center">
                        <div className={'text-center col-3'}>
                            <h6>UX Audit</h6>
                            <hr/>
                        </div>
                        <div className={'text-center col-3'}>
                            <h6>Updated UI</h6>
                            <hr/>
                        </div>
                    </div>
                </div>

                <div id={'wbatSec1'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/wbat/audit/entering_data_on_submission_form_1.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/wbat/after/domain_entry___portrait.png"
                                 className="img-fluid"/>
                        </div>
                    </div>
                </div>

                <div className={'container mt-5 mb-5'}>
                    <hr/>
                </div>

                <div id={'wbatSec2'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/wbat/audit/entering_data_on_submission_form_1.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/wbat/after/employee_info_details_empty___portrait.png"
                                 className="img-fluid"/>
                        </div>
                    </div>
                </div>

                <div className={'container mt-5 mb-5'}>
                    <hr/>
                </div>

                <div id={'wbatSec2'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/wbat/audit/after_saving_report__not_submitting_.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/wbat/after/mobile_homepage.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Wbat;
