import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Chip, Divider, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PersonIcon from '@mui/icons-material/Person';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

import "./style.css";

type TypeRoomAction = {
  guests: {
    adult: Array<string> | undefined,
    children: Array<string> | undefined
  }
};

const RoomAction: React.FC<TypeRoomAction> = (props: TypeRoomAction) => {

  const [expanded, setExpanded] = useState(true);

  return (
    <div className="room-action-container">
      <Accordion className='room-action-box' expanded={expanded}>
        <AccordionSummary
        className='pl-10px'
          expandIcon={<ExpandMoreIcon onClick={() => setExpanded(!expanded)} />}
        >
          <Button variant="text" className='p-0'>
            <EditLocationAltIcon fontSize="small" />
            <Typography
              className='ml-5px'
              component="div"
              variant="body2"
            >
              Modify
            </Typography>
          </Button>
          <Button variant="text">
            <MonetizationOnOutlinedIcon fontSize="small" />
            <Typography
              className='ml-5px'
              component="div"
              variant="body2"
            >
              Make Payment
            </Typography>
          </Button>
        </AccordionSummary>
        <Divider className='divider' />
        {props.guests &&
          <AccordionDetails>
            <Typography
              className="mb-20px"
              component="div"
              variant="h6"
            >
              Guests in this room
            </Typography>
            {
              props.guests.adult && props.guests.adult.map((adult) =>
                <Chip className='mr-5px' color="primary"
                  icon={<PersonIcon />}
                  label={adult}
                  variant="outlined"
                />
              )
            }
            {
              props.guests.children && props.guests.children.map((child) =>
                <Chip className='mr-5px' color="primary"
                  icon={<ChildCareIcon />}
                  label={child}
                  variant="outlined"
                />
              )
            }
          </AccordionDetails>
        }
        <Divider className='divider' />
      </Accordion>
    </div>
  )
};

export default RoomAction;
