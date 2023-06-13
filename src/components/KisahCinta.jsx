import React from "react";
import { RiHeartsFill } from "react-icons/ri";

export const styleHeading =
  "bg-primary lg:h-[120px] flex justify-center items-center font-mempelai lg:text-[80px] py-2 leading-relaxed text-white text-3xl border-t-4 border-b-4 border-dotted border-white";

const styles = {
  border:
    "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-info-100 text-info-700",
  card: "ml-6 mb-10 block max-w-md rounded-lg bg-white/30 backdrop-brightness-50 text-white p-6 shadow-lg shadow-black border-2 border-primary",
  textHeading: "mb-4 flex justify-between font-bold",
  icon: "text-[#FF597B]",
  bodyText: "mb-6 text-primary",
};

const KisahCinta = () => {
  return (
    <>
      <div className={styleHeading}>
        <p>Kisah Perjalanan Cinta</p>
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
                  <h1>04 / 02 / 2019</h1>
                </div>
                <p className={styles.bodytext}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  minus ut incidunt vel necessitatibus. Repellat alias eum quis
                  nostrum temporibus numquam exercitationem debitis nulla?
                  Laudantium quam quasi totam quis id.
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
                  <h1>Tunangan</h1>
                  <h1>04 / 02 / 2021</h1>
                </div>
                <p className={styles.bodytext}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  vitae tenetur molestiae architecto deleniti doloremque
                  similique soluta velit obcaecati ratione accusantium dolores
                  doloribus est mollitia, molestias aliquam. Et, eaque ullam?
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
                  <h1>20 / 04 / 2023</h1>
                </div>
                <p className={styles.bodytext}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus repudiandae, cumque voluptatem incidunt recusandae,
                  voluptas asperiores dolor illum soluta vel nulla facere. Rem
                  beatae tenetur saepe sint esse officiis repudiandae.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default KisahCinta;
