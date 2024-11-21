import { IoCheckboxSharp } from "react-icons/io5";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import deleteFood from "@/actions/food/deleteFood";

import { useFood } from "@/context/foodContext";

type FooterProps = {
  status: string;
  public: boolean;
  publish: boolean;
  foodIndex: number;
};

export default function FoodFooter(props: FooterProps) {
  let statusValue: React.ReactNode;

  const { setUpdateList, setEditFood, updateList, editFood } = useFood();

  const handleDelete = async () => {
    console.log(props.foodIndex, " no front");
    const delResponse = await deleteFood(props.foodIndex);
    if (delResponse.ok) setUpdateList(!updateList);
  };

  const handleEdit = async () => {
    console.log(editFood, "ta clicando");
    setEditFood(!editFood);
  };

  switch (props.status) {
    case "approved":
      statusValue = (
        <IoCheckboxSharp
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Aprovado."
          data-tooltip-place="top"
          color="green"
          size={20}
        />
      );
      break;
    case "pending":
      statusValue = (
        <BsExclamationTriangleFill
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Aprovação pendente."
          data-tooltip-place="top"
          color="orange"
          size={20}
        />
      );
      break;
    case "rejected":
      statusValue = (
        <MdDangerous
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Não aprovado."
          data-tooltip-place="top"
          color="red"
          size={20}
        />
      );
      break;
    default:
      statusValue = <MdDangerous color="red" size={20} />;
  }

  return (
    <footer className="p-1 bg-stone-300 flex justify-between px-2">
      <div className="flex items-start justify-start w-full mr-0.5 flex-col">
        <Tooltip id="my-tooltip" />
        <p className="mr-4 w-max flex items-center">
          Publicar:{" "}
          {props.publish ? (
            <IoCheckboxSharp
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Este alimento será publicado após aprovação."
              data-tooltip-place="top"
              color="green"
              size={20}
            />
          ) : (
            <MdDangerous
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Não será publicado."
              data-tooltip-place="top"
              color="red"
              size={20}
            />
          )}
        </p>
        <p className="mr-4 w-max flex items-center">Status: {statusValue}</p>
        <p className="mr-4 w-max flex items-center">
          Público:{" "}
          {props.public ? (
            <IoCheckboxSharp
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Publicado."
              data-tooltip-place="top"
              color="green"
              size={20}
            />
          ) : (
            <MdDangerous
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Não publicado."
              data-tooltip-place="top"
              color="red"
              size={20}
            />
          )}
        </p>
      </div>
      <div className="flex flex-col justify-around">
        <AiOutlineEdit
          onClick={handleEdit}
          size={"1.8rem"}
          color={"#fafafa"}
          className="bg-midGreen w-12 p-1 hover:cursor-pointer hover:scale-110 duration-100"
        />
        <RiDeleteBin2Line
          onClick={handleDelete}
          size={"1.8rem"}
          color={"#fafafa"}
          className="bg-midGreen w-12 p-1 hover:cursor-pointer hover:scale-110 duration-100"
        />
      </div>
    </footer>
  );
}
