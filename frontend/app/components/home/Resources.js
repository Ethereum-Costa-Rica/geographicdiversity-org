import Link from "next/link";
import React from "react";
import { useCustomTheme } from "../../hooks/useCustomTheme";

const Resources = () => {
  const resolvedTheme = useCustomTheme();
  const listColor = resolvedTheme === "light" ? "black" : "white";

  return (
    <div className="py-[7rem] w-full lg:w-[80%] mx-auto">
      <h1 className="text-[32px] md:text-[40px] leading-[35px] font-[800] opacity-90 text-center mb-[3rem]">
        Resources
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[2rem]">
        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Tools</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://hackmd.io/@jyeAs_6oRjeDk2Mx5CZyBw/awesome-ethereum-staking"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">
                Awesome Ethereum Staking Resources
              </li>
            </Link>
            <Link
              href="https://stereum.net/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Stereum</li>
            </Link>
            <Link
              href="https://eth-docker.net/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Eth-Docker</li>
            </Link>
            <Link
              href="https://github.com/attestantio/vouch"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Vouch</li>
            </Link>
            <Link
              href="https://github.com/ethereum/keymanager-APIs"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Keymanager APIs</li>
            </Link>
            <Link
              href="https://kotal.co/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Kotal</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Metrics</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://monitoreth.io/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Miga Labs Dashboard</li>
            </Link>
            <Link
              href="https://nodewatch.io/"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Chainsafe Nodewatch</li>
            </Link>
            <Link
              href="https://ethernodes.org/countries"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Ethernodes (by country)</li>
            </Link>
            <Link
              href="https://www.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&poolType=all"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">
                Rated.Network Validator Ratings
              </li>
            </Link>
            <Link
              href="https://etherscan.io/nodetracker"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">
                Ethereum Node Tracker
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h2 className="text-[20px] font-[600] opacity-90">Research</h2>
          <ul className="flex flex-col gap-[5px]">
            <Link
              href="https://ethresear.ch/t/estimating-validator-decentralization-using-p2p-data/19920"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[7px] h-[7px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">Estimating validator decentralization</li>
            </Link>
            <Link
              href="https://arxiv.org/pdf/2305.17771"
              target="_blank"
              className="flex items-center gap-[10px]"
            >
              <div
                className={`w-[8px] h-[8px] rounded-full bg-${listColor}`}
              ></div>
              <li className="text-blue-600 underline">
                Analyzing Geospatial Distributions in Blockchains
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
