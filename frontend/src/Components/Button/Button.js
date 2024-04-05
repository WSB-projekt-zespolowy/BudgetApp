import React from "react";

function Button({ name, icon, onClick, color }) {
  return (
    <button
      style={{ background: color }}
      onClick={onClick}
    >
      {icon}
      {name}
    </button>
  );
}

export default Button;
