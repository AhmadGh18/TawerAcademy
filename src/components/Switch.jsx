import React from "react";
import { useStateContext } from "./context/Contextprovider";

const Switch = () => {
  const { isArb, setIsArb } = useStateContext();

  return (
    <div>
      <select
        value={isArb ? "ar" : "en"}
        onChange={(e) => setIsArb(e.target.value === "ar")}
        className="border-none outline-none focus:ring-0"
      >
        <option value="en">eng</option>
        <option value="ar">عربي</option>
      </select>
    </div>
  );
};

export default Switch;
