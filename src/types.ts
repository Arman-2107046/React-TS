type Info = {
  id: number;
  name: string;
  email: string;
};

// type AdminInfoList = {
//   id: number;
//   name: string;
//   email: string;

//   role: string;
//   lastLogin: Date;
// };

type AdminInfoList = Info & {
  role: string;
  lastLogin: Date;
};

export { type Info, type AdminInfoList };
