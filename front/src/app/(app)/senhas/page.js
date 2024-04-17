"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Senha() {
  const [senhas, setSenhas] = useState([]);

  function criarArray(numeroInicial, numeroFinal) {
    if (numeroFinal <= numeroInicial || senhas.length > 0) {
      throw new Error("O número final deve ser maior que o número inicial");
    }

    const array = [];

    for (let i = numeroInicial; i <= numeroFinal; i++) {
      array.push({
        id: i,
        number: `${i}`,
        status: "disable",
      });
    }

    setSenhas(array);
    return array;
  }

  function finalizadas(numeroInicial, numeroFinal) {
    if (numeroFinal <= numeroInicial || senhas.length > 0) {
      throw new Error("O número final deve ser maior que o número inicial");
    }

    const array = [];

    for (let i = numeroInicial; i <= numeroFinal; i++) {
      array.push({
        id: i,
        number: `${i}`,
        status: "disable",
      });
    }

    setSenhas(array);
    return array;
  }

  useEffect(() => {
    criarArray(1, 100);
  }, []);

  const removeItem = (array, item) => {
    const newArray = array.map((objeto) => {
      if (objeto.number === item.number) {
        return {
          id: parseInt(item.number),
          number: item.number,
          status: "finalizada",
        };
      }
      return objeto;
    });

    setSenhas(newArray);
  };

  const ActiveItem = (array, item) => {
    const newArray = array.map((objeto) => {
      if (objeto.number === item.number) {
        return {
          id: parseInt(item.number),
          number: item.number,
          status: "active",
        };
      }
      return objeto;
    });

    console.log(newArray);

    setSenhas(newArray);
  };

  const [senhaOpen, setSenhaopen] = useState(true);
  const tabs = [
    { name: "Fila", href: "#", count: "52", current: true },
    { name: "Cncluidos", href: "#", count: "4", current: false },
  ];

  console.log(senhas);

  const cancelButtonRef = useRef(null);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center  mt-5">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Seus Videos
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Gerencie seus videos, adicione remova ou ordene.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Adicionar
          </button>
        </div>
      </div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href="#"
                  className={classNames(
                    tab.current
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                    "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  {tab.name}
                  {tab.count ? (
                    <span
                      className={classNames(
                        tab.current
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-gray-100 text-gray-900",
                        "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                      )}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className=" flex flex-row flex-wrap gap-3 w-[90%] mt-8 ">
        {senhas.length > 0 &&
          senhas.map(
            (item, key) =>
              item.status !== "finalizada" && (
                <button
                  onDoubleClick={() => removeItem(senhas, item)}
                  onClick={() => ActiveItem(senhas, item)}
                  className={
                    item.status == "active"
                      ? `!bg-green-500 !w-24 !h-24`
                      : `w-24 h-24 bg-red-500`
                  }
                  key={key}
                >
                  {item.number}
                </button>
              )
          )}
      </div>
    </div>
  );
}
