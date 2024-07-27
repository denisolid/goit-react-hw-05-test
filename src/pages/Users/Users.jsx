import { useEffect, useState } from "react";
import UsersList from "../../components/UsersList/UsersList";
import { fetchUsers } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const filterValue = searchParams.get("query");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchUsers();
        setUsers(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
    // fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleChangeFilter = (newValue) => {
    searchParams.set("query", newValue);
    searchParams.set("page", 1);
    searchParams.set("limit", 5);
    setSearchParams(searchParams);
  };

  const filteredData = users.filter((user) =>
    user.firstName.includes(
      filterValue.toLowerCase() ||
        user.lastName.includes(filterValue.toLowerCase())
    )
  );

  return (
    <>
      <SearchBar
        handleChangeFilter={handleChangeFilter}
        filterValue={filterValue}
      />
      <UsersList users={filteredData} />
    </>
  );
};
export default Users;
// http://localhost:5173/users
// http://localhost:5173/users/
