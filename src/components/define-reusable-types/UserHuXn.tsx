import { Info } from "../../types";

type UserInfoProp = {
  user: Info;
};

const UserHuXn: React.FC<UserInfoProp> = ({ user }) => {
  return (
    <div>
      <h1>Id: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
};

export default UserHuXn;
