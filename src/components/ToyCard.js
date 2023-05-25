import React from "react";

function ToyCard({ toy, deleteToy, increaseToyLikes }) {

  let { id } = toy

  return (
    <div className="card">
      <h2>{ toy.name }</h2>
      <img
        src={ toy.image }
        alt={ toy.name }
        className="toy-avatar"
      />
      <p>{ toy.likes } Likes </p>
      <button 
        className="like-btn"
        onClick={ () => increaseToyLikes( toy ) }
        >Like {"<3"}
      </button>
      <button 
        className="del-btn"
        onClick={ () => deleteToy( id ) }
        >Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
































// import React from "react";

// function ToyCard({ toy, deleteToy, increaseToyLikes }) {

//   let { id } = toy

//   return (
//     <div className="card">
//       <h2>{ toy.name }</h2>
//       <img
//         src={ toy.image }
//         alt={ toy.name }
//         className="toy-avatar"
//       />
//       <p>{ toy.likes } Likes </p>
//       <button 
//         className="like-btn"
//         onClick={ () => increaseToyLikes( id ) }
//         >Like {"<3"}
//       </button>
//       <button 
//         className="del-btn"
//         onClick={ () => deleteToy( id ) }
//         >Donate to GoodWill
//       </button>
//     </div>
//   );
// }

// export default ToyCard;



// import React from "react";

// function ToyCard() {
//   return (
//     <div className="card">
//       <h2>{"" /* Toy's Name */}</h2>
//       <img
//         src={"" /* Toy's Image */}
//         alt={"" /* Toy's Name */}
//         className="toy-avatar"
//       />
//       <p>{"" /* Toy's Likes */} Likes </p>
//       <button className="like-btn">Like {"<3"}</button>
//       <button className="del-btn">Donate to GoodWill</button>
//     </div>
//   );
// }

// export default ToyCard;