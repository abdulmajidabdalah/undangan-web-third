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
import { headingStyleNone } from "./ReservasiKehadiran";

const UcapkanSesuatu = () => {
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    nama: "",
    pesan: "",
    konfirmasi: "",
    dibuat: Timestamp.now().toDate(),
  });
  // Create Comments

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.pesan) {
      alert("Please fill in the blanks");
    }
    setFormData({
      nama: "",
      pesan: "",
      konfirmasi: "",
    });
    await addDoc(collection(db, "ucapan"), {
      nama: formData.nama,
      pesan: formData.pesan,
      konfirmasi: formData.konfirmasi,
      dibuat: Timestamp.now().toDate(),
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
    const commentsRef = collection(db, "ucapan");
    const q = query(commentsRef, orderBy("dibuat", "desc"));
    onSnapshot(q, (snapshot) => {
      const listComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(listComments);
    });
  }, []);

  const styles = {
    btnTop:
      "w-[120px] text-center font-secondary text-white text-sm rounded-md",
    btnTopIcon: "font-semibold flex justify-center items-center py-1",
    input:
      "bg-white w-full text-[16px] rounded-sm ring-1 ring-primary focus:outline-none focus:ring-1 px-2 focus:ring-sky-300 mb-2",
  };
  return (
    <>
      <div className={headingStyleNone} id="whises"></div>
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-no-repeat bg-cover pb-4 pt-5">
        <div className="text-center pb-5 pt-7 lg:pt-10 bg-secondary px-2">
          <h1 className="font-mempelai text-white text-[55px] lg:text-[80px]">
            Ucapkan Sesuatu
          </h1>
          <h2 className="font-secondary text-white text-[26px] mt-4 lg:mt-10">
            Berikan Ucapan & Doa Restu
          </h2>
        </div>
        <div className="bg-[#F5F3EE] mx-3 mt-4 rounded-b-xl">
          <p className="text-center font-secondary text-primary font-bold pt-4 text-sm">
            {comments.length} Komentar
          </p>
          <div className="flex justify-center items-center gap-3 mt-4">
            <div className={`bg-green-700 ${styles.btnTop}`}>
              <p className={styles.btnTopIcon}>
                {" "}
                <GoVerified />
              </p>
              <p>Hadir</p>
            </div>
            <div className={`bg-red-600 ${styles.btnTop}`}>
              <p className={styles.btnTopIcon}>
                <FaWindowClose />
              </p>
              <p>Tidak Hadir</p>
            </div>
          </div>
          <div className="bg-primary h-[1px] my-4"></div>
          <form autoComplete="off" className="px-4 font-secondary" onSubmit={handleSubmit}>
            <input
              type="text"
              className={`py-2 ${styles.input}`}
              placeholder="Nama"
              name="nama"
              required
              value={formData.nama}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              rows={4}
              type="text"
              className={styles.input}
              placeholder="Ucapan"
              required
              value={formData.pesan}
              name="pesan"
              onChange={(e) => handleChange(e)}
            />
            <div className="mb-3 w-full">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-primary rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                required
                name="konfirmasi"
                value={formData.konfirmasi}
                onChange={(e) => handleChange(e)}
              >
                <option selected>Konfirmasi Kehadiran</option>
                <option value="hadir">Hadir</option>
                <option value="tidak hadir">Tidak Hadir</option>
              </select>
            </div>
            <button className="bg-primary px-2 rounded-sm text-white mb-8">
              Kirim
            </button>
          </form>
          <div className="overflow-auto h-72">
          {
            comments.length >= 1 ?
            <ul className="border border-t-primary w-full text-gray-900">
              {comments.map((comment, index) => (
                <li className="px-4 py-2 border-b border-primary" key={index}>
                  <div className="flex justify-start items-center gap-1 font-semibold text-sm">
                    <div
                      className={
                        comment.konfirmasi === "hadir"
                          ? "bg-green-700 text-white font-sans flex justify-center items-center w-6 h-6 rounded-[50%] mr-2"
                          : "bg-red-600 text-white font-sans flex justify-center items-center w-6 h-6 rounded-[50%] mr-2"
                      }
                    >
                      <p className="capitalize">{comment.nama[0]}</p>
                    </div>
                    <p className="capitalize">{comment.nama}</p>
                    {comment.konfirmasi === "hadir" ? (
                      <GoVerified className="text-green-700" />
                    ) : (
                      <FaWindowClose className="text-red-600" />
                    )}
                  </div>
                  <p className="ml-9 font-sans text-xs text-slate-600 mt-2 capitalize">
                    {comment.pesan}
                  </p>
                  <div className="flex justify-start items-center gap-1 text-[10px] pl-9 mt-1 text-primary">
                    <i className="icofont-clock-time icofont-md"></i>
                    <p>{comment.dibuat.toDate().toDateString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          : 
          <div className="flex justify-center items-center ">
            <p>komentar masih kosong</p>
          </div>
        }
        </div>
        </div>
      </div>
    </>
  );
};

export default UcapkanSesuatu;
