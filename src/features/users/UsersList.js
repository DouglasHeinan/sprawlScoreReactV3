import { useGetUsersQuery } from "./userApiSlice";
import User from "./Users";


const Users = () => {

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery();

    let content;

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className={error ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    }


    if (isSuccess) {

        const { ids } = users;

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null

        content = (
            <table className="table">
                <thead className="table_thead">
                    <tr>
                        <th scope="col" className="table_th user_username">Username</th>
                        {/* <th scope="col" className="table_th user_roles">Roles</th> */}
                        {/* <th scope="col" className="table_th user_edit">Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content

}

// Flattened structure to grid?

export default Users
