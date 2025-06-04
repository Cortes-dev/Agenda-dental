import { motion } from "framer-motion";

const items = [
  { icon: "🦷", x: "5%", y: "10%", size: "text-5xl", anim: "float" },
  { icon: "🪥", x: "80%", y: "25%", size: "text-4xl", anim: "rotate" },
  { icon: "📅", x: "25%", y: "65%", size: "text-6xl", anim: "float" },
  { icon: "🧤", x: "70%", y: "10%", size: "text-5xl", anim: "pulse" },
  { icon: "🪡", x: "55%", y: "55%", size: "text-3xl", anim: "float" },
  { icon: "🔍", x: "15%", y: "80%", size: "text-4xl", anim: "rotate" },
  { icon: "🦷", x: "90%", y: "70%", size: "text-5xl", anim: "pulse" },
  { icon: "🪥", x: "40%", y: "20%", size: "text-4xl", anim: "float" },
  // NUEVOS ÍCONOS
  { icon: "📋", x: "12%", y: "30%", size: "text-3xl", anim: "pulse" },
  { icon: "📞", x: "60%", y: "15%", size: "text-4xl", anim: "rotate" },
  { icon: "🧼", x: "75%", y: "80%", size: "text-5xl", anim: "float" },
  { icon: "🪥", x: "35%", y: "75%", size: "text-3xl", anim: "pulse" },
  { icon: "🦷", x: "20%", y: "5%", size: "text-6xl", anim: "rotate" },
  { icon: "💬", x: "50%", y: "90%", size: "text-4xl", anim: "float" },
  { icon: "🖥️", x: "88%", y: "40%", size: "text-3xl", anim: "pulse" },
];

const FondoAnimado = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {items.map((item, index) => {
        let animationProps = {};

        switch (item.anim) {
          case "float":
            animationProps = {
              animate: { y: [0, -12, 12, 0] },
              transition: {
                duration: 12 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            };
            break;
          case "rotate":
            animationProps = {
              animate: { rotate: [0, 360] },
              transition: {
                duration: 30 + index * 2,
                repeat: Infinity,
                ease: "linear",
              },
            };
            break;
          case "pulse":
            animationProps = {
              animate: { scale: [1, 1.1, 1] },
              transition: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            };
            break;
        }

        return (
          <motion.div
            key={index}
            className={`absolute ${item.size} opacity-40 select-none`}
            style={{ left: item.x, top: item.y }}
            {...animationProps}
          >
            {item.icon}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FondoAnimado;
