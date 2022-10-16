import { HelmetImg } from "./helmet";
import cn from "classnames";

const Item = ({ item, index, choosenUser }) => {
  const timeConvert = () => {
    let minutes = Math.floor(item.time / 60);
    let seconds = Number(item.time - minutes * 60).toFixed(3);
    return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 6);
  };

  const str_pad_left = (string, pad, length) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  };

  return (
    <>
      <span
        className={cn(
          "p-2 mx-2 font-semibold text-lg group-hover:text-violet-400 min-w-[50px]",
          index === choosenUser && "text-violet-400"
        )}
      >
        {index}
      </span>
      <span className="p-2">
        <HelmetImg color={item.color} choosenUser={index === choosenUser} />
      </span>
      <span className="p-2">
        <h4 className="font-semibold truncate">{item.name}</h4>
        <span className="text-violet-400 mr-2">{timeConvert()}</span>
        <span className="text-blue-600 font-bold">|</span>
        <span className="text-blue-600"> {item.speed} км/год</span>
        <div
          className={cn(
            "text-gray-500 group-hover:text-orange-300",
            index === choosenUser && "text-orange-300"
          )}
        >
          штрафний час 00:00.00
        </div>
      </span>
    </>
  );
};

export default Item;
