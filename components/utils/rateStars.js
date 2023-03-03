import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RateStars = ({ rate = 5, count }) => {
  return (
    <>
      <span className="flex items-center p-1">
        {[...Array(rate)].map((item, index) => (
          <AiFillStar key={index} className="text-yellow-400" />
        ))}
        {[...Array(5 - rate)].map((item, index) => (
          <AiOutlineStar key={index} className="text-yellow-400" />
        ))}
        <span className="p-2 text-gray-600 text-sm">({count})</span>
      </span>
    </>
  );
};

export default RateStars;
