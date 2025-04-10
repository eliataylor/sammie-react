import React, {Component} from 'react';

class Snonav extends Component {

    render() {
        return (
            <div id="snonavStudy" className="mt-3 mb-3">
                <div className="container">
                    <h1 className={'mt-1'}>Snonav</h1>
                    <img src={'/assets/snonav/logo.png'} className="img-fluid" alt="Snonav Logo"/>

                    <h2 className={'mt-5'}>Overview</h2>
                    <p className="mb-5">
                        This case study analyzes the usability issues identified in the initial UX audit and highlights
                        the improvements made in the updated UI. The focus is on enhancing user experience through
                        better navigation, readability, accessibility, and engagement.
                    </p>
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

                <div id={'snonavSec1'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/register_sign_in_page.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/register_sign_in_page.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">1. Register + Sign-in Page</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Form fields lacked clear labels, making input confusing.
                                    </li>
                                    <li>No visual grouping for login vs. sign-up.
                                    </li>
                                    <li>Poor error feedback, leading to user frustration.
                                    </li>
                                    <li>Buttons lacked hierarchy, making the primary action unclear.
                                    </li>
                                    <li>Keyboard interaction issues affected usability.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Clear labels for each form field for better readability.</li>
                                    <li>Distinct sections for login and registration to reduce confusion.</li>
                                    <li>Improved error handling with inline validation for real-time feedback.
                                    </li>
                                    <li>Stronger CTA buttons for "Sign Up" and "Log In."</li>
                                    <li>Optimized keyboard navigation for smooth interaction.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Makes form completion easier and reduces frustration.</li>
                                <li>Helps new users onboard quickly with clear differentiation.</li>
                                <li>Reduces input errors by providing immediate feedback.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec2'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/main_side_menu.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/main_side_menu.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">2. Main Side Menu</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Too many menu options, overwhelming users.
                                    </li>
                                    <li>Icons were unclear, making navigation difficult.
                                    </li>
                                    <li>Inconsistent spacing and alignment reduced usability.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Grouped menu options logically (e.g., account settings, tracking).</li>
                                    <li>Redesigned icons for better recognition.
                                    </li>
                                    <li>Improved spacing and typography for better readability.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Simplifies navigation and reduces cognitive load.</li>
                                <li>Enhances visual hierarchy to guide users effectively.</li>
                                <li>Reduces decision fatigue with a structured layout.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec3'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/ski_areas.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/ski_areas.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">3. Ski Areas Page</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Dropdown menus were confusing, making selection difficult.
                                    </li>
                                    <li>No search functionality, requiring extensive scrolling.
                                    </li>
                                    <li>Poor filter visibility reduced efficiency.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Dropdowns replaced with a clearer list-based selection.</li>
                                    <li>Search bar added for quick access.
                                    </li>
                                    <li>Filters made more visible for refined results.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Reduces search time for users.</li>
                                <li>Provides better control over filtering options.</li>
                                <li>Improves accessibility with a scannable UI.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec4'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/plan_route.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/plan_route.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">4. Plan Route</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Cluttered map interface made planning difficult.
                                    </li>
                                    <li>No clear step-by-step flow for route creation.
                                    </li>
                                    <li>Poor feedback when selecting routes.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Introduced a step-by-step approach to guide users.</li>
                                    <li>Cleaner map layout for a distraction-free experience.
                                    </li>
                                    <li>Clearer route selection indicators for better interaction.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Helps users efficiently plan routes.</li>
                                <li>Reduces selection errors and improves accuracy.</li>
                                <li>Makes the interface less overwhelming.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec5'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/passes_page.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/passes_page.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">5. Passes Route</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Ticket options lacked distinction, causing confusion.
                                    </li>
                                    <li>No emphasis on CTA buttons, reducing conversions.
                                    </li>
                                    <li>Low contrast between text and background affected readability.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Introduced card-based layout for better visual distinction.</li>
                                    <li>Larger, more prominent CTA buttons.
                                    </li>
                                    <li>Improved contrast and typography for readability.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Allows users to compare passes easily.</li>
                                <li>Improves conversion rates with clear “Buy” buttons.</li>
                                <li>Enhances readability for better decision-making.</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec6'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/recorded_tracks.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/recorded_tracks.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">6. Recorded Tracks</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>No clear hierarchy, making data hard to interpret.
                                    </li>
                                    <li>Limited sorting and filtering options.
                                    </li>
                                    <li>Small text and poor contrast reduced readability.
                                    </li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Introduced a table-based layout for better comparison.</li>
                                    <li>Added sorting and filtering functionality.</li>
                                    <li>Enhanced contrast and text size for better legibility.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Helps users quickly find specific tracks.</li>
                                <li>Improves usability with structured data presentation.</li>
                                <li>Enhances readability and information clarity.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec7'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/account_settings_help.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/account_settings_help.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">7. Account + Settings + Help</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Settings were cluttered, making navigation difficult.</li>
                                    <li>Help section was buried, reducing accessibility.</li>
                                    <li>No profile overview for user information management.</li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Clearly separated sections for Profile, Settings, and Help.</li>
                                    <li>Help section made easily accessible.</li>
                                    <li>Profile overview added for better account management.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Simplifies account management with clear sections.</li>
                                <li>Reduces frustration by making help easy to find.</li>
                                <li>Enhances overall user experience with structured navigation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={'container mt-4 mb-4'}>
                    <hr/>
                </div>

                <div id={'snonavSec8'} className="container">
                    <div className="d-flex justify-content-between align-items-center flex-nowrap gap-3">
                        <div>
                            <img src="/assets/snonav/audit/share_snonav.png"
                                 className="img-fluid"/>
                        </div>
                        <div>
                            <img src={"/assets/arrow-right_svgrepo.com.png"}/>
                        </div>
                        <div>
                            <img src="/assets/snonav/after/share_snonav.png"
                                 className="img-fluid"/>
                        </div>
                    </div>

                    <h1 className="h3 mt-3 mb-4">8. Share Snonav</h1>
                    <div className="card-body">
                        <div className="row gap-3">
                            <div className="col-12">
                                <h2 className="h6">Before (UX Audit Findings)</h2>
                                <ul className="bulletList">
                                    <li>Social sharing options were unclear.</li>
                                    <li>No preview of shared content, causing uncertainty.</li>
                                    <li>Low engagement due to lack of interaction cues.</li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <h2 className="h6">After (Updated UI Improvements)</h2>
                                <ul className="bulletList">
                                    <li>Clearer sharing buttons for social media and direct links.</li>
                                    <li>Preview feature added to show shared content.</li>
                                    <li>Engagement prompts (e.g., “Invite Friends”) introduced.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-secondary bg-opacity-10 rounded">
                            <h2 className="h6 text-secondary">Why These Updates?</h2>
                            <ul className="bulletList">
                                <li>Simplifies account management with clear sections.</li>
                                <li>Reduces frustration by making help easy to find.</li>
                                <li>Enhances overall user experience with structured navigation.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <h6 className={'mb-3 fs-5 fw-normal'}>Reflections and Takeaways</h6>
                    <h6 className={'mt-4 fw-bold'}>Common UX Issues Identified:</h6>
                    <p className="fontLight">✅  Poor navigation structure → Improved menus and logical grouping. ✅  Cluttered UI elements → Better spacing, contrast, and typography. ✅ Unclear CTAs → More prominent buttons and structured layouts. ✅  Confusing workflows → Step-by-step guidance added. ✅  Limited filtering/search → Added search bars and filters. ✅  Low engagement → Introduced interactive elements. </p>
                    <h6 className={'mt-4 fw-bold'}>Overall Impact of Updates:</h6>
                    <p className="fontLight">✔ More intuitive navigation ✔ Faster task completion ✔ Higher engagement & conversions ✔ Better accessibility & readability ✔ Improved usability and error prevention</p>
                    <h6 className={'mt-4 fw-bold'}>Conclusion:</h6>
                    <p className="fontLight">The updates made as a result of the UX audit significantly improved the usability, efficiency, and overall experience for users. By addressing pain points such as cluttered interfaces, unclear CTAs, and poor navigation, the new UI ensures a smoother, more enjoyable user journey. This case study showcases the importance of iterative design and user-centric improvements in creating a highly functional and engaging digital experience.</p>
                </div>
            </div>
        );
    }
}

export default Snonav;
