import { useState } from "react";

import CommandButtonOption from "../components/CommandButtonOption";
import CommandInput from "../components/CommandInput";
import NavBar from "../components/Navbar";
import { Command_ID } from "../constants/command_id";
import CommandModal from "../components/CommandModal";
import RxTable from "../components/ReceivedTable";
import CommandTable from "../components/CommandTable";

export default function AddCommandsPage() {
  // Add more commands here as needed
  const commandList = [
    { command_name: "Force Reboot", id: Command_ID.FORCE_REBOOT, args: [] },
    {
      command_name: "Switch To State",
      id: Command_ID.SWITCH_TO_STATE,
      args: ["Target state ID", "Time in state"],
    },
    {
      command_name: "Uplink Time Reference",
      id: Command_ID.UPLINK_TIME_REFERENCE,
      args: ["Time Reference"],
    },
    {
      command_name: "Uplink Orbit Reference",
      id: Command_ID.UPLINK_ORBIT_REFERENCE,
      args: [
        "Time Reference",
        "Position x",
        "Position y",
        "Position z",
        "Velocity x",
        "Velocity y",
        "Velocity z",
      ],
    },
    {
      command_name: "Turn Off Payload",
      id: Command_ID.TURN_OFF_PAYLOAD,
      args: [],
    },
    {
      command_name: "Schedule OD Experiment",
      id: Command_ID.SCHEDULE_OD_EXPERIMENT,
      args: [],
    },
    {
      command_name: "Request Telemetry Heartbeat",
      id: Command_ID.REQUEST_TM_HEARTBEAT,
      args: [],
    },
    {
      command_name: "Request Telemetry HAL",
      id: Command_ID.REQUEST_TM_HAL,
      args: [],
    },
    {
      command_name: "Request Telemetry Storage",
      id: Command_ID.REQUEST_TM_STORAGE,
      args: [],
    },
    {
      command_name: "Request Telemetry Payload",
      id: Command_ID.REQUEST_TM_PAYLOAD,
      args: [],
    },
    {
      command_name: "Request File Metadata",
      id: Command_ID.REQUEST_FILE_METADATA,
      args: ["File ID", "File Time"],
    },
    {
      command_name: "Request File Packet",
      id: Command_ID.REQUEST_FILE_PKT,
      args: ["File ID", "File Time", "Request Sequence Count"],
    },
  ];

  return (
    <div data-theme="night">
      <NavBar />
      <div class="flex gap-4">
        <div class="w-1/4">
        <h1 class="justify-self-center mt-5 font-bold text-2xl">{"Commands"}</h1>
        <h1 class="justify-self-center text-xs mb-2 ml-2">{"Select a command (and fill in the parameters) for Groundstation to transmit to Space Craft"}</h1>
        <CommandModal commandList={commandList}/>
        </div>
        <div class="w-3/4">
          <h1 class="justify-self-center mt-10 font-bold text-2xl">{"Commands Queued"}</h1>
          <CommandTable />
          <h1 class="justify-self-center mt-10 font-bold text-2xl">{"Received Data"}</h1>
          <RxTable />
        </div>
      </div>
      {/* <CommandInput />
      <div class="grid md:grid-cols-4 gap-4 justify-items-center">
        <CommandButtonOption commandList={commandList} />
      </div> */}
      <div class="h-10"></div>
    </div>
  );
}
