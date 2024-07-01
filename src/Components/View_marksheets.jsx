import React, { useState } from 'react';

const View_marksheets = () => {
    const [educationType, setEducationType] = useState('Select Education Type');
    const [studentId, setStudentId] = useState('');

    const handleEducationType = (type) => {
        setEducationType(type);
    };

    const validate = (field) => {
        // Add your validation logic here
    };

    return (
        <div className="container-fluid px-1 mx-auto view-body">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-10 col-lg-10 col-md-9 col-11 text-center">
                    <h3>Find Student Marksheet</h3>
                    <p className="blue-text">
                        Find Student Marksheet Using<br />
                        Education Type and Student ID
                    </p>
                    <div className="card">
                        <form className="form-card">
                            <div className="row justify-content-between text-left find-form">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Education Type
                                        <span className="text-danger"> *</span>
                                    </label>
                                    <div className="dropdown">
                                        <button 
                                            className="btn w-100 find-dropdown text-start" 
                                            type="button" 
                                            id="dropdownMenu2" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            {educationType}
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("1-10")}>1-10</button></li>
                                            <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("11-12")}>11-12</button></li>
                                            <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("Bachelor")}>Bachelor</button></li>
                                            <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("Master")}>Master</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Student ID
                                        <span className="text-danger"> *</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="studentId" 
                                        name="studentId" 
                                        placeholder="Enter Student ID" 
                                        value={studentId}
                                        onBlur={() => validate(1)}
                                        onChange={(e) => setStudentId(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="form-group col-sm-6">
                                    <button type="submit" className="btn-block btn-primary">Find</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View_marksheets;
