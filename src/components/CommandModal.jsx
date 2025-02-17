import axios from "axios";
import { useState } from "react";
import { snakeCase } from "snake-case";

export default function CommandModal ({commandList}){
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
            "http://localhost:3000/api/commands",
            newCommand,
          );
          console.log("Command Added Successfully: ", response.data);
          
        } catch (err) {
          setError(err.message);
        }
      };
    

    return (
          <div className="flex flex-col items-start space-y-3 w-fit mx-auto">
          {commandList.map((cmd, index) => (
              <div key={index} className="w-fit">
              <button className="btn btn-primary btn-lg btn-block w-2xs h-20" onClick={()=>document.getElementById(cmd.command_name).showModal()}>{cmd.command_name}</button>
              <dialog id={cmd.command_name} className="modal">
              <div className="modal-box">
                  <h2 className="font-bold text-2xl">{cmd.command_name}</h2>
                  {cmd.args.map((arg_name, idx) => (
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
                  ))}
                  <p className="text-xs py-2">Confirm adding this command to queue</p>
                  <div className="modal-action">
                  <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-error mr-5">Cancel</button>
                      <button className="btn btn-success" onClick={() => handleSubmit(cmd)}>Submit</button>
                  </form>
                  </div>
              </div>
              </dialog>
              </div>
          )) }
          
          </div>
    )
}