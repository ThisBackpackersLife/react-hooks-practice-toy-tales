import React, { useState } from "react";

function ToyForm({ submitNewToy }) {

  const [ addToyName, setAddToyName ] = useState( "" )
  const [ addToyImage, setAddToyImage ] = useState( "" )

  const changeSetName = e => {
    setAddToyName( e.target.value )
  }

  const changeSetImage = e => {
    setAddToyImage( e.target.value )
  }

  const newToy = {
    name: addToyName,
    image: addToyImage,
    likes: 0
  }

  return (
    <div className="container">
      <form 
        className="add-toy-form"
        onSubmit={ e => submitNewToy( e, newToy ) }
      >
        <h3>Create a toy!</h3>
        <input
          type="text"
          value={ addToyName }
          onChange={ changeSetName }
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          value={ addToyImage }
          onChange={ changeSetImage }
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;































// import React, { useState } from "react";

// function ToyForm({ newToyFormSubmit }) {

//   const [ newToyName, setNewToyName ] = useState( '' )
//   const [ newToyImage, setNewToyImage ] = useState( '' )

//   const addNewToyName = event => {
//     setNewToyName( event.target.value )
//   }

//   const addNewToyImage = event => {
//     setNewToyImage( event.target.value )
//   }

//   const newToy = {
//     image: newToyImage,
//     likes: 0
//   }


//   return (
//     <div className="container">
//       <form className="add-toy-form" onSubmit={ event => newToyFormSubmit( event, newToy ) }>
//         <h3>Create a toy!</h3>
//         <input
//           type="text"
//           name="name"
//           onChange={ addNewToyName }
//           value={ newToyName }
//           placeholder="Enter a toy's name..."
//           className="input-text"
//           required
//         />
//         <br />
//         <input
//           type="text"
//           name="image"
//           onChange={ addNewToyImage }
//           value={ newToyImage }
//           placeholder="Enter a toy's image URL..."
//           className="input-text"
//           required
//         />
//         <br />
//         <input
//           type="submit"
//           name="submit"
//           value="Create New Toy"
//           className="submit"
//         />
//       </form>
//     </div>
//   );
// }

// export default ToyForm;



// import React from "react";

// function ToyForm() {
//   return (
//     <div className="container">
//       <form className="add-toy-form">
//         <h3>Create a toy!</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter a toy's name..."
//           className="input-text"
//         />
//         <br />
//         <input
//           type="text"
//           name="image"
//           placeholder="Enter a toy's image URL..."
//           className="input-text"
//         />
//         <br />
//         <input
//           type="submit"
//           name="submit"
//           value="Create New Toy"
//           className="submit"
//         />
//       </form>
//     </div>
//   );
// }

// export default ToyForm;