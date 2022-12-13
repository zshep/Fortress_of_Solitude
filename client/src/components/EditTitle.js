// import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { Modal } from "react-bulma-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { EDIT_JOB} from '../utils/actions' 




// function EditTitle({ postId }) {
//   const [isActive, setState] = useState(false);
//   const [EditTilte, { error }] = useMutation(EDIT_JOB);
//   const handleClick = () => {
//     setState(!isActive);
//   };



//   const changeTitle = async () => {
//     const jobData = {
//       _id: postId,
//       //title: title,
//     };
//     try {
//       console.log(jobData);
//       // const { data } = await EditTitle({
//       //   variables: { jobData },
//       // });
//       // if (!data) {
//       //   throw new Error("No data returned");
//       // }
//     } catch (error) {
//       throw new Error("Failed to change the title.");
//     }
//   };

//   const active = isActive ? "is-active" : "";
//   return (
    
//     <div className="App">
//     <FontAwesomeIcon icon="fa-solid fa-pen-to-square" onClick={handleClick}  />
    

//     <div className={`modal ${active}`}>
//       <div className="modal-background" />
//       <div className="modal-card">
//         <header className="modal-card-head">
//           <p className="modal-card-title">Enter new post title</p>
//           <button
//             onClick={handleClick}
//             className="delete"
//             aria-label="close"
//           />
//         </header>
//         <section className="modal-card-body">
//           <div className="field">
//             <div className="control">
//               <input
//                 className="input"
//                 type="text"
//                 placeholder="e.g New Title"
//               />
//             </div>
//           </div>
//         </section>
//         <footer className="modal-card-foot">
//           <button className="button is-success">Save changes</button>
//           <button onClick={changeTitle} className="button">
//             Cancel
//           </button>
//         </footer>
//       </div>
//     </div>

    
//   </div>
//   );
// }

// export default EditTitle;
