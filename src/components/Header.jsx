import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const Header = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("July 09, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div
        className="lg:mx-[174px] bg-center bg-no-repeat bg-bg-main bg-cover bg-fixed py-2"
        id="home"
      >
        <div className="bg-white/30 backdrop-blur-xl mx-2 rounded-lg pb-4">
          <p className="font-secondary text-center text-2xl pt-4 lg:pt-[70px]">
            The Wedding Of
          </p>
          <div className="flex justify-center items-center">
            <Fade delay={1e3} cascade damping={1e-1} triggerOnce={true} className="font-mempelai text-center text-3xl lg:text-6xl mt-4 lg:mt-10">
              Yosep Ramdani & Sri Kartini
            </Fade>
          </div>
          <p className="font-secondary text-center text-2xl mt-4 lg:mt-5">
            09 Juli 2023
          </p>
        </div>
        <Zoom direction="in" fraction={1} delay={1500} triggerOnce={true}>
          <div className="grid grid-cols-4 gap-4 px-4 lg:px-32 mt-4 lg:mt-[35px]">
            <div className="bg-[#9E795E] flex justify-center items-center h-[80px] lg:h-[103px] rounded-lg">
              <div className="text-center font-button-cover text-white">
                <p className="lg:text-[50px] text-[35px] leading-[40px] lg:leading-[65px]">
                  {timerDays}
                </p>
                <p className="text-[18px] leading-[18px]">Hari</p>
              </div>
            </div>
            <div className="bg-[#9E795E] flex justify-center items-center h-[80px] lg:h-[103px] rounded-lg">
              <div className="text-center font-button-cover text-white">
                <p className="lg:text-[50px] text-[35px] leading-[40px] lg:leading-[65px]">
                  {timerHours}
                </p>
                <p className="text-[18px] leading-[18px]">Jam</p>
              </div>
            </div>
            <div className="bg-[#9E795E] flex justify-center items-center h-[80px] lg:h-[103px] rounded-lg">
              <div className="text-center font-button-cover text-white">
                <p className="lg:text-[50px] text-[35px] leading-[40px] lg:leading-[65px]">
                  {timerMinutes}
                </p>
                <p className="text-[18px] leading-[18px]">Menit</p>
              </div>
            </div>
            <div className="bg-[#9E795E] flex justify-center items-center h-[80px] lg:h-[103px] rounded-lg">
              <div className="text-center font-button-cover text-white">
                <p className="lg:text-[50px] text-[35px] leading-[40px] lg:leading-[65px]">
                  {timerSeconds}
                </p>
                <p className="text-[18px] leading-[18px]">Detik</p>
              </div>
            </div>
          </div>
        </Zoom>
        <article className="lg:px-[5rem] px-4 font-normal font-secondary text-white text-[26px] leading-[30px] mt-4 lg:mt-[58px] mx-2 rounded-lg py-2 backdrop-brightness-50 bg-white/30">
          <Zoom direction="in" triggerOnce={true} delay={2000}>
            <p
              align="justify"
              className="text-center lg:text-current text-[22px]"
            >
              " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
              pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan
              hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya
              yang demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang
              yang berpikir. "
            </p>
          </Zoom>
          <p className="lg:py-[24px] pb-8 pt-2 text-center lg:text-current text-[22px]">
            - Q.S. Ar-Rum: 21 -
          </p>
        </article>
      </div>
    </>
  );
};

export default Header;
