import React from "react";

const About = () => {
    return(
        <div className="container-fluid about-page h-auto">
            <div className="row justify-content-center">
                <div className="col-10 about-content mt-5 text-white h-auto mb-5">
                    <div className="form-heading">
                        <h2>About Website</h2>
                    </div>
                    <div className="align-items-center mt-5">
                        <i><h4>EduFileBridge</h4></i>
                        <p className="mt-3 about-lines">
                        EduFileBridge is a comprehensive platform designed to streamline the process of uploading,
                        storing, and accessing academic mark sheets securely online.
                        </p>

                        <i><h4 className="mt-5">Our Mission</h4></i>
                        <p className="mt-3 about-lines">At EduFileBridge, our mission is to simplify the management of academic records by providing
                         a centralized platform that ensures easy access to mark sheets for students, educators, and
                          institutions alike. We aim to bridge the gap between traditional paper-based record-keeping 
                          systems and modern digital solutions, offering a user-friendly and efficient way to manage 
                          educational data.</p>

                        <i><h4 className="mt-5">Key Features</h4></i>
                        <ul className="list-unstyled">
                            <li className="mt-3 about-lines"><b className="feature-heading">Effortless Upload:</b> Easily upload mark sheets through our intuitive interface.
                             Users can securely upload scanned or digital copies of their mark sheets directly to their accounts.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">Centralized Storage:</b> All uploaded mark sheets are stored
                             securely in a centralized database, accessible only to authorized users. This centralized
                              storage eliminates the need for physical storage and reduces the risk of loss or damage to
                               important documents.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">User Authentication:</b> Ensure the security of academic records with robust
                             user authentication mechanisms. Users are required to authenticate their identities before gaining access to
                              their mark sheets, protecting sensitive information from unauthorized access.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">Universal Access:</b> Access mark sheets anytime, anywhere, from
                             any device with an internet connection. Whether you're a student checking your grades, an
                              educator reviewing student performance, or an institution managing academic records, you can
                               access mark sheets with ease through our platform.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">Data Privacy and Security:</b> We take data privacy and security
                             seriously. EduFileBridge employs industry-standard encryption techniques and security protocols
                              to safeguard user data and ensure compliance with data protection regulations.</li>
                        </ul>
                        
                        <i><h4 className="mt-5">Benefits</h4></i>
                        <ul className="list-unstyled">
                            <li className="mt-3 about-lines"><b className="feature-heading">Convenience:</b> Say goodbye to the hassle of
                             maintaining physical copies of mark sheets. With EduFileBridge, accessing academic records is as simple as 
                             logging in to your account.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">Accessibility:</b> Our platform ensures universal access to 
                            academic records, allowing users to retrieve mark sheets whenever they need them, regardless of their location or
                             device.</li>
                            <li className="mt-1 about-lines"><b className="feature-heading">Efficiency:</b> By digitizing mark sheets and 
                            centralizing their storage, EduFileBridge streamlines the process of managing academic records, saving time 
                            and resources for both individuals and institutions.</li>
                        </ul>
                        
                        <i><h4 className="mt-5">Get Started</h4></i>
                        <p className="mt-3 about-lines">Join EduFileBridge today and experience the convenience and security of managing 
                        academic mark sheets online. Sign up now to take advantage of our user-friendly platform and unlock the full 
                        potential of your academic records.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
