const data = [
  {
    heading: `Sun's Out, BOGO's Out`,
    text: "Through 8/26",
    buttonText: "Order Now",
    imgSource:
      "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    heading: `New Restaurants`,
    text: "Added Daily",
    buttonText: "Order Now",
    imgSource:
      "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    heading: `We Deliver Desserts Too`,
    text: "Tasty Treats",
    buttonText: "Order Now",
    imgSource:
      "https://images.pexels.com/photos/574111/pexels-photo-574111.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6">
      {/* Card */}
      {data.map((item, index) => (
        <div className="rounded-xl relative" key={index}>
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold px-2 pt-4 text-2xl">
              {item.heading}
            </p>
            <p className="px-2">{item.text}</p>
            <button className="border-white bg-white text-black absolute bottom-4 mx-2 font-bold">
              {item.buttonText}
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={item.imgSource}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
