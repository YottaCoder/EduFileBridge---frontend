import React, { useState } from "react";

const SchoolDropdowns = ({ 
    educationType,
    schoolGrade, 
    schoolStandard, 
    stream, 
    streamStandard, 
    diplomaStream, 
    handleSchoolGrade, 
    handleStream, 
    handleStreamStandard, 
    handleDiplomaStream, 
    handleSchoolStandard,
    fileselected,
    fileSelectedForHighSchool,
    fileSelectedForDiploma }) => {
    

    const fileAndSavebtnForDiploma = () => {
        return(
            <>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <input className="form-control form-control-lg select-marksheet-btn" type="file" id="formFile" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="button" className="btn standard-btn w-100">Save</button>
                    </div>
                </div>
            </>
        );
    }

    const fileAndSavebtnForHighSchool = () => {
        return(
            <>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <input className="form-control form-control-lg select-marksheet-btn" type="file" id="formFile" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="button" className="btn standard-btn w-100">Save</button>
                    </div>
                </div>
            </>
        );
    }

    const fileAndSavebtnForLowSchool = () => {
        return(
            <>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <input className="form-control form-control-lg select-marksheet-btn" type="file" id="formFile" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button type="button" className="btn standard-btn w-100">Save</button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {educationType === "School" && (
                <>
                    <div className="col-md-4 mb-3">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false">
                                {schoolGrade}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <li><button className="dropdown-item" type="button" onClick={() => handleSchoolGrade("1-10")}>1-10</button></li>
                                <li><button className="dropdown-item" type="button" onClick={() => handleSchoolGrade("11-12")}>11-12</button></li>
                            </ul>
                        </div>
                    </div>

                    {schoolGrade === "1-10" && (
                        <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                    {schoolStandard}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                    {[...Array(10)].map((_, index) => (
                                        <li key={index}><button className="dropdown-item" type="button" onClick={() => handleSchoolStandard(`Standard ${index + 1}`)}>Standard {index + 1}</button></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {schoolGrade === "11-12" && (
                        <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false">
                                    {stream}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                    <li><button className="dropdown-item" type="button" onClick={() => handleStream("Science")}>Science</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleStream("Commerce")}>Commerce</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleStream("Arts")}>Arts</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={() => handleStream("Diploma")}>Diploma</button></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </>
            )}

            {(stream === "Science" || stream === "Commerce" || stream === "Arts") && (
                <div className="col-md-4 mb-3">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                            {streamStandard}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <li><button className="dropdown-item" type="button" onClick={() => handleStreamStandard("Standard 11")}>Standard 11</button></li>
                            <li><button className="dropdown-item" type="button" onClick={() => handleStreamStandard("Standard 12")}>Standard 12</button></li>
                        </ul>
                    </div>
                </div>
            )}

            {stream === "Diploma" && 
                <div className="col-md-4 mb-3">
                    <div className="dropdown">
                        <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                            {diplomaStream}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                            {[...Array(6)].map((_, index) => (
                                <li key={index}><button className="dropdown-item" type="button" onClick={() => handleDiplomaStream(`Semester ${index + 1}`)}>Semester {index + 1}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            }

            { fileselected && ( fileAndSavebtnForLowSchool() )}
            { fileSelectedForHighSchool && ( fileAndSavebtnForHighSchool() )}
            { fileSelectedForDiploma && ( fileAndSavebtnForDiploma() ) }

        </>
    );
};

export default SchoolDropdowns;