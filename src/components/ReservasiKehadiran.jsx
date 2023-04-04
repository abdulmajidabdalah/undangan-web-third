import React from "react";

export const headingStyleNone =
  "bg-primary h-3 pt-3 border-b-4 border-t-4 border-dotted border-white";

const ReservasiKehadiran = () => {
  return (
    <>
      <div className={headingStyleNone}></div>
      <div className="lg:mx-[174px] bg-primary pb-28">
        <h1 className="text-center font-mempelai text-white pt-8">
          Reservasi Kehadiran
        </h1>
        <div className="grid grid-cols-1 bg-white px-4 py-10 font-secondary mx-4 lg:mx-20 rounded-lg shadow-lg">
          <form action="">
            <input
              type="text"
              placeholder="Isikan Nama Anda"
              className="w-full py-2 text-[16px] bg-slate-100 rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
            />
            <input
              type="text"
              placeholder="Jumlah Yang Akan Hadir"
              className="w-full py-2 text-[16px] bg-slate-100 rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
            />
            <textarea
              rows={3}
              type="text"
              placeholder="Berikan Pesan Dan Doa Restu"
              className="w-full py-2 text-[16px] bg-slate-100 rounded-sm focus:outline-none focus:ring-1 px-4 focus:ring-primary mb-2"
            />
            <label>Konfirmasi</label>
            <div className="mb-3 xl:w-96">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Ya, Saya Akan Datang</option>
                <option value="1">Saya Masih Ragu</option>
                <option value="2">Maaf, Saya Tidak Bisa Hadir</option>
              </select>
            </div>
            <button className="bg-primary px-4 py-1 rounded-md text-white mb-10">
              Konfirmasi
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReservasiKehadiran;
