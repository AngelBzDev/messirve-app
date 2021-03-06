import Image from "../utilities/Image";
import logo from "../../images/logo.svg";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Image src={logo} alt="logo" width={200} />
      <span className="loader"></span>
    </div>
  );
};

export default LoadingScreen;
