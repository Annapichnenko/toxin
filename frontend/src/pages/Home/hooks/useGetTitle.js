import { useEffect, useState } from "react";
import { PORT } from "../../../consts";

export const useGetTitle = () => {
  const [title, setTitle] = useState("загрузка...");

  useEffect(() => {
    fetch(`${PORT}/api/datas`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setTitle(data[0].title);
      });
  }, []);

  return { title };
};
