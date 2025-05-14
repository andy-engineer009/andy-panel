
const Table =({data, columns}) => {

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
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.age}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    )
}
export default Table;