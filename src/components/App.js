import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const baseUrl = "http://localhost:3001/"
const toysUrl = baseUrl + "toys/"

function App() {
  
  const [ allToys, setAllToys ] = useState( [] )
  const [showForm, setShowForm] = useState(false);
  
  useEffect( fetchToys, [] )

  function fetchToys() {
    fetch( toysUrl )
    .then( res => res.json())
    .then( toysData => setAllToys( toysData ))
  }

  function submitNewToy( e, newToy ) {
    e.preventDefault()
    
    const postRequest = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify( newToy )
    }
    fetch( toysUrl, postRequest )
    .then( res => res.json())
    .then( newToyData => setAllToys( [...allToys, newToyData ]))
  }

  function deleteToy( id ) {
    fetch( toysUrl + id, {
      method: "DELETE"
    })
    .then( res => res.json())
    .then( fetchToys );
  }

  function increaseToyLikes( toy ) {
    
    const patchRequest = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ likes: toy.likes + 1 })
    }
    fetch( toysUrl + toy.id, patchRequest )
    .then( res => res.json())
    .then( updateToy )
  }

  function updateToy( updatedToy ) {
    const updatedToys = allToys.map( toy => 
      toy.id === updatedToy.id ? updatedToy : toy  
    )
    setAllToys( updatedToys )
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm submitNewToy={ submitNewToy } /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        allToys={ allToys }
        deleteToy={ deleteToy }
        increaseToyLikes={ increaseToyLikes }
      />
    </>
  );
}

export default App;

































// import React, { useState, useEffect } from "react";

// import Header from "./Header";
// import ToyForm from "./ToyForm";
// import ToyContainer from "./ToyContainer";

// const baseUrl = "http://localhost:3001"
// const toysUrl = baseUrl + "/toys/"

// function App() {
//   const [showForm, setShowForm] = useState(false);
//   const [ allToys, setAllToys ] = useState( [] ) 
  
//   useEffect( fetchToys, [])

//   function fetchToys() {
//     fetch( toysUrl )
//     .then( resp => resp.json())
//     .then( toysData => setAllToys(toysData) )
//   }

//   function clickAddAToy() {
//     setShowForm((showForm) => !showForm);
//   }

//   function newToyFormSubmit(event, newToy) {
//     event.preventDefault()
    
//     const postRequest = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accepts": "application/json"
//       },
//       body: JSON.stringify( newToy )
//     }
//     fetch( toysUrl, postRequest )
//     .then( resp => resp.json())
//     .then( newToyData => setAllToys( [ ...allToys, newToyData ] ) )
//   }

//   function increaseToyLikes( toy ) {
    
//     const patchRequest = {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Accepts": "application/json"
//       },
//       body: JSON.stringify({ likes: toy.likes + 1 })
//     }
//     fetch( toysUrl + toy, patchRequest)
//     .then( res => res.json())
//     .then( updateToy )
//   }

//   function updateToy( id ) {
//     const updatedToys = allToys.map( toy => 
//       toy.id === updateToy.id ? updateToy : toy
//     );
//     setAllToys(updatedToys);
//   }

//   function deleteToy( id ) {
//    fetch( toysUrl + id, {
//      method: "DELETE"
//    }) 
//    .then( res => res.json())
//    .then( fetchToys );
//   }

  

//   return (
//     <>
//       <Header 

//       />
//       {showForm ? <ToyForm newToyFormSubmit={ newToyFormSubmit } /> : null}
//       <div className="buttonContainer">
//         <button onClick={clickAddAToy}>Add a Toy</button>
//       </div>
//       <ToyContainer 
//         allToys={ allToys }
//         deleteToy={ deleteToy }
//         increaseToyLikes={ increaseToyLikes }
//       />
//     </>
//   );
// }

// export default App;
// //clickFormSubmit={ clickFormSubmit }




// import React, { useState } from "react";

// import Header from "./Header";
// import ToyForm from "./ToyForm";
// import ToyContainer from "./ToyContainer";

// function App() {
//   const [showForm, setShowForm] = useState(false);

//   function handleClick() {
//     setShowForm((showForm) => !showForm);
//   }

//   return (
//     <>
//       <Header />
//       {showForm ? <ToyForm /> : null}
//       <div className="buttonContainer">
//         <button onClick={handleClick}>Add a Toy</button>
//       </div>
//       <ToyContainer />
//     </>
//   );
// }

// export default App;