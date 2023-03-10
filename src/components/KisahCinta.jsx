import React from "react";

const KisahCinta = () => {
  return (
    <>
      <div className="bg-primary h-[120px] flex justify-center items-center font-mempelai lg:text-[80px] leading-relaxed text-white">
        <p>Kisah Perjalanan Cinta</p>
      </div>
      <div className="lg:mx-[174px] px-4 bg-bg-mempelai py-8">
        <div className="flex justify-center items-center mx-auto gap-4">
          <p className="font-secondary text-xl">Maret 2019</p>
          <div>
            <i className="icofont-long-arrow-right icofont-2x text-primary"></i>
          </div>
          <div className="bg-primary w-[320px] pb-2 rounded-lg border-double border-4 border-white shadow-sm shadow-black">
            <h1 className="font-secondary text-white text-lg p-2">
              AWAL BERTEMU
            </h1>
            <p
              align="justify"
              className="font-secondary text-white pl-2 pr-8 text-[16px] leading-tight"
            >
              Kisah kami berawal dari tahun 2016 hari dimana cinta dan kasih
              sayang kami dimulai, berkenalan lewat BBM dengan seiring nya waktu
              saling menjadi tempat bertukar pikiran serta cerita satu sama
              lain.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <i className="icofont-long-arrow-down icofont-4x text-primary"></i>
        </div>
        <div className="flex justify-center items-center mx-auto gap-4">
          <div className="bg-primary w-[380px] rounded-lg border-double border-4 border-white shadow-sm shadow-black">
            <h1 className="font-secondary text-white text-lg p-2">
              BERKOMITMEN BERSAMA
            </h1>
            <p
              align="justify"
              className="font-secondary text-white pb-2 pl-2 pr-8 text-[16px] leading-tight"
            >
              Setelah melewati perjalanan yang panjang, sampai tak terhitung
              seberapa banyak kata menyerah terucap.namun takdir membawa kami
              kembali bersama. Hingga pada akhirnya tanggal 4 mei 2022 kami
              memutuskan untuk menjalin hubungan ke jenjang yg lebih serius.
            </p>
          </div>
          <div>
            <i className="icofont-long-arrow-right icofont-rotate-180 icofont-2x text-primary"></i>
          </div>
          <p className="font-secondary text-xl">Maret 2022</p>
        </div>
        <div className="flex justify-center items-center">
          <i className="icofont-long-arrow-down icofont-4x text-primary"></i>
        </div>
        <div className="flex justify-center items-center mx-auto gap-4">
          <p className="font-secondary text-xl">Maret 2023</p>
          <div>
            <i className="icofont-long-arrow-right icofont-2x text-primary"></i>
          </div>
          <div className="bg-primary w-[370px] pb-2 rounded-lg border-double border-4 border-white shadow-sm shadow-black">
            <h1 className="font-secondary text-white text-lg p-2">MENIKAH</h1>
            <p
              align="justify"
              className="font-secondary text-white pl-2 pr-8 text-[16px] leading-tight"
            >
              29 januari 2023 menjadi tanggal yang kami putuskan dan merupakan
              hari bahagia yg sangat kami nantikan untuk memulai awal yg baru
              sebagai pasangan suami istri. InsyaAllah kami yakin dan siap
              dengan memohon ridho dari Allah SWT.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KisahCinta;
