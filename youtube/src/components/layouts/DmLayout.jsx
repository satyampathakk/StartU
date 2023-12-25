import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import InboxUser from "../InboxUser";

const DmLayout = () => {
  let url = useSelector((state) => state.getVideoUrl.value);
  const [data, setData] = useState(false);

  useEffect(() => {
    const call = async () => {
      try {
        let response = await axios.get(url);
        setData([...response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    call();
  }, [url]); 

  return (
    <div>
      {data ? (
        data.map((item) => <InboxUser key={item.pk} {...item}></InboxUser>)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default DmLayout;
