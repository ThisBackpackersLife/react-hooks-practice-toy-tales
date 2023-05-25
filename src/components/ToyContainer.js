import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ allToys, deleteToy, increaseToyLikes }) {

  const renderToys = allToys.map( toy => 
      <ToyCard 
        key={ toy.id }
        toy={ toy }
        deleteToy={ deleteToy }
        increaseToyLikes={ increaseToyLikes }
      />
    )

  return (
    <div 
      id="toy-collection">
      {/* Render the collection of ToyCards */}
      { renderToys }
    </div>
  );
}

export default ToyContainer;































// import React from "react";
// import ToyCard from "./ToyCard";

// function ToyContainer({ allToys, deleteToy, increaseToyLikes }) {

//   const renderToys = allToys.map( toy => 
//       <ToyCard 
//         key={ toy.id }
//         toy={ toy }
//         deleteToy={ deleteToy }
//         increaseToyLikes={ increaseToyLikes }
//       />
//   )

//   return (
//     <div id="toy-collection"
//       >{/* Render the collection of ToyCards */}
//       { renderToys }
//     </div>
//   );
// }

// export default ToyContainer;
// //increaseToyLikes={ increaseToyLikes }


// import React from "react";
// import ToyCard from "./ToyCard";

// function ToyContainer() {
//   return (
//     <div id="toy-collection">{/* Render the collection of ToyCards */}</div>
//   );
// }

// export default ToyContainer;
