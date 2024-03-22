import React from "react";

const Header = () => {
  const headerStyle = {
    background: "#234",
    minHeight: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    padding: " 0",
    margin: "0",
    width: "100%",
  };
  return (
    <div style={headerStyle}>
      <div>Trendify</div>
    </div>
  );
};

export default Header;
