import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { Copy, Check, ExternalLink } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function App() {
  const promoCode = "DISCORD20FH65L2R-R2W6-48FU";
  const [copied, setCopied] = useState(false);

  const notif1 = useRef(new Audio("/notif1.mp3"));
  const notif2 = useRef(new Audio("/notif2.mp3"));

  const playNotif1 = () => {
    notif1.current.pause();
    notif1.current.currentTime = 0;
    notif1.current.volume = 1;
    notif1.current.play().catch(() => { });
  };

  const playNotif2 = () => {
    notif2.current.pause();
    notif2.current.currentTime = 0;
    notif2.current.volume = 1;
    notif2.current.play().catch(() => { });
  };

  const photos = [
    "/profile1.jpg",
    "/profile2.jpg",
  ];

  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev === 0 ? 1 : 0));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const copyCode = async () => {
    playNotif1();

    await navigator.clipboard.writeText(promoCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center overflow-hidden px-6">

      <Particles
        className="absolute inset-0"
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.15,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
            move: {
              enable: true,
              speed: 0.4,
            },
            links: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />

      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.03] blur-[150px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[120px]"
        />
      </div>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative w-full max-w-md"
      >
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(255,255,255,0.05)]">

          {/* PROFILE */}
          <motion.div
            initial={{ y: -180, opacity: 0, scale: 0.4 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="flex flex-col items-center"
          >
            <motion.img
              key={currentPhoto}
              src={photos[currentPhoto]}
              alt="Profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 rounded-full object-cover border border-white/20"
            />

            <a
              href="https://www.instagram.com/jaendv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playNotif2}
              className="mt-4 text-zinc-400 hover:text-white transition"
            >
              @jaendv
            </a>
          </motion.div>

          {/* HEADER */}
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="text-center mt-8"
          >
            <p className="text-zinc-500 uppercase tracking-[4px] text-xs">
              Exclusive Reward
            </p>

            <div className="mt-3 text-3xl font-semibold text-white h-[40px] tracking-wide">
              <TypeAnimation
                sequence={[
                  "Xbox Design Lab",
                  2500,
                  "Discord Reward",
                  2500,
                  "Exclusive Promo",
                  2500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </div>

            <p className="mt-2 text-zinc-500">
              Discord Promo Code
            </p>
          </motion.div>

          {/* CODE BOX */}
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="mt-8"
          >
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">

              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-3">
                Promo Code
              </p>

              <code className="block break-all text-center text-white font-mono text-sm">
                {promoCode}
              </code>

            </div>

            <button
              onClick={copyCode}
              className="mt-4 w-full h-12 rounded-xl bg-white text-black font-medium flex items-center justify-center gap-2 transition hover:scale-[1.03]"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Code
                </>
              )}
            </button>
          </motion.div>

          {/* CLAIM BUTTON */}
          <motion.a
            href="https://aka.ms/DiscordXDL20"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playNotif2}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
            }}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/10 text-white transition hover:bg-white/5"
          >
            <ExternalLink size={18} />
            Claim Reward
          </motion.a>

          {/* FOOTER */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
            className="mt-8 border-t border-white/10 pt-5 text-center"
          >
            <a
              href="https://github.com/jejen-dev"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playNotif2}
              className="inline-flex items-center gap-2 text-xs tracking-wider text-zinc-500 hover:text-white transition"
            >
              gabut, codenya beneran kok muehe✌🏻
            </a>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}