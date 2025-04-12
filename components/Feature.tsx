import { Instagram } from "lucide-react";
import React, { useState } from "react";

const Feature = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    {
      id: 1,
      title: "Advanced tools",
      description:
        "Use Preline thoroughly thought and automated libraries to manage your businesses.",
      icon: (
        <Instagram/>
      ),
      image:
        "https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?auto=format&fit=crop&w=560&h=720&q=80",
    },
    {
      id: 2,
      title: "Smart dashboards",
      description:
        "Quickly Preline sample components, copy-paste codes, and start right off.",
      icon: (
        <Instagram/>
      ),
      image:
        "https://images.unsplash.com/photo-1665686306574-1ace09918530?auto=format&fit=crop&w=560&h=720&q=80",
    },
    {
      id: 3,
      title: "Powerful features",
      description:
        "Reduce time and effort on building modern look design with Preline only.",
      icon: (
        <Instagram/>
      ),
      image:
        "https://images.unsplash.com/photo-1598929213452-52d72f63e307?auto=format&fit=crop&w=560&h=720&q=80",
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-24 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-5xl text-4xl font-bold  mb-4 text-gray-900">
            Advance Feature of AI
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-md
           text-gray-500 font-medium">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
            farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies
            heirloom prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
              Fully customizable rules to match your unique needs
            </h2>
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              {tabData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl transition-all ${
                    activeTab === tab.id
                      ? "bg-white shadow-md border-transparent"
                      : ""
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  <span className="flex gap-x-6">
                    <span
                      className={`${
                        activeTab === tab.id ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {tab.icon}
                    </span>
                    <span className="grow">
                      <span
                        className={`block text-lg font-semibold ${
                          activeTab === tab.id
                            ? "text-blue-600"
                            : "text-gray-800"
                        }`}
                      >
                        {tab.title}
                      </span>
                      <span className="block mt-1 text-gray-800">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                {tabData.map((tab) => (
                  <div
                    key={tab.id}
                    className={
                      activeTab === tab.id ? "block" : "hidden"
                    }
                    role="tabpanel"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl"
                      src={tab.image}
                      alt={tab.title}
                    />
                  </div>
                ))}
              </div>

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;