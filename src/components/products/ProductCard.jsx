import { useNavigate } from "react-router-dom";

import Image from "../utilities/Image";

const ProductCard = ({ name, price, image, id }) => {
  const navigate = useNavigate();

  const handleClickProduct = () => {
    navigate(`product/${id}`);
  };

  return (
    <div
      className="w-full p-4 mx-auto duration-200 bg-white border cursor-pointer border-gray2 rounded-xl h-fit hover:-translate-y-1"
      onClick={handleClickProduct}
    >
      <Image src={image} className="mb-2" />
      <div className="flex flex-col items-center justify-between ">
        <h4 className="text-base font-semibold underline md:text-xl underline-offset-4">
          {name}
        </h4>
        <div className="mt-3">
          <p className="text-xl font-bold text-blue md:text-2xl">
            $ <span className="text-black">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
