"use client";

import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="lg:px-20 px-6 py-8 h-[100vh]">
      <div className="text-amber-950 mb-5">
        <h1 className="text-[1.2em] mb-5 font-semibold">
          {" "}
          ABRAHAM <br></br> Et <br></br> CHRISTBIRTH
        </h1>
        <div className="w-full">
          <video
            ref={videoRef}
            width="100%"
            height="60"
            muted={isMuted}
            controls
            loop
            className="h-[20em] w-full"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex justify-center mt-3">
          <button className="max-w-[25em]  bg-stone-900 rounded-md px-5 py-2 w-full text-white text-xs" onClick={toggleMute}>
            {" "}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>

        <div className="mt-5 text-sm">
          <p className="my-3">
            Dearest <strong> Abraham,</strong>
          </p>
          <p className="">
            It is my greatest pleasure to write this to you. In you, I&apos;ve found
            peace and joy; you&apos;ve been a profound influence in my life, my alter
            ego. You are a very special friend that I cherish. I just want to
            wish you a very happy birthday and pray that this day brings you
            endless joy and blessings. I love you so much babe, and I pray God
            keeps us together through any trials we may face. God bless you now and
            always.{" "}
          </p>
          <div className="my-3">
            <p className="">With all my love,</p>
            <p className="">
              <strong>Christbirth</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
