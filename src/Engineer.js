import * as React from 'react';
import AppForm from './modules/views/AppForm';
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import Typography from './modules/components/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (

    
    <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
    color: "white",
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#A84860'
      : '#A84860',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: 'rosewood',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
   
    <AppAppBar />
    <div style={{marginTop: "-40px", marginBottom: "80px"}}>
    <AppForm sm={{ width: 850, height: 800 }} align="center" >
    <br/> <br/> 
    <Typography variant="h2" gutterBottom marked="center" align="center">
   Engineering Experience     
    </Typography>
    <br/> <br/> 
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary id="panel1d-header">
          <Typography>Web Developer/UI Designer @ Jake for Congress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Increased the web traffic view counts by 420% average per day by refactoring components and writing customized code for the congressional candidate’s website to meet the stakeholders’ needs (https://jake4congress.com/)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Co-founder @ Automation Nation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          § Co-founded Automation Nation to end manual, repetitive tasks in the workplace through creative, automation
solutions, and to provide meaningful work experience for fellow students in automation technology
<br/> § Customized automation solutions and programmed in Python and VBA for clients based on their organizational
needs which reduced 64 manual labor hours on average
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Front-end Developer @ Family Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          § Programmed the React web application that serves as the frontend and modified the NodeJS framework-based backend to the platform which provides offering genealogical records, education, and software to over 207 million total annual visitors and 16,000 registered users
<br/>§ Upgraded the original Node.js written front-end to React web application using React Hooks, Router, Internalization which will increase the performance by 10% and increased the website traffic by 15%
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Full Stack Developer @ Express Evaluation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          § Developed the API that serves as the backend to the platform and wrote Azure Functions in C# utilizing the .Net Core framework to perform various backend processes that holds the HR directory and the survey data from 20+ different companies
          <br/>§ Programmed the React web application that serves as the frontend for the platform which allows clients to perform auto-generated evaluation surveys for the entire organization

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>XR Research Engineer @ BYU Information Systems Department</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          § Built augmented reality apps on Unity using C#, and performed AR app QA tests with Microsoft HoloLens 2
<br/>§ Launched a 360-degree virtual reality-based tour of BYU’s 665,000 sq. ft. library which will increase university donations and aid in marketing efforts (http://hbll.gaskination.com/)
          </Typography>
        </AccordionDetails>

      </Accordion>
      <br/> <br/> 
      </AppForm>
   < AppFooter/>

   </div>
</>
  );
}

