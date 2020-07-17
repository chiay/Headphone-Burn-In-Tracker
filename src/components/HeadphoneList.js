import React, { useEffect, useState } from 'react';
import Headphone from "./Headphone";
import axios from "axios";

export default function HeadphoneList() {

   const [headphones, setHeadphones] = useState([]);

   useEffect(() => {
      const getHeadphones = async () => {
         try {
            const res = await axios.get("http://localhost:5000/headphones");
            const data = res.data;
            if (data) setHeadphones(data);
            console.log(data);
         } catch (err) {
            console.error(err);
         }
      }
      getHeadphones();
   },[])

   const deleteHeadphone = async (id) => {
      
      const newList = headphones.filter(headphone => headphone._id !== id);
      setHeadphones(newList);

      try {
         await axios.delete(`http://localhost:5000/headphones/${id}`);
      } catch (err) {
         console.error(err);
      }
   }

   const startHeadphoneDate = async (id) => {
      const newList = [...headphones];
      const headphone = newList.find(headphone => headphone._id === id);
      headphone.startDate = new Date();
      setHeadphones(newList);

      try {
         await axios.patch(`http://localhost:5000/headphones/start/${id}`);
      } catch (err) {
         console.error(err);
      }
   }

   const endHeadphoneDate = async (id) => {
      const newList = [...headphones];
      const headphone = newList.find(headphone => headphone._id === id);
      headphone.endDate = new Date();
      setHeadphones(newList);

      try {
         await axios.patch(`http://localhost:5000/headphones/end/${id}`);
      } catch (err) {
         console.error(err);
      }
   }

   return (
      headphones.map(headphone => {
         return <Headphone key={headphone._id} headphone={headphone} deleteHeadphone={deleteHeadphone} startHeadphoneDate={startHeadphoneDate} endHeadphoneDate={endHeadphoneDate}/>;
      })
   );
}
