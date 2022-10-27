import React from "react";
import { useLoaderData } from "react-router-dom";

function Purchase() {
  const data = useLoaderData();

  return (
    <div className="mt-12">
      <div className="container">
        <h1 className="text-6xl font-medium text-center mb-12">{data.name}</h1>
        <section class="text-gray-400 bg-base-300 rounded-lg body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
                Purchase
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here you can choose your plan acording to your needs. Feel free
                to contact us if you have any custom requirements. We support
                24/7.
              </p>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
              <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                      Plan
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      People
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      Days
                    </th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                      Price
                    </th>
                    <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-3">Start</td>
                    <td class="px-4 py-3">5</td>
                    <td class="px-4 py-3">15 </td>
                    <td class="px-4 py-3 text-lg text-white">Free</td>
                    <td class="w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-gray-800 px-4 py-3">Pro</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">25</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">25</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $24
                    </td>
                    <td class="border-t-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-gray-800 px-4 py-3">
                      Business
                    </td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">36</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">40</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $50
                    </td>
                    <td class="border-t-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      Exclusive
                    </td>
                    <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      48
                    </td>
                    <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3">
                      120
                    </td>
                    <td class="border-t-2 border-b-2 border-gray-800 px-4 py-3 text-lg text-white">
                      $72
                    </td>
                    <td class="border-t-2 border-b-2 border-gray-800 w-10 text-center">
                      <input name="plan" type="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Buy
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Purchase;
