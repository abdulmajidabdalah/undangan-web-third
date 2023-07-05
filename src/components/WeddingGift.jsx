import React, { useState } from "react";
import dana from "../assets/dana.png";
import bca from "../assets/bca.png";
import gift from "../assets/gift.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Zoom, Slide as SlideEffect, Fade } from "react-awesome-reveal";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactWhatsapp from "react-whatsapp";

import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../config/configFirebase";

const styles = {
  card: "bg-white/30 backdrop-blur-2xl lg:mx-16 mx-3 lg:h-[490px] rounded-lg shadow-lg shadow-black lg:mt-20 mt-5",
};

const WeddingGift = () => {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "",
    bank: "",
    dibuat: Timestamp.now().toDate(),
  });
  // Create Comments

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.bank) {
      alert("Please fill in the blanks");
    }
    setFormData({
      nama: "",
      jumlah: "",
      bank: "",
    });
    await addDoc(collection(db, "transfer"), {
      nama: formData.nama,
      bank: formData.bank,
      jumlah: formData.jumlah,
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
      <div className="lg:mx-[174px] bg-bg-main bg-center bg-cover bg-no-repeat pb-8 pt-10">
        <div className="bg-secondary rounded-md lg:mx-10 mx-3 px-4 pb-6 border border-white">
          <Zoom duration={1000} triggerOnce={true}>
            <h1 className="font-mempelai text-white text-center pt-3 lg:pt-11 lg:text-8xl text-5xl">
              Wedding Gift
            </h1>
          </Zoom>
          <Zoom direction="in" duration={2000} delay={1000} triggerOnce={true}>
            <div className="font-secondary text-center text-white text-[22px] lg:text-[26px] lg:pt-10 pt-4">
              <p>
                Doa restu anda merupakan karunia yang sangat berarti bagi kami.
                Dan jika memberi adalah ungkapan tanda terimakasih anda, anda
                dapat memberi kado secara cashless
              </p>
            </div>
          </Zoom>
        </div>
        <SlideEffect duration={1500} delay={700} triggerOnce={true}>
          <div className={styles.card}>
            <Zoom
              direction="out"
              duration={2000}
              triggerOnce={true}
              className="flex justify-center items-center"
            >
              <img
                src={bca}
                alt=""
                className="lg:w-[290px] w-[100px] object-center"
              />
            </Zoom>
            <div className="bg-white h-[2px] mx-16 mb-4"></div>
            <div className="font-secondary text-center text-[20px] lg:text-[25px] text-white">
              <p>No. Rekening</p>
              <p className="lg:my-5 my-2">3520931863</p>
            </div>
            <div className="flex justify-center items-center">
              <CopyToClipboard text={"3520931863"}>
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
              Nola Azhar Sukma
            </p>
          </div>
        </SlideEffect>
        <SlideEffect duration={1500} delay={1000} triggerOnce={true}>
          <div className={styles.card}>
            <Zoom
              direction="out"
              duration={2000}
              triggerOnce={true}
              className="flex justify-center items-center"
            >
              <img
                src={dana}
                alt=""
                className="lg:w-[290px] w-[100px] mt-5 object-center"
              />
            </Zoom>
            <div className="bg-white h-[2px] mx-16 my-2 lg:my-6"></div>
            <div className="font-secondary text-center text-[20px] lg:text-[25px] text-white">
              <p>No. Dana</p>
              <p className="lg:my-5 my-2">085894318583</p>
            </div>
            <div className="flex justify-center items-center">
              <CopyToClipboard text={"085894318583"}>
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
              Nola Azhar Sukma
            </p>
          </div>
        </SlideEffect>
        <SlideEffect duration={1500} delay={1300} triggerOnce={true}>
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
                <p>Kp. Cigadog Rt/Rw 04/06</p>
                <p>Desa Bantar Kalong</p>
                <p>Kec. Warungkiara</p>
                <p>Kab. Sukabumi</p>
                <p>Penerima : Ida Rahmawati</p>
              </div>
            </div>
          </div>
        </SlideEffect>
        <Fade delay={1500} duration={2000} triggerOnce={true}>
          <div className="bg-white lg:mx-16 mx-3 shadow-md shadow-black mt-8 rounded-t-lg">
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 p-2 font-secondary text-[16px]"
            >
              <input
                type="text"
                placeholder="Nama"
                name="nama"
                required
                value={formData.nama}
                onChange={(e) => handleChange(e)}
                className="focus:outline-none focus:ring-1 px-1 focus:ring-primary rounded-md mb-2 py-1 border border-primary"
              />
              <input
                type="text"
                placeholder="Jumlah"
                name="jumlah"
                required
                value={formData.jumlah}
                onChange={(e) => handleChange(e)}
                className="focus:outline-none focus:ring-1 px-1 focus:ring-primary rounded-md mb-2 py-1 border border-primary"
              />
              <label className="">Rek. Tujuan</label>
              <div className="mb-3 xl:w-96">
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  name="bank"
                  required
                  value={formData.bank}
                  onChange={(e) => handleChange(e)}
                >
                  <option selected>Pilih Bank</option>
                  <option value="BCA">BCA</option>
                  <option value="DANA">DANA</option>
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
                number="+6285894318583"
                message={"Nama :\nJumlah :\nNama Bank : BCA or DANA"}
              >
                Whatsapp
              </ReactWhatsapp>
            </div>
          </div>
        </Fade>
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
