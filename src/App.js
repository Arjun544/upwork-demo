import { MdAddCircle } from "react-icons/md";
import CoinsTable from "./Components/CoinsTable";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-black overflow-hidden">
      {/* Add TopBar here */}
      <div className="flex flex-col flex-grow bg-black ">
        <img
          src="Logo_2.png"
          alt="Logo_2"
          className="absolute mx-auto right-0 left-0 mt-20 h-52 z-50 object-cover fill-white"
        />
        <div className="flex flex-col bg-gray-600 gap-10 m-10 rounded-xl">
          <div className="flex flex-col items-center justify-between px-12 pt-12 md:flex md:flex-row ">
            <div className="flex items-center gap-4 ">
              <p className="text-amber-400 underline cursor-pointer">Deposit</p>
              <p className="text-amber-400 underline cursor-pointer">
                Withdraw
              </p>
            </div>
            <p className="text-amber-400 underline cursor-pointer">
              Transcation History
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:gap-0 md:flex md:flex-row md:flex-wrap px-12">
            {/* Estimated Balance */}
            <div className="flex flex-col w-64 rounded-lg border-amber-400 border py-6 px-3 gap-2 ">
              <p className="text-amber-400 text-lg underline underline-offset-8 decoration-slate-50/10 ">
                Estimated Balance
              </p>
              <div className="flex items-center mb-3 gap-3">
                <p className="text-white text-lg font-semibold">
                  0.00305251 BTC
                </p>
                <p className="text-slate-200 text-lg font-semibold">
                  ≈ $119.11
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-14 md:flex md:flex-row md:mt-8">
              {/* Spot Balance */}
              <div className="flex flex-col w-64 rounded-lg border-amber-400 border py-6 px-3 gap-2">
                <p className="text-amber-400 text-lg underline underline-offset-8 decoration-slate-50/10 ">
                  Estimated Balance
                </p>
                <div className="flex items-center mb-3 gap-3 ">
                  <p className="text-white text-lg font-semibold">
                    0.00305251 BTC
                  </p>
                  <p className="text-slate-200 text-lg font-semibold">
                    ≈ $119.11
                  </p>
                </div>
              </div>
              {/* Fiat Balance */}
              <div className="flex flex-col w-64 rounded-lg border-amber-400 border py-6 px-3 gap-2">
                <div className="flex items-center">
                  <p className="text-amber-400 text-lg underline underline-offset-8 decoration-slate-50/10 ">
                    Fiat Balance
                  </p>
                  <MdAddCircle className="fill-amber-400" />
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <p className="text-white text-lg font-semibold">
                    0.00305251 BTC
                  </p>
                  <p className="text-slate-200 text-lg font-semibold">
                    ≈ $119.11
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="flex flex-col w-full divide-y divide-slate-50 divide-opacity-20">
            <div className="flex "></div>
            <CoinsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
