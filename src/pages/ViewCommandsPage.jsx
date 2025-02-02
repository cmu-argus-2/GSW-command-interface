import CommandTable from "../components/CommandTable";
import NavBar from "../components/Navbar";

export default function ViewCommandsPage() {
  return (
    <div data-theme="night">
      <NavBar />
      <div>
        <CommandTable />
      </div>
      <div class="h-200"></div>
    </div>
  );
}
