import { useGetRecordsQuery } from "./userRecordsApiSlice";
import UserRecord from "./UserRecord";

const RecordsList = () => {

  const {
    data: records,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetRecordsQuery();

    let content;

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = records;

        const tableContent = ids?.length
            ? ids.map(recordId => <UserRecord key={recordId} recordId={recordId} />)
            : null
        console.log(tableContent)

        content = (
            <table className="table">
                <thead className="table_thead">
                    <tr>
                        <th scope="col" className="table_th record_recordname">Recordname</th>
                        {/* <th scope="col" className="table_th record_roles">Roles</th> */}
                        {/* <th scope="col" className="table_th record_edit">Edit</th> */}
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

export default RecordsList