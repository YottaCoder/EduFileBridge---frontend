import React, { useState } from "react";

const View_marksheets = () => {

    const [academicLevel, setacademicLevel] = useState("Select Ones");

    const handleacademicLevel = (option) => {
        setacademicLevel(option)
    }


    return (
        <div className="container-fluid save-page">
            <div className="row justify-content-center">
                <div className="col-8 save-form mt-5 text-white">
                    <div className="form-heading">
                        <h2>View Marksheets</h2>
                    </div>
                    <div className="d-flex flex-wrap align-items-center save-marksheet-form">
                    <div className=" col-12 col-md-3 mb-3">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        {academicLevel}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><button className="dropdown-item" type="button" onClick={() => handleacademicLevel("1-10")}>Standard 1-10</button></li>
                                        <li><button className="dropdown-item" type="button" onClick={() => handleacademicLevel("11-12")}>Standard 11-12</button></li>
                                        <li><button className="dropdown-item" type="button" onClick={() => handleacademicLevel("Bachelor")}>Bachelor</button></li>
                                        <li><button className="dropdown-item" type="button" onClick={() => handleacademicLevel("Master")}>Master</button></li>
                                    </ul>
                                </div>
                            </div>
                        <div className="col-12 col-md-6 mb-3 find-marksheet">
                            <input type="text" className="form-control form-control-lg" placeholder="Enter Student id" />
                        </div>
                        <div className="col-12 col-md-2 mb-3">
                            <button type="button" className="btn btn-lg standard-btn w-100 w-100">Find...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View_marksheets;
