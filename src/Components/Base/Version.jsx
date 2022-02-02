import React from "react";

const Version = () => {
    let date = new Date();
    let year = date.getFullYear();
  return (
    <div>
      <p className="version">Version:2.0 <span className="bi bi-link-45deg"></span>
      <br /> &copy; {year} Sai Ganesh Achary
      </p>
    </div>
  );
};

export default Version;
