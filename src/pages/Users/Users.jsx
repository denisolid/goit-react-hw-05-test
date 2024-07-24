import { useEffect, useState } from "react";
import UserList from "../../components/UserList/UserList";
import { fetchUsers } from "../../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {}, []);
  try {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default Users;
