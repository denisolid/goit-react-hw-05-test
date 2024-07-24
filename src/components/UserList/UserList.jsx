import s from "./UserList.module.css";

const UserList = ({ users = [] }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
