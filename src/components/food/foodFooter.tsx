import { IoCheckboxSharp } from "react-icons/io5";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";
import Button from "../ui/button";

export default function FoodFooter() {
  return (
    <footer className="p-1 bg-stone-300">

        <div className="flex items-center justify-center w-full mr-0.5 ">
          <Button extraClass="mr-0.5">Públicar</Button>
          {/* <span>
            <IoCheckboxSharp color="green" />
          </span>
          <span>
            <BsExclamationTriangleFill color="orange" />
          </span>
          <span>
            <MdDangerous color="red" />
          </span> */}
          <Button extraClass="ml-0.5">Apagar</Button>
        </div>

    </footer>
  );
}
