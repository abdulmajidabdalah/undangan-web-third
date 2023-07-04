import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../config/configFirebase";
import {BsPersonCircle} from 'react-icons/bs'
import { Link } from "react-router-dom";

const styles = {
  list: "border-r border-white pr-2",
};

const ListTransfer = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const commentsRef = collection(db, "transfer");
    const q = query(commentsRef, orderBy("dibuat", "desc"));
    onSnapshot(q, (snapshot) => {
      const listComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDatas(listComments);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center my-3">List Transfer</h1>
      <div className="flex justify-center items-center">
        <Link to={"/list-kehadiran"} className="bg-secondary p-2 rounded-sm text-white">Go to List Kehadiran</Link>
      </div>
      {datas.length === 0 ? (
        <div className="flex justify-center items-center border-t-2 border-black mt-4 py-5 mx-2">
          <p>Data masih kosong</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 mx-5 gap-1 lg:mx-1 my-5 lg:my-10 border-t-2 border-black py-5">
          {datas.map((data, index) => (
            <div
              className="flex bg-secondary gap-3 px-1 py-2 rounded-lg"
              key={index}
            >
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center bg-white h-[50px] w-[50px] rounded-full">
                  <p className="font-bold text-xl capitalize"><BsPersonCircle/></p>
                </div>
              </div>
              <div className="text-sm text-white grid gap-y-1">
                <p className={styles.list}>Nama</p>
                <p className={styles.list}>Jumlah Transfer</p>
                <p className={styles.list}>Bank</p>
                <p className={styles.list}>Tanggal</p>
              </div>
              <div className="text-sm text-white grid gap-y-1 capitalize">
                <p>{data.nama}</p>
                <p>{data.jumlah}</p>
                <p>{data.bank}</p>
                <p>{data.dibuat.toDate().toDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListTransfer;
