import { useEffect, useState } from "react";
import { PORT } from "../../../consts";

export const useGetUsers = ({ create }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${PORT}/api/users`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }, [create]);

  return { users };
};
