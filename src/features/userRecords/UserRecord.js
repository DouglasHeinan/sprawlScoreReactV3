import React from 'react'

const UserRecord = () => {
  return (
    <div>UserRecord</div>
  )
}

export default UserRecord



// import { useSelector } from "react-redux";
// import { selectUserById } from "./usersApiSlice";

// const User = ({ userId }) => {
//   const user = useSelector(state => selectUserById(state, userId));

//   const navigate = useNavigate();

//   if (user) {
//     const handleEdit = () => navigate(`/dash/users/${userId}`)

//     // const userRolesString = user.roles.toString().replaceAll(",", ", ")

//     const cellStatus = user.active ? " " : "table_cell--inactive"

//     return (
//       <tr className="table_row user">
//         <td className={`table_cell ${cellStatus}`}>{user.username}</td>
//         <td className={`table_cell ${cellStatus}`}>
//           <button
//             className="icon-button table-button"
//             onClick={handleEdit}
//           >
//             <FontAwesomeIcon icon={faPenToSquare} />
//           </button>
//         </td>
//       </tr>
//     )

//   } else return null
// }


// export default User