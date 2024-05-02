import React, { useState } from 'react';

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [personalData, setPersonalData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    address: '', 
    city: '', 
    state: '', 
    country: '', 
    zipcode: '' 
  });
  const [academicDetails, setAcademicDetails] = useState({ 
    degree: '', 
    institution: '', 
    startYear: '', 
    endYear: '', 
    specialization: '', 
    gpa: '', 
    awards: '', 
    extracurriculars: '' 
  });
  const [profession, setProfession] = useState({ 
    jobTitle: '', 
    company: '', 
    jobDescription: '', 
    startDate: '', 
    endDate: '', 
    responsibilities: '', 
    achievements: '', 
    references: '' 
  });

  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({ ...personalData, [name]: value });
  };

  const handleAcademicDetailsChange = (e) => {
    const { name, value } = e.target;
    setAcademicDetails({ ...academicDetails, [name]: value });
  };

  const handleProfessionChange = (e) => {
    const { name, value } = e.target;
    setProfession({ ...profession, [name]: value });
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Personal Data</h2>
            <input type="text" name="name" value={personalData.name} onChange={handlePersonalDataChange} placeholder="Name" />
            <input type="email" name="email" value={personalData.email} onChange={handlePersonalDataChange} placeholder="Email" />
            <input type="text" name="phone" value={personalData.phone} onChange={handlePersonalDataChange} placeholder="Phone" />
            <input type="text" name="address" value={personalData.address} onChange={handlePersonalDataChange} placeholder="Address" />
            <input type="text" name="city" value={personalData.city} onChange={handlePersonalDataChange} placeholder="City" />
            <input type="text" name="state" value={personalData.state} onChange={handlePersonalDataChange} placeholder="State" />
            <input type="text" name="country" value={personalData.country} onChange={handlePersonalDataChange} placeholder="Country" />
            <input type="text" name="zipcode" value={personalData.zipcode} onChange={handlePersonalDataChange} placeholder="Zip Code" />
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Academic Details</h2>
            <input type="text" name="degree" value={academicDetails.degree} onChange={handleAcademicDetailsChange} placeholder="Degree" />
            <input type="text" name="institution" value={academicDetails.institution} onChange={handleAcademicDetailsChange} placeholder="Institution" />
            <input type="text" name="startYear" value={academicDetails.startYear} onChange={handleAcademicDetailsChange} placeholder="Start Year" />
            <input type="text" name="endYear" value={academicDetails.endYear} onChange={handleAcademicDetailsChange} placeholder="End Year" />
            <input type="text" name="specialization" value={academicDetails.specialization} onChange={handleAcademicDetailsChange} placeholder="Specialization" />
            <input type="text" name="gpa" value={academicDetails.gpa} onChange={handleAcademicDetailsChange} placeholder="GPA" />
            <input type="text" name="awards" value={academicDetails.awards} onChange={handleAcademicDetailsChange} placeholder="Awards" />
            <input type="text" name="extracurriculars" value={academicDetails.extracurriculars} onChange={handleAcademicDetailsChange} placeholder="Extracurriculars" />
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Profession</h2>
            <input type="text" name="jobTitle" value={profession.jobTitle} onChange={handleProfessionChange} placeholder="Job Title" />
            <input type="text" name="company" value={profession.company} onChange={handleProfessionChange} placeholder="Company" />
            <input type="text" name="jobDescription" value={profession.jobDescription} onChange={handleProfessionChange} placeholder="Job Description" />
            <input type="text" name="startDate" value={profession.startDate} onChange={handleProfessionChange} placeholder="Start Date" />
            <input type="text" name="endDate" value={profession.endDate} onChange={handleProfessionChange} placeholder="End Date" />
            <input type="text" name="responsibilities" value={profession.responsibilities} onChange={handleProfessionChange} placeholder="Responsibilities" />
            <input type="text" name="achievements" value={profession.achievements} onChange={handleProfessionChange} placeholder="Achievements" />
            <input type="text" name="references" value={profession.references} onChange={handleProfessionChange} placeholder="References" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
      <div>
        {step !== 1 && (
          <button onClick={prevStep}>Previous</button>
        )}
        {step !== 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Stepper;


