import { motion } from "framer-motion";

const LanguageProgress = () => {
  const languages = [
    { language: "MongoDB", proficiency: 55, bgColor: "#4db33d" },
    { language: "Express", proficiency: 70, bgColor: "#333333" },
    { language: "React", proficiency: 90, bgColor: "#61dbfb" },
    { language: "Node.Js", proficiency: 75, bgColor: "#3c873a" },
    { language: "Next.Js", proficiency: 90, bgColor: "#232c61" },
    { language: "JavaScript", proficiency: 95, bgColor: "#f0db4f" },
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
