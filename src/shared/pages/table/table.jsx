
const Table =({data, columns,handleEdit,handleDelete}) => {

    return (    
        <div>
          <table>
            <thead>
                <tr>
                    {columns.map((column,index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,index) => (
                    <tr key={index}>
                        {columns.map((column,index) => (
                            <td key={index}>{row[column]}</td>
                        ))}
                        <td onClick={() => handleEdit(row)}>edit</td>
                        <td onClick={() => handleDelete(row)}>delete</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table;