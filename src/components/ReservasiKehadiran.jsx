import axios from "axios";
import React, { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const headingStyleNone =
  "bg-primary h-3 border-t-4 border-dotted border-white";

const ReservasiKehadiran = () => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name, qty, message, confirm);
    const data = {
      Nama: name,
      Jumlah: qty,
      Pesan: message,
      Konfirmasi: confirm,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/7b9a72a5-e147-409a-b539-06716b09590e",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setQty("");
        setMessage("");
        setConfirm("");
        toast.success("Terima Kasih :)", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <div className={headingStyleNone}></div>
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-no-repeat bg-cover pb-28 pt-3">
        <div className="bg-white h-[100px] rounded-t-[50%] mb-3">
          <h1 className="text-center font-mempelai text-primary pt-5">
            Reservasi Kehadiran
          </h1>
        </div>
        <div className="grid grid-cols-1 bg-white/30 backdrop-brightness-50 px-4 py-10 font-secondary mx-4 lg:mx-20 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              placeholder="Isikan Nama Anda"
              className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Jumlah Yang Akan Hadir"
              className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
              required
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <textarea
              rows={3}
              type="text"
              placeholder="Berikan Pesan Dan Doa Restu"
              className="w-full py-2 text-[16px] bg-white rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="text-white">Konfirmasi</label>
            <div className="mb-3 xl:w-96">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
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
