import React, { useState } from "react";
import bni from "../assets/bni.png";
import bjb from "../assets/bjb.png";
import gift from "../assets/gift.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Flip, Zoom } from "react-awesome-reveal";
import axios from "axios";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactWhatsapp from 'react-whatsapp';

const styles = {
  card: "bg-white/30 backdrop-blur-2xl mx-16 lg:h-[490px] rounded-lg shadow-lg shadow-black lg:mt-20 mt-5",
};

const WeddingGift = () => {
  const [bank, setBank] = useState("");
  const [jmlTf, setJmlTf] = useState("");
  const [namaRek, setNamaRek] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Nama_Bank: bank,
      Jumlah_Transfer: jmlTf,
      Nama_Rekening: namaRek,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/13804b11-f84a-4c06-9815-532ad015c514",
        data
      )
      .then((response) => {
        console.log(response);
        setBank("");
        setJmlTf("");
        setNamaRek("");
        toast.success(`Terima Kasih ${namaRek} :)`, {
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

  const [copySatu, setCopySatu] = useState(false);
  const onCopySatu = () => {
    setCopySatu(true);
    setTimeout(() => setCopySatu(false), 2000);
  };
  const [copyDua, setCopyDua] = useState(false);
  const onCopyDua = () => {
    setCopyDua(true);
    setTimeout(() => setCopyDua(false), 2000);
  };
  return (
    <>
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-cover bg-no-repeat pb-8 pt-3">
        <div className="bg-white rounded-t-[50%] px-4 pb-4">
          <Flip duration={1000} triggerOnce={true}>
            <h1 className="font-mempelai text-[#426a69] text-center pt-8 lg:pt-24 lg:text-8xl text-5xl">
              Wedding Gift
            </h1>
          </Flip>
          <Zoom direction="in" duration={2000} triggerOnce={true}>
            <div className="font-secondary text-center text-[#696969] text-[22px] lg:text-[26px] lg:pt-10 pt-4">
              <p>
                Doa restu anda merupakan karunia yang sangat berarti bagi kami.
                Dan jika memberi
              </p>
              <p>
                adalah ungkapan tanda terimakasih anda, anda dapat memberi kado
                secara cashless
              </p>
            </div>
          </Zoom>
        </div>
        <div className={styles.card}>
          <Zoom
            direction="out"
            duration={2000}
            triggerOnce={true}
            className="flex justify-center items-center"
          >
            <img
              src={bni}
              alt=""
              className="lg:w-[290px] lg:h-[180px] w-[100px] mt-5 object-center"
            />
          </Zoom>
          <div className="bg-[#426a69] h-[2px] mx-16 my-2 lg:my-6"></div>
          <div className="font-secondary text-center text-[20px] lg:text-[25px] text-white">
            <p>No. Rekening</p>
            <p className="lg:my-5 my-2">1272238720</p>
          </div>
          <div className="flex justify-center items-center">
            <CopyToClipboard text={"1272238720"}>
              <button
                className="bg-primary px-6 py-2 rounded-md font-secondary text-white"
                onClick={onCopySatu}
              >
                {copySatu ? (
                  <p className="text-center px-1">
                    Copied <i class="icofont-check"></i>
                  </p>
                ) : (
                  <>
                    <i className="icofont-copy-invert icofont-sm mr-1"></i>
                    Salin Teks
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>
          <p className="font-secondary text-center text-[25px] text-white lg:mt-5 mt-3 pb-4">
            Sri Kartini
          </p>
        </div>
        <div className={styles.card}>
          <Zoom
            direction="out"
            duration={2000}
            triggerOnce={true}
            className="flex justify-center items-center"
          >
            <img
              src={bjb}
              alt=""
              className="lg:w-[290px] lg:h-[180px] w-[100px] mt-5 object-center"
            />
          </Zoom>
          <div className="bg-[#426a69] h-[2px] mx-16 my-2 lg:my-6"></div>
          <div className="font-secondary text-center text-[20px] lg:text-[25px] text-white">
            <p>No. Rekening</p>
            <p className="lg:my-5 my-2">0119732786100</p>
          </div>
          <div className="flex justify-center items-center">
            <CopyToClipboard text={"0119732786100"}>
              <button
                className="bg-primary px-6 py-2 rounded-md font-secondary text-white"
                onClick={onCopyDua}
              >
                {copyDua ? (
                  <p className="text-center px-1">
                    Copied <i class="icofont-check"></i>
                  </p>
                ) : (
                  <>
                    <i className="icofont-copy-invert icofont-sm mr-1"></i>
                    Salin Teks
                  </>
                )}
              </button>
            </CopyToClipboard>
          </div>
          <p className="font-secondary text-center text-[25px] text-white lg:mt-5 mt-3 pb-4">
            Yosep Ramdani
          </p>
        </div>
        <div className={styles.card}>
          <Zoom
            direction="out"
            duration={2000}
            triggerOnce={true}
            className="flex justify-center items-center"
          >
            <img
              src={gift}
              alt=""
              className="lg:w-[250px] lg:h-[180px] w-[100px] mt-5"
            />
          </Zoom>
          <div className="bg-[#426a69] h-[2px] mx-16 mb-6 mt-3"></div>
          <div className="font-secondary text-center text-[20px] lg:text-[25px] text-white leading-relaxed pb-8">
            <p className="lg:my-4 font-semibold lg:text-current text-2xl">
              Kirim Kado
            </p>
            <div className="px-2 text-sm lg:text-base">
              <p>Kp. Ciawi RT/RW 22/04</p>
              <p>Desa. Padasenang</p>
              <p>Kec. Cidadap</p>
              <p>Kab. Sukabumi</p>
              <p>Penerima : Sri Kartini</p>
            </div>
          </div>
        </div>
        <div className="bg-white mx-16 shadow-md shadow-black mt-8 rounded-t-lg">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 p-2 font-secondary text-[16px]"
          >
            <input
              type="text"
              placeholder="Nama"
              value={namaRek}
              onChange={(e) => setNamaRek(e.target.value)}
              className="focus:outline-none focus:ring-1 px-1 focus:ring-primary rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Jumlah"
              value={jmlTf}
              onChange={(e) => setJmlTf(e.target.value)}
              className="focus:outline-none focus:ring-1 px-1 focus:ring-primary rounded-md mb-2"
            />
            <label className="">Rek. Tujuan</label>
            <div className="mb-3 xl:w-96">
              <select
                className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                required
                value={bank}
                onChange={(e) => setBank(e.target.value)}
              >
                <option selected>Pilih Bank</option>
                <option value="BJB">
                  BJB
                </option>
                <option value="BNI">BNI</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-primary px-4 py-1 w-24 rounded-md text-white mt-2 text-sm"
            >
              Konfirmasi
            </button>
          </form>
          <div className="flex justify-start items-center px-2">
            <ReactWhatsapp 
              className="bg-primary px-4 py-1 rounded-md text-white mb-2 w-24 text-sm" 
              number="+6285782189711" 
              message={'Nama :\n Jumlah :\n Nama Bank : BJB or BNI'}>
              Whatsapp
            </ReactWhatsapp>
          </div>
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

export default WeddingGift;
