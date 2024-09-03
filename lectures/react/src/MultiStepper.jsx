import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ['Personal Info', 'Academic', 'Profession'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Typography variant="h4" gutterBottom>
        Step {activeStep + 1}: {steps[activeStep]}
      </Typography>
      <Box mt={2}>
        {activeStep === 0 && (
          <div>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField label="Phone" variant="outlined" fullWidth />
            <TextField label="Address" variant="outlined" fullWidth />
            <TextField label="City" variant="outlined" fullWidth />
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <TextField label="Degree" variant="outlined" fullWidth />
            <TextField label="Institution" variant="outlined" fullWidth />
            <TextField label="Start Year" variant="outlined" fullWidth />
            <TextField label="End Year" variant="outlined" fullWidth />
            <TextField label="Specialization" variant="outlined" fullWidth />
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <TextField label="Job Title" variant="outlined" fullWidth />
            <TextField label="Company" variant="outlined" fullWidth />
            <TextField label="Job Description" variant="outlined" fullWidth />
            <TextField label="Start Date" variant="outlined" fullWidth />
            <TextField label="End Date" variant="outlined" fullWidth />
          </div>
        )}
      </Box>
      {activeStep < steps.length - 1 && (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            Next
          </Button>
        </Box>
      )}
      {activeStep === steps.length - 1 && (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            Finish
          </Button>
        </Box>
      )}
    </Box>
  );
}
