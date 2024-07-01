import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🛡️',
      title: 'Save Marksheet',
      description: "Enter the student's details and marksheet file into the form to save a marksheet. Upon submission, a unique access code is generated on your profile, which you should keep safe for future reference. This ensures that each marksheet is securely saved and easily identifiable.",
    },
    {
      icon: '📝',
      title: 'Anyone Access',
      description: "Accessing a saved marksheet is straightforward. All you need is the unique code generated at the time of saving the marksheet. Enter this code into the retrieval form, and you will be able to view the student's details and their marks. This feature ensures that marksheets are accessible anytime and from anywhere, provided you have the correct code, making the system both secure and convenient",
    }
  ];

  return (
    <div className="services container my-5">
      <div className="row justify-content-center">
      <header className="App-header">
        <h1>Our Services</h1>
      </header>
        {services.map((service, index) => (
          <div key={index} className="col-md-5 col-lg-4 m-3 p-4 text-center border rounded shadow-sm">
            <div className="mb-3" style={{ fontSize: '4rem' }}>{service.icon}</div>
            <h3 className="mb-3">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
