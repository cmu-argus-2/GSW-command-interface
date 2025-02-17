import axios from "axios";
import { useState, useEffect } from "react";

export default function CommandTable() {
  const [commandData, setCommandData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/commands");
        setCommandData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 1000); // Refresh every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {error && <div className="alert alert-error"> {error} </div>}

      <div className="overflow-x-auto">
        <table className="table table-xs table w-full bg-gray-800 text-white shadow-lg rounded-lg">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Command</th>
              <th>Created At</th>
              <th>Arguments</th>
            </tr>
          </thead>
          <tbody>
            {
              /* List all the commands */
              commandData.map((command, index) => (
                <tr className="hover:bg-base-300">
                  <th>{index}</th>
                  <td>{command.command_name}</td>
                  <td>{command.created_at}</td>
                  <td>
                    {Object.entries(command.args)
                      .map(([key, value]) => `${key}: ${value}`)
                      .join(", ")}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {commandData == [] && <h1 class="justify-self-center text-xs">{"No commands are currently queued"}</h1>}
      </div>
    </>
  );
}
