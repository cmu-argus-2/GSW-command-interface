import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ViewCommandsPage from "./ViewCommandsPage";
import AddCommandsPage from "./AddCommandsPage";
import ViewReceivedDataPage from "./ViewReceivedDataPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddCommandsPage />} />
        <Route path="/viewcommandspage" element={<ViewCommandsPage />} />
        <Route path="/viewreceiveddatapage" element={<ViewReceivedDataPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
