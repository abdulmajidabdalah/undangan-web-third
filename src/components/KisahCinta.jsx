import React from "react";
import { RiHeartsFill } from "react-icons/ri";
import img from "../assets/tunangan.jpeg"
import {Zoom, Slide} from 'react-awesome-reveal'

export const styleHeading =
  "bg-primary lg:h-[120px] flex justify-center items-center font-mempelai lg:text-[80px] py-2 leading-relaxed text-white text-3xl border-t-4 border-b-4 border-dotted border-white";

const styles = {
  border:
    "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700",
  card: "ml-6 mb-10 block max-w-md rounded-tl-2xl rounded-br-2xl bg-white/30 backdrop-brightness-50 text-white p-6 shadow-lg shadow-black border-2 border-white",
  textHeading: "mb-4 flex justify-between font-bold",
  icon: "text-[#FF597B]",
  bodyText: "mb-6 text-primary",
};

const KisahCinta = () => {
  return (
    <>
      <div className={styleHeading}>
        <Slide direction="left" duration={2000} triggerOnce={true}>
        <p>Kisah Perjalanan Cinta</p>
        </Slide>
      </div>
      <div className="lg:mx-[174px] px-4 bg-bg-main bg-center bg-no-repeat bg-cover bg-fixed py-8 flex justify-center items-center">
        <ol className="border-l-2 border-info-100">
          <li>
            <div className="flex-start md:flex">
              <div className={styles.border}>
                <RiHeartsFill size={30} className={styles.icon} />
              </div>
              <div className={styles.card}>
                <div className={styles.textHeading}>
                  <h1>Awal Pertemuan</h1>
                  <h1>00 / 00 / 2018</h1>
                </div>
                <Zoom direction="in" duration={2000} triggerOnce={true} className={styles.bodytext}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  minus ut incidunt vel necessitatibus. Repellat alias eum quis
                  nostrum temporibus numquam exercitationem debitis nulla?
                  Laudantium quam quasi totam quis id.
                </Zoom>
              </div>
            </div>
          </li>
          <li>
            <div className="flex-start md:flex">
              <div className={styles.border}>
                <RiHeartsFill size={30} className={styles.icon} />
              </div>
              <div className={styles.card}>
                <div className={styles.textHeading}>
                  <h1>Tunangan</h1>
                  <h1>17 / 02 / 2021</h1>
                </div>
                <Zoom direction="in" duration={2000} delay={1000} triggerOnce={true} className="mb-3">
                <img src={img} alt="tunangan" className="object-cover object-center rounded-tl-3xl rounded-br-3xl border border-white"/>
                </Zoom>
                <p className={styles.bodytext}>
                  Tepat pada 17 Februari 2021 kami memutuskan untuk bertunangan.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex-start md:flex">
              <div className={styles.border}>
                <RiHeartsFill size={30} className={styles.icon} />
              </div>
              <div className={styles.card}>
                <div className={styles.textHeading}>
                  <h1>Menikah</h1>
                  <h1>09 / 07 / 2023</h1>
                </div>
                <Zoom direction="in" duration={2000} delay={1500} triggerOnce={true} className={styles.bodytext}>
                 Dan pada akhirnya kami sampailah ke titik dimana yang kami harapkan dari awal menjalani hubungan, yaitu ke jenjang pernikahan. Semoga setelah kami menikah nanti bisa menjadi keluarga yang sakinah mawadah warrahmah. Amiin amiin yaallah yarrabbal'alamiin.  
                </Zoom>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default KisahCinta;
