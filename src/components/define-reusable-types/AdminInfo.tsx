import { AdminInfoList } from "../../types";

const AdminInfo = ({
  role,
  permissions,
  createdAt,
  isActive,
}: AdminInfoList) => {
  return (
    <div>
      <h1>Role: {role}</h1>
      <h1>Permissions: {permissions}</h1>
      <h1>Created At: {createdAt}</h1>
      <h1>isActive: {isActive ? "YES" : "NO"}</h1>
    </div>
  );
};

export default AdminInfo;
