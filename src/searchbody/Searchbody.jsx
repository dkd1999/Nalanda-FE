import React, { useState } from "react";

const SearchBody = () => {
  const [Input, setInput] = useState("what");
  return (
    <div>
      Search for items
      <div>
        <input type="text" value={Input} />
        <input type="button" value="Search" />
        {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="" /> */}
      </div>
      <div></div>
    </div>
  );
};

export default SearchBody