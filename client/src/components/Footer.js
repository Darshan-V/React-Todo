import React from "react";

const Footer = ({ deleteAll, deleteDoneTasks }) => {
  return (
    <div className="footer">
      <button className="deleteAll" onClick={deleteAll}>
        Delete All
      </button>
      <button className="deleteDone" onClick={deleteDoneTasks}>
        Delete Done
      </button>
    </div>
  );
};
export default Footer;
