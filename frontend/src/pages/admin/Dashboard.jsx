import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <div className="">
        <aside>
          <Sidebar />
        </aside>
        <div className="p-4">
          <div>Header</div>
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
