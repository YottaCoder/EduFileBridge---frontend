import React, { useState } from "react";

const CollegeDropdowns = ({
    educationType, 
    degreeType,
    semForBachelor,
    fileSelectedForBachelor,
    bachelorDegrees,
    masterDegrees,
    semForMaster,

    handledegreeType,
    handlebachelorDegree,
    handleSemBachelor,
    handleMasterDegree,
    handleSemMaster
}) => {

    const fileAndSavebtnForBachelor = () => {
        return(
            <>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <input className="form-control form-control-lg select-marksheet-btn" type="file" id="formFile" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button id="degreeSheet" type="button" className="btn standard-btn w-100">Save</button>
                    </div>
                </div>
            </>
        );
    }

    const [searchTerm, setSearchTerm] = useState("");

    const bachelorDegreeOptions = [
        "Bachelor of Arts (BA)",
        "Bachelor of Science (BSc)",
        "Bachelor of Commerce (BCom)",
        "Bachelor of Engineering (BE)",
        "Bachelor of Technology (BTech)",
        "Bachelor of Business Administration (BBA)",
        "Bachelor of Computer Applications (BCA)",
        "Bachelor of Fine Arts (BFA)",
        "Bachelor of Laws (LLB)",
        "Bachelor of Architecture (BArch)",
        "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        "Bachelor of Dental Surgery (BDS)",
        "Bachelor of Pharmacy (BPharm)",
        "Bachelor of Education (BEd)",
        "Bachelor of Music (BMus)",
        "Bachelor of Social Work (BSW)",
        "Bachelor of Veterinary Science & Animal Husbandry (BVSc & AH)",
        "Bachelor of Nursing (BN)",
        "Bachelor of Design (BDes)",
        "Bachelor of Journalism (BJ)",
        "Bachelor of Physical Education (BPEd)",
        "Bachelor of Science in Nursing (BSc Nursing)",
        "Bachelor of Hotel Management (BHM)",
        "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
        "Bachelor of Physiotherapy (BPT)"
    ];

    const masterDegreeOptions = [
        "Master of Arts (MA)",
        "Master of Science (MSc)",
        "Master of Commerce (MCom)",
        "Master of Business Administration (MBA)",
        "Master of Technology (MTech)",
        "Master of Engineering (ME)",
        "Master of Education (MEd)",
        "Master of Fine Arts (MFA)",
        "Master of Social Work (MSW)",
        "Master of Computer Applications (MCA)",
        "Master of Laws (LLM)",
        "Master of Public Health (MPH)",
        "Master of Philosophy (MPhil)",
        "Master of Library and Information Science (MLIS)",
        "Master of Tourism Management (MTM)",
        "Master of Hotel Management (MHM)",
        "Master of Journalism and Mass Communication (MJMC)",
        "Master of Design (MDes)",
        "Master of Pharmacy (MPharm)",
        "Master of Dental Surgery (MDS)",
        "Master of Veterinary Science (MVSc)",
        "Master of Urban Planning (MUP)",
        "Master of Computer Science (MCS)",
        "Master of Fashion Management (MFM)",
        "Master of Financial Management (MFM)",
        "Master of Human Resource Management (MHRM)",
        "Master of International Business (MIB)",
        "Master of Management Studies (MMS)",
        "Master of Public Administration (MPA)",
        "Master of Public Policy (MPP)",
        "Master of Science in Nursing (MSc Nursing)",
        "Master of Surgery (MS)",
        "Master of Chirurgiae (MCh)",
        "Master of Occupational Therapy (MOT)",
        "Master of Physical Education (MPEd)",
        "Master of Planning (MPlan)",
        "Master of Population Studies (MPS)",
        "Master of Retail Management (MRM)",
        "Master of Rural Development (MRD)",
        "Master of Science in Agriculture (MSc Agriculture)",
        "Master of Technology Management (MTM)",
        "Master of Tourism and Travel Management (MTTM)",
        "Master of Urban Design (MUD)",
        "Master of Visual Arts (MVA)"
    ];
    

    const filteredDegrees = bachelorDegreeOptions.filter(degree =>
        degree.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredMasterDegrees = masterDegreeOptions.filter(degree =>
        degree.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {educationType === "College" && (
                <>
                    <div className="col-md-4 mb-3">
                        <div className="dropdown">
                            <button 
                                className="btn dropdown-toggle standard-btn w-100 text-truncate" 
                                type="button" 
                                id="dropdownMenu3" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                                style={{ maxWidth: '100%' }}
                            >
                                {degreeType}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu3">
                                <li><button className="dropdown-item" type="button" onClick={() => handledegreeType("Bachelor")}>Bachelor</button></li>
                                <li><button className="dropdown-item" type="button" onClick={() => handledegreeType("Master")}>Master</button></li>
                            </ul>
                        </div>
                    </div>

                    {degreeType === "Bachelor" && (
                        <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button 
                                    className="btn dropdown-toggle standard-btn w-100 text-truncate" 
                                    type="button" 
                                    id="dropdownMenu4" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    style={{ maxWidth: '100%' }}
                                >
                                    {bachelorDegrees}
                                </button>
                                <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenu4" style={{ maxHeight: '200px', overflowY: 'auto', maxWidth: '295px' }}>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={e => setSearchTerm(e.target.value)}
                                    />
                                    {filteredDegrees.length > 0 ? (
                                        filteredDegrees.map(degree => (
                                            <li key={degree}>
                                                <button className="dropdown-item" type="button" onClick={() => handleMasterDegree(degree)}>{degree}</button>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="dropdown-item">No results found</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}

                    {bachelorDegrees !== "Select Bachelor Degree" && (
                        <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                    {semForBachelor}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                    {[...Array(6)].map((_, index) => (
                                        <li key={index}><button className="dropdown-item" type="button" onClick={() => handleSemBachelor(`Semester ${index + 1}`)}>Semester {index + 1}</button></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {degreeType === "Master" && (
                         <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button 
                                    className="btn dropdown-toggle standard-btn w-100 text-truncate" 
                                    type="button" 
                                    id="dropdownMenu4" 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false"
                                    style={{ maxWidth: '100%' }}
                                >
                                    {masterDegrees}
                                </button>
                                <ul className="dropdown-menu p-3" aria-labelledby="dropdownMenu4" style={{ maxHeight: '200px', overflowY: 'auto', maxWidth: '295px' }}>
                                    <input
                                        type="text"
                                        className="form-control mb-2"
                                        placeholder="Search..."
                                        value={searchTerm}
                                        onChange={e => setSearchTerm(e.target.value)}
                                    />
                                    {filteredMasterDegrees.length > 0 ? (
                                        filteredMasterDegrees.map(degree => (
                                            <li key={degree}>
                                                <button className="dropdown-item" type="button" onClick={() => handleMasterDegree(degree)}>{degree}</button>
                                            </li>
                                        ))
                                    ) : (
                                        <li className="dropdown-item">No results found</li>
                                    )}
                                </ul>
                            </div>
                         </div>
                    )}

                    {masterDegrees !== "Select Master Degree" && (
                        <div className="col-md-4 mb-3">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle standard-btn w-100" type="button" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                    {semForMaster}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu4">
                                    {[...Array(4)].map((_, index) => (
                                        <li key={index}><button className="dropdown-item" type="button" onClick={() => handleSemMaster(`Semester ${index + 1}`)}>Semester {index + 1}</button></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {fileSelectedForBachelor && fileAndSavebtnForBachelor() }
                </>
            )}
        </>
    );
}

export default CollegeDropdowns;
