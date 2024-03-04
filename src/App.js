// import './App.css'
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import ScoreSheet from "./features/scoreSheet/ScoreSheet";
import UsersList from "./features/users/UsersList";
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
          </Route>
          
        </Route> {/* End Dash Route */}
      </Route>
    </Routes>
  );

}

export default App;
