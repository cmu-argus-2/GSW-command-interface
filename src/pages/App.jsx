import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ViewCommandsPage from "./ViewCommandsPage";
import AddCommandsPage from "./AddCommandsPage";

import CommandButtonOption from "../components/CommandButtonOption";
import CommandInput from "../components/CommandInput";
import NavBar from "../components/Navbar";
import CommandTable from "../components/CommandTable";

function App() {
  // Add more commands here as needed
  // const commandList = [
  //   { command_name: "Force Reboot", id: 0x40, args: []},
  //   { command_name: "Switch To State", id: 0x41, args: ["Target state ID", "Time in state"]},
  //   { command_name: "Uplink Time Reference", id: 0x42, args: ["Time Reference"]},
  //   { command_name: "Uplink Orbit Reference", id: 0x43, args: ["Time Reference", "Position", "Velocity"]},
  //   { command_name: "Turn Off Payload", id: 0x44, args: []},
  //   { command_name: "Schedule OD Experiment", id: 0x45, args: []},
  //   { command_name: "Request Telemetry Heartbeat", id: 0x46, args: []},
  //   { command_name: "Request Telemetry HAL", id: 0x47, args: []},
  //   { command_name: "Request Telemetry Storage", id: 0x48, args: []},
  //   { command_name: "Request Telemetry Payload", id: 0x49, args: []},
  //   { command_name: "Request File Metadata", id: 0x4A, args: ["File ID", "File Time"]},
  //   { command_name: "Request File Packet", id: 0x4B, args: ["File ID", "File Time", "Request Sequence Count"]},
  // ]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddCommandsPage />} />
        <Route path="/viewcommandspage" element={<ViewCommandsPage />} />
      </Routes>
    </Router>
    // <div data-theme="night">
    //   <NavBar />
    //   <CommandInput />
    //   <div class="grid md:grid-cols-4 gap-4 justify-items-center">
    //   <CommandButtonOption commandList={commandList}/>
    //   </div>
    //   <div>
    //     <CommandTable />
    //   </div>
    //   <div class="h-70"></div>
    // </div>
  );
}

export default App;
