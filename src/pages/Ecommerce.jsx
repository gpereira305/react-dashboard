import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import eCommerceBg from "../data/welcome-bg.svg";

export default function Ecommerce() {
  return (
    <div className="my-12 mx-auto max-w-[1200px]">
      <div className="flex flex-col justify-center">
        <div
          className="flex flex-col justify-between bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  rounded-xl w-full bg-no-repeat bg-cover bg-center p-4 max-w-[720px]:min-h-[400px] min-h-[250px] h-[100%]"
          style={{ backgroundImage: `url(${eCommerceBg})` }}
        >
          <article>
            <h2 className="font-bold  text-gray-500 text-base">Ganhos</h2>
            <p className="text-2xl text-black">R$78,438</p>
          </article>

          <Button
            color="#fff"
            bgColor="purple"
            text="Baixar"
            borderRadius="10px"
            size="md"
            style={{ marginTop: "auto", width: "max-content" }}
          />
        </div>

        <ul className="grid grid-cols-gtc_basic my-8 justify-center gap-6 items-center">
          {earningData.map((item) => (
            <li
              className="flex flex-col bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full p-4 rounded-2xl min-h-[180px]"
              key={item.id}
            >
              <button
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl cursor-pointer w-max"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                type="button"
              >
                {item.icon}
              </button>
              <p className="text-lg font-semibold mt-auto">
                {item.amount}
                <span className={`text-${item.pcColor} text-sm ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <small className="text-sm text-gray-400 font-medium mt-1">
                {item.title}
              </small>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:secondary-dark-bg  rounded-2xl w-full xl:p-8 p-4">
          <div className="flex xl:flex-row flex-col xl:gap-0  gap-5 justify-between mb-12">
            <h2 className="font-semibold text-xl"> Atualizações de ganhos</h2>
            <div className="flex xl:items-center justify-between gap-4 ">
              <p className="flex items-center gap-2 text-gray-500 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                Despesas
              </p>
              <p className="flex items-center gap-2 text-green-500 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                Orçamento
              </p>
            </div>
          </div>

          <div className="flex gap-10 justify-center flex-col xl:flex-row">
            <div className="border-r-1 border-color pr-10 w-full flex-1">
              <div className="mb-12">
                <p className="flex items-center gap-2 text-gray-800 mb-1">
                  <span className="text-3xl font-semibold">R$93,438</span>
                  <span className="p-1-5 hover:drop-shadow-xl cursor-pointer font-semibold rounded-full bg-green-400 text-white text-xs px-2.5 py-1">
                    26%
                  </span>
                </p>
                <p className="text-gray-400 font-semibold text-sm">Orçamento</p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-gray-800 mb-1">
                  <span className="text-3xl font-semibold">R$72,521</span>
                </p>
                <p className="text-gray-400 font-semibold text-sm">Despesas</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />

                <div className="mt-10">
                  <Button
                    color="#fff"
                    bgColor="blue"
                    text="Baixar relatório"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
