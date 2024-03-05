import { motion } from "framer-motion";

const LanguageProgress = () => {
  const languages = [
    { language: "MongoDB", proficiency: 70, bgColor: "#61dafb" },
    { language: "Express", proficiency: 65, bgColor: "#68a063" },
    { language: "React", proficiency: 90, bgColor: "#edf3d8" },
    { language: "Node.Js", proficiency: 82, bgColor: "#61dafb" },
    { language: "Next.Js", proficiency: 85, bgColor: "#ffabe7" },
    { language: "JavaScript", proficiency: 90, bgColor: "#2965f1" },
  ];

  return (
    <div className="max-w-md mb-8 max-xl:mx-auto">
      <h4 className="bold-28 mb-4 max-xl:text-center">
        Languages / Frameworks Proficiency
      </h4>
      <div className="flexStart flex-wrap max-xl:flexCenter">
        {languages.map((lang, index) => (
          <CircularProgress
            key={index}
            language={lang.language}
            proficiency={lang.proficiency}
            bgColor={lang.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

const CircularProgress = ({ language, proficiency, bgColor }) => {
  const radius = 20; //radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - proficiency / 100);

  return (
    <div>
      <svg className="w-24 h-24 mr-1" viewBox="0 0 50 50">
        <circle
          cx={"25"}
          cy={"25"}
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={"7"}
        />
        <motion.circle
          cx={"25"}
          cy={"25"}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={"4"}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: strokeDashoffset }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
        />
        <text
          x={"50%"}
          y={"50%"}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize={"6px"}
          fontWeight={"bold"}
        >
          {language}
        </text>
      </svg>
    </div>
  );
};

export default LanguageProgress;
