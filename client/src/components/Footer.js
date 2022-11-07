import React from "react";
import "./Footer.css";

const Footer = ({ removeAll, deleteDoneTasks, showDoneTasks }) => {
  return (
    <div className="footer">
      <button className="deleteAll" onClick={removeAll}>
        Delete All
      </button>
      <button className="deleteDone" onClick={deleteDoneTasks}>
        Delete Done
      </button>
      <button className="filterTodos" onClick={showDoneTasks}>
        Filter
      </button>
    </div>
  );
};
export default Footer;
