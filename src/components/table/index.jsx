import { useState, useEffect } from "react";
import { getPokes } from "../../helpers/getPokes";
import TableRow from "../tableRow";

const Table = () => {
  // State
  const [pokeList, setPokeList] = useState([]);

  // Effect
  useEffect(() => {
    const abortController = new AbortController();

    getPokes()
      .then((res) => setPokeList(res.data.results))
      .catch((err) => console.log(err));

    return () => abortController.abort();
  }, []);

  // Render
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>

      <tbody>
        {pokeList.map((el) => (
          <TableRow key={el.url} name={el.name} url={el.url} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
