import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";


const UsersList = () => {

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
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users;

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null
        console.log(tableContent)

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
    console.log(content)


    return content

}

export default UsersList

// Flattened structure to grid? 3:02:00
