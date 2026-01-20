import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserById } from "../api/userApi";
import { useAuth } from "../context/AuthContext";

const UserDetailPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [userData, setUserData] = useState([null]);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserById(id, user.token);
      setUserData(data);
    };
    fetchUser();
  }, [id, user.token]);

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
      <p>Age: {userData.age}</p>
      <Link to={`/users/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default UserDetailPage;
