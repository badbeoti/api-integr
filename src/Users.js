import React, { useState } from "react";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import User from "./User";

function Users() {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩중임니드아</div>;
  if (error) return <div>에러임니다</div>;
  if (!users) return <button onClick={fetchData}>불러오는주우웅웅</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchData}>다시 불러와볼게여</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
