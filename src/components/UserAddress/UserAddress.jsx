import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsersById } from "../../services/api";

const UserAddress = () => {
  const params = useParams();
  const [user, setUser] = useState(null); // изменено на null, чтобы избежать ошибок с .map

  useEffect(() => {
    fetchUsersById(params.userId).then((data) => setUser(data));
  }, [params.userId]);

  // Проверьте, загружены ли данные пользователя
  if (!user) {
    return <p>Loading...</p>;
  }

  // Проверьте, есть ли адрес
  if (!user.address) {
    return <p>No address available</p>;
  }

  return (
    <div>
      <p>Address: {user.address.address}</p>
      <p>City: {user.address.city}</p>
      <p>State: {user.address.state}</p>
      <p>State Code: {user.address.stateCode}</p>
      <p>Postal Code: {user.address.postalCode}</p>
      <p>
        Coordinates: Lat {user.address.coordinates.lat}, Lng{" "}
        {user.address.coordinates.lng}
      </p>
      <p>Country: {user.address.country}</p>
    </div>
  );
};

export default UserAddress;
