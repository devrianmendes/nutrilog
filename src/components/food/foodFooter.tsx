"use client";

import { IoCheckboxSharp } from "react-icons/io5";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";

import { RiDeleteBin2Line } from "react-icons/ri";
import deleteFood from "@/actions/food/deleteFood";
import { useEffect, useState } from "react";
import { useFood } from "@/context/foodContext";

type FooterProps = {
  status: string;
  public: boolean;
  publish: boolean;
  foodIndex: number;
};

export default function FoodFooter(props: FooterProps) {
  let statusValue: React.ReactNode;

  const {setUpdateList, updateList} = useFood();

  const handleDelete = async () => {
    console.log(props.foodIndex, " no front");
    const delResponse = await deleteFood(props.foodIndex);
    if (delResponse.ok) setUpdateList(!updateList);
  };

  switch (props.status) {
    case "approved":
      statusValue = <IoCheckboxSharp color="green" size={20} />;
      break;
    case "pending":
      statusValue = <BsExclamationTriangleFill color="orange" size={20} />;
      break;
    case "rejected":
      statusValue = <MdDangerous color="red" size={20} />;
      break;
    default:
      statusValue = <MdDangerous color="red" size={20} />;
  }

  return (
    <footer className="p-1 bg-stone-300 flex justify-between px-2">
      <div className="flex items-center justify-start w-full mr-0.5 ">
        {/* <Button buttonType="tertiary" extraClass="mr-0.5">
          Públicar
        </Button> */}
        <p className="mr-4 w-max flex items-center">
          Publicar:{" "}
          {props.publish ? (
            <IoCheckboxSharp color="green" size={20} />
          ) : (
            <MdDangerous color="red" size={20} />
          )}
        </p>
        <p className="mr-4 w-max flex items-center">Status: {statusValue}</p>
        <p className="mr-4 w-max flex items-center">
          Público:{" "}
          {props.public ? (
            <IoCheckboxSharp color="green" size={20} />
          ) : (
            <MdDangerous color="red" size={20} />
          )}
        </p>
      </div>
      <div onClick={handleDelete}>
        <RiDeleteBin2Line
          size={"1.8rem"}
          color={"#fafafa"}
          className="bg-midGreen w-12 p-1 hover:cursor-pointer hover:scale-110 duration-100"
        />
      </div>
    </footer>
  );
}
