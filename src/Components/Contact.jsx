import React, { useState } from "react";

const Contact = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        // Implement your submit logic here

    };

    const handleClear = () => {
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    return(
        <div className="container-fluid save-page">
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 about-content mt-1 mb-2">
                    <div className="feedback-heading text-center">
                        <h2>Feedback</h2>
                    </div>

                    <div className="divider">
                        <hr />
                    </div>

                    <div className="mb-5">
                        <p className="Feedback-tip">* Give your feedback for upgrade my project.</p>
                    </div>

                    <form>
                        <div className="row mb-3">
                            <div className="col-12 col-md-6 mb-3">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter Your Name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <input 
                                    type="email" 
                                    className="form-control form-control-lg" 
                                    placeholder="Enter Your Email Address" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <textarea 
                                    className="form-control form-control-lg" 
                                    rows="5" 
                                    placeholder="Enter Your Message" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <button type="button" className="btn btn-lg btn-primary me-3 mb-3 mb-md-3" onClick={handleSubmit}>Send</button>
                                <button type="button" className="btn btn-lg btn-primary me-3 mb-3 mb-md-3" onClick={handleClear}>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
