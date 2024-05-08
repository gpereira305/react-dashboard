import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrinmitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import eCommerceBg from "../data/welcome-bg.svg";
export default function Ecommerce() {
  return (
    <div className="m-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 bg-no-repeat bg-cover bg-center p-4"
          style={{ backgroundImage: `url(${eCommerceBg})` }}
        >
          <article>
            <h2 className="font-bold  text-gray-500 text-base">Ganhos</h2>
            <p className="text-2xl text-black">R$78,438</p>
          </article>

          <Button
            color="white"
            bgColor="blue"
            text="Baixar"
            borderRadius="10px"
            size="md"
          />
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl cursor-pointer w-max"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                key={item.id}
                type="button"
              >
                {item.icon}
              </button>
              <p className="text-lg font-semibold">
                {item.amount}
                <span className={`text-${item.pcColor} text-sm ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <small className="text-sm text-gray-400 font-medium mt-1">
                {item.title}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
