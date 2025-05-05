import { AdminInfoList } from "../../types";

type AdminHuXnProps = {
  admin: AdminInfoList;
};

const AdminHuXn: React.FC<AdminHuXnProps> = ({ admin }) => {
  return (
    <div>
      <h1>Id: {admin.id}</h1>
      <h1>Name: {admin.name}</h1>
      <h1>Email: {admin.email}</h1>
      <h1>Role: {admin.role}</h1>
      <h1>Last LogIn: {admin.lastLogin.toLocaleString()}</h1>
    </div>
  );
};

export default AdminHuXn;
