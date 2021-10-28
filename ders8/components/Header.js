import React from "react";
import cw from "../assets/cw_logo.png";
const Header = React.memo( ({img}) => { //memo sayesine header comp render olmuyor, (1. yazım yöntemi)
  console.log("Rendering: Header Comp!");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="CW_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
});
export default Header;

///////////////////////////////////////

// const Header = ({img}) => {
//     console.log("Rendering: Header Comp!");
//     return (
//       <div className="header">
//         <img
//           src={img ? img : cw}
//           alt="CW_logo"
//           style={{ margin: "1rem", maxHeight: "200px" }}
//         />
//       </div>
//     );
//   };
//   export default React.memo(Header); //2. yazım şekli

////////////////////////////////////////

// import React, {memo} from "react";

//   const Header = ({img}) => {
//     console.log("Rendering: Header Comp!");
//     return (
//       <div className="header">
//         <img
//           src={img ? img : cw}
//           alt="CW_logo"
//           style={{ margin: "1rem", maxHeight: "200px" }}
//         />
//       </div>
//     );
//   };
//   export default memo(Header); //3.yazım şekli