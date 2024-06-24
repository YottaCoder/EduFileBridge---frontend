import React from "react";

const Get_Started = () => {
    const arrow = "-->";

    return (
        <div className="container-fluid GT-Page">
            <div className="row justify-content-center">
                <div className="col-xl-10 mt-5">
                    <div className="GT-Card d-flex flex-column flex-md-row p-4">
                        <img src="/images/Web-Logo-wb.png" alt="Web-Logo" className="me-3 GT-img align-self-center align-self-md-start" />
                        <div className="flex-grow-1">
                            <p className="m-4 text-white">
                                <span className="h3 GT-Card-Heading"><u>Introduction</u></span> <br /><br />
                                EduFileBridge: Your Academic Record Solution. 
                                Streamline academic record management with our digital platform. 
                                Easily store, access, and analyze marksheets. Empower stakeholders with real-time data insights. 
                                Say goodbye to paperwork, and hello to efficiency. 
                                Experience the future of educational record-keeping with EduFileBridge.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-10 mt-5">
                    <div className="GT-Card d-flex flex-column flex-md-row p-4">
                        <img src="\images\Save Marksheet.png" alt="Save Marksheet Image" className="me-3 GT-img align-self-center align-self-md-start" />
                        <div className="flex-grow-1">
                            <p className="m-4 text-white">
                                <span className="h3 GT-Card-Heading"><u>Save Marksheet</u></span> <br /><br />
                                Here, not only can you securely save your marksheet, but you can also fill in essential
                                details about your school and college experiences. Our platform offers a seamless experience,
                                allowing you to document your educational achievements alongside pertinent information such
                                as institution names, addresses, and dates attended. By providing this comprehensive
                                record-keeping solution, we aim to simplify the management of your academic history.
                                Say goodbye to scattered documents and hello to an organized repository of your 
                                educational milestones. Whether you're saving your marksheet or filling in school
                                and college details, our platform ensures that your information is stored securely
                                and readily accessible whenever you need it.<br/><br />
                                <button className="GT-btn align-self-center mt-3 mt-md-0"><u>Save Marksheet {arrow}</u></button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-10 mt-5">
                    <div className="GT-Card d-flex flex-column flex-md-row p-4">
                        <img src="\images\Find Marksheet.png" alt="Find Marksheet Image" className="me-3 GT-img align-self-center align-self-md-start" />
                        <div className="flex-grow-1">
                            <p className="m-4 text-white">
                                <span className="h3 GT-Card-Heading"><u>View Marksheet</u></span> <br /><br />
                                Whether you're retrieving your marksheet using a unique ID or updating your educational
                                profile with school and college details, our user-friendly interface ensures efficiency and 
                                simplicity. We understand the importance of organized academic record-keeping, and our
                                platform is designed to streamline this process for you. Join us in embracing the ease of 
                                managing your educational journey, where accessing and updating your marksheet is just a 
                                few clicks away.<br/><br />
                                <button className="GT-btn align-self-center mt-3 mt-md-0"><u>View Marksheet {arrow}</u></button>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-10 mt-5 mb-5">
                    <div className="GT-Card d-flex flex-column flex-md-row p-4">
                        <img src="\images\Contact Us.png" alt="Contact Us Image" className="me-3 GT-img align-self-center align-self-md-start" />
                        <div className="flex-grow-1">
                            <p className="m-4 text-white">
                                <span className="h3 GT-Card-Heading"><u>Contact Us</u></span> <br /><br />
                                EduFileBridge: Your Academic Record Solution. 
                                We value your feedback and are here to assist you with any inquiries or concerns you may have.
                                Whether you need help accessing your marksheet, have questions about updating your
                                educational profile, or require general assistance, our dedicated team is ready to provide 
                                you with prompt support.<br/><br />
                                <button className="GT-btn align-self-center mt-3 mt-md-0"><u>Contact Us {arrow}</u></button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Get_Started;
