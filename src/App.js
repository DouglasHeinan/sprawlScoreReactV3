// import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import ScoreSheet from "./features/scoreSheet/ScoreSheet";
import UsersList from "./features/users/UsersList";
import UserRecordsList from "./features/userRecords/UserRecordsList";
import AdminLayout from "./components/AdminLayout";
import AdminWelcome from "./features/auth/AdminWelcome";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />
          <Route path="scoreSheet">
            <Route index element={<ScoreSheet />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path="records" element={<UserRecordsList />} />
          </Route>
          
        </Route> {/* End Dash Route */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminWelcome />} />
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route> {/* End Admin Route */}
      </Route>
    </Routes>
  );

}

export default App;
