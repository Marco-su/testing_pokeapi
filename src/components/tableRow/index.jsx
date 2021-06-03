const TableRow = ({ name, url }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{url}</td>
    </tr>
  );
};

export default TableRow;
