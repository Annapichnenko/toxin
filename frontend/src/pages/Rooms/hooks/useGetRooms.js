import { useEffect, useState } from "react";
import { PORT } from "../../../consts";

export const useGetRooms = () => {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetch(`${PORT}/api/rooms`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setRoomsData(data);
      });
  }, []);

  return {
    roomsData,
  };
};
