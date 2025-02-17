import axios from "axios";


export const fetchCommands = async (setCommandData) => {
    try {
      const response = await axios.get("http://localhost:3000/api/commands");
      setCommandData(response.data);
    } catch (err) {
      console.error("Error fetching commands:", err);
    }
};

export const fetchRxData = async (setRXData) => {
    try {
        const response = await axios.get("http://localhost:3000/api/rx");
        setRXData(response.data);
    } catch (err) {
        console.error("Error fetching received data:", err);
    }
}