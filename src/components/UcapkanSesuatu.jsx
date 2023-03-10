import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { GoVerified } from "react-icons/go";
import { FaWindowClose } from "react-icons/fa";
import { db } from "../config/configFirebase";

const UcapkanSesuatu = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    ucapan: "",
    createdAt: Timestamp.now().toDate(),
  });
  const [konfirmasi, setKonfirmasi] = useState("");
  console.log(konfirmasi);

  // Create Comments

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.ucapan) {
      alert("Please fill in the blanks");
    }
    setFormData({
      nama: "",
      ucapan: "",
    });
    setKonfirmasi("");
    await addDoc(collection(db, "comments"), {
      nama: formData.nama,
      ucapan: formData.ucapan,
      konfirmasi: konfirmasi,
      createdAt: Timestamp.now().toDate(),
    })
      .then(() => {
        console.log("berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Read Comments
  useEffect(() => {
    const commentsRef = collection(db, "comments");
    const q = query(commentsRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const listComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(listComments);
    });
  }, []);
  return (
    <>
      <div
        className="bg-primary h-8 border-4 border-double border-white"
        id="whises"
      ></div>
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-no-repeat bg-cover pb-4">
        <div className="text-center pt-5 lg:pt-10">
          <h1 className="font-mempelai text-[55px] lg:text-[80px]">
            Ucapkan Sesuatu
          </h1>
          <h2 className="font-secondary text-[26px] mt-4 lg:mt-10">
            Berikan Ucapan & Doa Restu
          </h2>
        </div>
        <div className="bg-[#F5F3EE] mx-3 mt-4">
          <p className="text-center font-secondary text-primary font-bold pt-4 text-sm">
            {comments.length} Comments
          </p>
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className="bg-green-700 w-[120px] text-center font-secondary text-white text-sm py-1 rounded-md">
              <p className="font-semibold">{comments.length}</p>
              <p>Hadir</p>
            </div>
            <div className="bg-red-600 w-[120px] text-center font-secondary text-white text-sm py-1 rounded-md">
              <p className="font-semibold">2</p>
              <p>Tidak Hadir</p>
            </div>
          </div>
          <div className="bg-primary h-[1px] my-4"></div>
          <form className="px-4 font-secondary" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-white w-full text-[16px] rounded-sm ring-1 ring-primary focus:outline-none focus:ring-1 px-2 focus:ring-sky-300 mb-2"
              placeholder="Nama"
              name="nama"
              value={formData.nama}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              rows={2}
              type="text"
              className="bg-white w-full py-1 text-[16px] rounded-sm ring-1 ring-primary focus:outline-none focus:ring-1 px-2 focus:ring-sky-300 mb-2"
              placeholder="Ucapan"
              value={formData.ucapan}
              name="ucapan"
              onChange={(e) => handleChange(e)}
            />
            <div className="mb-3 w-full">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-primary rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                value={konfirmasi}
                onChange={(e) => setKonfirmasi(e.target.value)}
              >
                <option selected>Konfirmasi Kehadiran</option>
                <option value="1">Hadir</option>
                <option value="2">Tidak Hadir</option>
              </select>
            </div>
            <button className="bg-primary px-2 rounded-sm text-white mb-8">
              Kirim
            </button>
          </form>
          <div className="overflow-auto h-52">
            <ul className="border border-t-primary w-full text-gray-900">
              {comments.map((comment, index) => (
                <li className="px-4 py-2 border-b border-primary" key={index}>
                  <div className="flex justify-start items-center gap-1 font-semibold text-sm">
                    <div
                      className={
                        comment.konfirmasi === "1"
                          ? "bg-green-700 text-white font-sans flex justify-center items-center w-6 h-6 rounded-[50%] mr-2"
                          : "bg-red-600 text-white font-sans flex justify-center items-center w-6 h-6 rounded-[50%] mr-2"
                      }
                    >
                      <p>{comment.nama[0]}</p>
                    </div>
                    <p className="">{comment.nama}</p>
                    {comment.konfirmasi === "1" ? (
                      <GoVerified className="text-green-700" />
                    ) : (
                      <FaWindowClose className="text-red-600" />
                    )}
                  </div>
                  <p className="ml-9 font-sans text-xs text-slate-600 mt-2">
                    {comment.ucapan}
                  </p>
                  <div className="flex justify-start items-center gap-1 text-[10px] pl-9 mt-1 text-primary">
                    <i className="icofont-clock-time icofont-md"></i>
                    <p>{comment.createdAt.toDate().toDateString()}</p>
                    <button className="font-semibold">Reply</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UcapkanSesuatu;
