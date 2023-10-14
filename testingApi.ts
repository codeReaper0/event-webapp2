import { useEffect } from "react";

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const response = await fetch(
    `https://events-be-python-one.vercel.app/api/events/search/rev`,
    {
      method: "GET",
    },
  );
  console.log(response);
};
