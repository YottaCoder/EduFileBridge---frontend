import React, { useState } from "react";
import SchoolDropdowns from "../DropDownComponents/SchoolDropdowns";
import CollegeDropdowns from "../DropDownComponents/CollegeDropdowns";

const Save_marksheet = () => {
    //School level dropdown lists
    const [educationType, setEducationType] = useState("Select Education Type");
    const [schoolGrade, setSchoolGrade] = useState("Select Standard Range");
    const [schoolStandard, setSchoolStandard] = useState("Select Standard");
    const [stream, setStream] = useState("Select Stream");
    const [streamStandard, setStreamStandard] = useState("Select Standard");
    const [diplomaStream, setDiplomaStream] = useState("Select Semester");


    const [fileSelected, setFileSelected] = useState(false); 
    const [fileSelectedForHighSchool, setfileSelectedForHighSchool] = useState(false);
    const [fileSelectedForDiploma, setfileSelectedForDiploma] = useState(false); 

    const handleEducationType = (option) => {
        setEducationType(option);
        setSchoolGrade("Select Standard Range");
        setSchoolStandard("Select Standard");
        setStream("Select Stream");
        setStreamStandard("Select Standard");
        setDiplomaStream("Select Semester"); 
        setdegreeType("Select Degree Type");
        setbachelorDegrees("Select Bachelor Degree");
        setMasterDegrees("Select Master Degree");
        setsemForBachelor("Select Semester");
        setsemForMaster("Select Semester");
        setFileSelected(false); 
        setfileSelectedForHighSchool(false);
        setfileSelectedForDiploma(false);
        setfileSelectedForBachelor(false);
    };

    const handleSchoolGrade = (grade) => {
        setSchoolGrade(grade);
        setSchoolStandard("Select Standard");
        setStream("Select Stream"); 
        setStreamStandard("Select Standard");
        setDiplomaStream("Select Semester"); 
        setFileSelected(false); 
        setfileSelectedForHighSchool(false);
        setfileSelectedForDiploma(false);
    };

    const handleStream = (stream) => {
        setStream(stream);
        setStreamStandard("Select Standard");
        setDiplomaStream("Select Semester"); 
        setFileSelected(false);
        setfileSelectedForHighSchool(false);
        setfileSelectedForDiploma(false);
    };

    const handleStreamStandard = (streamStandard) => {
        setStreamStandard(streamStandard);
        setFileSelected(false);
        setfileSelectedForDiploma(false);
        setfileSelectedForHighSchool(true);
    };

    const handleDiplomaStream = (sem) => {
        setDiplomaStream(sem);
        setStreamStandard("Select Standard");
        setFileSelected(false);
        setfileSelectedForHighSchool(false);
        setfileSelectedForDiploma(true);
    }

    const handleSchoolStandard = (standard) => {
        setSchoolStandard(standard);
        setFileSelected(true); 
        setfileSelectedForHighSchool(false);
        setfileSelectedForDiploma(false);
    }

    //College level Dropdown lists
    const [degreeType, setdegreeType] = useState("Select Degree Type");
    const [bachelorDegrees, setbachelorDegrees] = useState("Select Bachelor Degree");
    const [semForBachelor, setsemForBachelor] = useState("Select Semester");
    const [masterDegrees, setMasterDegrees] = useState("Select Master Degree");
    const [semForMaster, setsemForMaster] = useState("Select Semester");

    //save button for College
    const [fileSelectedForBachelor, setfileSelectedForBachelor] = useState(false);
    const [fileSelectedForMaster, setfileSelectedForMaster] = useState(false);

    const handledegreeType = (option) =>{
        setdegreeType(option);
        setbachelorDegrees("Select Bachelor Degree");
        setMasterDegrees("Select Master Degree");
        setfileSelectedForBachelor(false);
    }

    const handlebachelorDegree = (option) =>{
        setbachelorDegrees(option);
        setMasterDegrees("Select Master Degree");
        setsemForBachelor("Select Semester");
        setfileSelectedForBachelor(false);
    }

    const handleMasterDegree = (option) => {
        setMasterDegrees(option);
        setbachelorDegrees("Select Bachelor Degree");
        setsemForMaster("Select Semester");
        setfileSelectedForBachelor(false);
    }

    const handleSemBachelor = (option) => {
        setsemForBachelor(option);
        setMasterDegrees("Select Master Degree");
        setfileSelectedForBachelor(true);
    }

    const handleSemMaster = (option) => {
        setsemForMaster(option);
        setbachelorDegrees("Select Bachelor Degree");
        setfileSelectedForBachelor(true);
    }

    return (
        <div className="container-fluid save-page">
            <div className="row justify-content-center ">
                <div className="col-8 save-form mt-5 text-white">
                    <div className="form-heading">
                        <h2>Save Marksheet</h2>
                    </div>
                    <div className="save-marksheet-form">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        {educationType}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("School")}>School</button></li>
                                        <li><button className="dropdown-item" type="button" onClick={() => handleEducationType("College")}>College</button></li>
                                    </ul>
                                </div>
                            </div>

                            <SchoolDropdowns
                                educationType={educationType}
                                schoolGrade={schoolGrade}
                                schoolStandard={schoolStandard}
                                stream={stream}
                                streamStandard={streamStandard}
                                diplomaStream={diplomaStream}
                                handleSchoolGrade={handleSchoolGrade}
                                handleStream={handleStream}
                                handleStreamStandard={handleStreamStandard}
                                handleDiplomaStream={handleDiplomaStream}
                                handleSchoolStandard={handleSchoolStandard}
                                fileselected={fileSelected}
                                fileSelectedForHighSchool={fileSelectedForHighSchool}
                                fileSelectedForDiploma={fileSelectedForDiploma}
                            />

                            <CollegeDropdowns
                                educationType={educationType}
                                degreeType={degreeType}
                                bachelorDegrees={bachelorDegrees}
                                semForBachelor={semForBachelor}
                                masterDegrees={masterDegrees}
                                semForMaster={semForMaster}

                                fileSelectedForBachelor={fileSelectedForBachelor}

                                handledegreeType={handledegreeType}
                                handlebachelorDegree={handlebachelorDegree}
                                handleSemBachelor={handleSemBachelor}
                                handleMasterDegree={handleMasterDegree}
                                handleSemMaster={handleSemMaster}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save_marksheet;
