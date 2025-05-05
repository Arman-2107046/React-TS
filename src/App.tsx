import UserHuXn from "./components/define-reusable-types/UserHuXn";
import AdminHuXn from "./components/define-reusable-types/AdminHuXn";
import { Info, AdminInfoList } from "./types";

const App = () => {
  const user: Info = {
    id: 101,
    name: "Robert Lewandowsky",
    email: "robertl@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 102,
    name: "Hansi Flick",
    email: "hflick@gmail.com",
    role: "Manager",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserHuXn user={user} />
      <hr />
      <hr />
      <AdminHuXn admin={admin} />
    </div>
  );
};

export default App;
