import React from 'react';
import { Chip, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

import "./style.css";

type TypeRoomDetail = {
  booked: boolean,
  balance: number,
  description: string,
};

const RoomDetail: React.FC<TypeRoomDetail> = (props: TypeRoomDetail) => {
  return (
    <div className="info-box">
      <Chip color="success"
        icon={<CheckCircleOutlineIcon />}
        label={props.booked ? "Booked" : "Not booked"}
        variant="outlined"
      />
      <Chip color="info"
        icon={<MonetizationOnOutlinedIcon />}
        label={`Balance Due - $${props.balance}`}
        variant="outlined"
      />
      <Typography
        className="room-desc"
        component="div"
        variant="body2"
        color="text.secondary"
      >
        {props.description}
      </Typography>
    </div>
  )
};

export default RoomDetail;
