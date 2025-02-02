import { useState } from "react";

import CommandButtonOption from "../components/CommandButtonOption";
import CommandInput from "../components/CommandInput";
import NavBar from "../components/Navbar";
import { Command_ID } from "../constants/command_id";

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
      <CommandInput />
      <div class="grid md:grid-cols-4 gap-4 justify-items-center">
        <CommandButtonOption commandList={commandList} />
      </div>
      <div class="h-70"></div>
    </div>
  );
}
