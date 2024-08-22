const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] text-richblack-25 h-[300px] box-border cursor-pointer
                     ${
                       currentCard === cardData.heading
                         ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
                         : "bg-richblack-800"
                     }  `}
      onClick={() => setCurrentCard(cardData.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>
        <div className="text-richblack-400">{cardData.description}</div>
      </div>
    </div>
  );
};

export default CourseCard;
