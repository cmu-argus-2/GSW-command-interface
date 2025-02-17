import axios from "axios";
import { useState, useEffect } from "react";
import { fetchRxData } from "../helpers/api";

function formatTimestamp(isoString) {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
  }).format(date);
}

export default function ReceivedTable() {
  const [rxData, setRXData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/rx");
        setRXData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
    // const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds

    // return () => clearInterval(interval);
  }, [fetchRxData]);

  return (
    <>
      {error && <div className="alert alert-error"> {error} </div>}

      <div className="overflow-x-auto">
        <table className="table table-xs table w-full bg-gray-800 text-white shadow-lg rounded-lg">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Message Name</th>
              <th>Time Received</th>
              <th>Arguments</th>
            </tr>
          </thead>
          <tbody>
          {
              /* List all the commands */
              rxData.map((rxMsg, index) => (
                <tr className="hover:bg-base-300">
                  <td>{index}</td>
                  <td>{rxMsg.rx_name}</td>
                  <td>{formatTimestamp(rxMsg.time_received)}</td>
                  <td>
                  <pre>
                  {Object.entries(rxMsg.rx_data)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join("\n")}
                </pre>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
