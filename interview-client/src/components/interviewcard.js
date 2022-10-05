import React from "react";
import './card.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AccordionActions } from "@mui/material";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@mui/material';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';




const Interviewcard = (props) => {
    console.log(props);


    return (
        <Accordion className="card">
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fill: '#0072ea' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header">

                <Typography><h3 className="card__title">Interview@{Date(props.start_time)}</h3></Typography>
            </AccordionSummary>
            <AccordionDetails className="card__body">
                <Typography className="card__description">
                    <p>Start time: {Date(props.start_time)}</p>
                    <p>End time: {Date(props.end_time)} </p>
                    <p> Participants:   </p>
                    <ol>
                    {
                        props && props.users.map((email)=>
                            <li>{email}</li>
                        )
                    }
                    </ol>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );

};
export default Interviewcard;