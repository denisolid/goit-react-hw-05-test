import { Link } from "react-router-dom";
import s from "./UserList.module.css";

const UserList = ({ users = [] }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id.toString()}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
