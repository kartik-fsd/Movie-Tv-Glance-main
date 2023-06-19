import React from "react";
import Badge from '@mui/material/Badge';
import { img_300, unavailable } from "../../config/config";
import "./singleComponent.css";
import TModal from "../../Modal/modal";

const SingleComponent = (props) => {
  return (
    <TModal media_type={props.media_type} id={props.id}>
      <Badge
        badgeContent={props.vote_average}
        color={props.vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={props.poster ? `${img_300}/${props.poster}` : unavailable}
        alt={props.title}
      />
      <b className="title">{props.title}</b>
      <div className="info">
        <span>{props.media_type === "tv" ? "Tv Series" : "Movies"}</span>
        <span>{props.date}</span>
      </div>
    </TModal>
  );
};

export default SingleComponent;
