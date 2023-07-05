import React, { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade, Slide as SlideEffect } from "react-awesome-reveal";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/configFirebase";

export const headingStyleNone =
  "bg-primary h-3 border-t-4 border-dotted border-white";

const ReservasiKehadiran = () => {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    pesan: "",
    konfirmasi: "",
    dibuat: Timestamp.now().toDate(),
  });

  // Create Data

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
      jumlah: "",
      konfirmasi: "",
    });
    await addDoc(collection(db, "kehadiran"), {
      nama: formData.nama,
      jumlah: formData.jumlah,
      pesan: formData.pesan,
      konfirmasi: formData.konfirmasi,
      dibuat: Timestamp.now().toDate(),
    })
      .then(() => {
        toast.success(`Terima Kasih ${formData.nama} :)`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={headingStyleNone}></div>
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-no-repeat bg-cover pb-28 pt-3">
        <div className="bg-secondary mb-5">
          <div className="flex justify-center items-center">
            <Fade
              delay={1e3}
              cascade
              damping={1e-1}
              triggerOnce={true}
              className="text-center font-mempelai text-white text-3xl lg:text-base py-4"
            >
              Reservasi Kehadiran
            </Fade>
          </div>
        </div>
        <SlideEffect duration={2000} triggerOnce={true}>
          <div className="grid grid-cols-1 bg-white/30 backdrop-brightness-50 px-4 py-10 font-secondary mx-4 lg:mx-20 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                placeholder="Isikan Nama Anda"
                className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
                required
                name="nama"
                value={formData.nama}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Jumlah Yang Akan Hadir"
                className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
                required
                name="jumlah"
                value={formData.jumlah}
                onChange={(e) => handleChange(e)}
              />
              <textarea
                rows={3}
                type="text"
                placeholder="Berikan Pesan Dan Doa Restu"
                className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
                required
                name="pesan"
                value={formData.pesan}
                onChange={(e) => handleChange(e)}
              />
              <label className="text-white">Konfirmasi</label>
              <div className="mb-3 xl:w-96">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  required
                  name="konfirmasi"
                  value={formData.konfirmasi}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Pilih Opsi !</option>
                  <option value="Ya, Saya Akan Datang">
                    Ya, Saya Akan Datang
                  </option>
                  <option value="Saya Masih Ragu">Saya Masih Ragu</option>
                  <option value="Maaf, Saya Tidak Bisa Hadir">
                    Maaf, Saya Tidak Bisa Hadir
                  </option>
                </select>
              </div>
              <button className="bg-primary px-4 py-1 rounded-md text-white mb-10">
                Konfirmasi
              </button>
            </form>
          </div>
        </SlideEffect>
      </div>
      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default ReservasiKehadiran;
