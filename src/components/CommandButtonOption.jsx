import axios from "axios";
import { useState } from "react";
import { snakeCase } from "snake-case";

export default function CommandButtonOption({ commandList }) {
  const [newCommandData, setNewCommandData] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (cmd_name, arg_name, value) => {
    const convertedName = snakeCase(arg_name); // Convert to snake_case

    setNewCommandData((prev) => ({
      ...prev,
      [cmd_name]: {
        ...prev[cmd_name],
        [convertedName]: value,
      },
    }));
  };

  const handleSubmit = async (cmd) => {
    try {
      const newCommand = {
        command_id: cmd.id,
        command_name: cmd.command_name,
        args: newCommandData[cmd.command_name] || {},
      };

      const response = await axios.post(
        "http://172.26.4.66:3000/api/commands",
        newCommand,
      );
      console.log("Command Added Successfully: ", response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && <div className="alert alert-error"> {error} </div>}

      {commandList.map((cmd, index) => (
        <details className="dropdown">
          <summary className="btn btn-primary btn-lg btn-block w-2xs h-35">
            {cmd.command_name}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-2xs p-2 shadow-sm">
            {cmd.args.map((arg_name, index) => (
              <li>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">{arg_name}</legend>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input"
                    onChange={(e) =>
                      handleInputChange(
                        cmd.command_name,
                        arg_name,
                        e.target.value,
                      )
                    }
                  />
                </fieldset>
              </li>
            ))}
            <li>
              <button
                className="btn btn-success btn-sm btn-block w-20 self-center"
                onClick={() => handleSubmit(cmd)}
              >
                Submit
              </button>
            </li>
          </ul>
        </details>
      ))}
    </>
  );
}
