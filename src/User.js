import React, { useEffect } from "react";
import { useUsersState, useUsersDispatch, getUser } from "./UsersContext";

// useAsync 를 사용할 때에는 프로미스펑션의 파라미터를 객체형태로 해줘야 한다.
function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  const { data: user, loading, error } = state.user;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
