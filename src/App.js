import { MdAddCircle } from "react-icons/md";
import CoinsTable from "./Components/CoinsTable";
import './main.css';

function App() {
  return (
    <div className='main'
      // style={{
      //   backgroundImage: `${url('background.png')} `,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      // }}
      // className=" bg-black opacity-90 bg-[url('background.png')]"
    >
      {/* image fill whole */}
      {/* <img
        src="background.png"
        alt="background"
        className="absolute left-0 right-0 bottom-auto my-auto w-full h-full"
      /> */}

      <img
        src="Logo_2.png"
        alt="Logo_2"
        className="absolute mx-auto right-0 left-0 mt-28 h-52 object-cover"
      />
      <div className="absolute mx-auto right-10 left-10 flex flex-col bg-[#a59c9c] bg-opacity-10 gap-10 my-10 rounded-xl border-2 border-gray-500">
        <div className="flex flex-col items-center justify-between px-12 pt-12 md:flex md:flex-row ">
          <div className="flex items-center gap-4 ">
            <p className="text-amber-400 underline cursor-pointer">Deposit</p>
            <p className="text-amber-400 underline cursor-pointer">Withdraw</p>
          </div>
          <p className="text-amber-400 underline cursor-pointer">
            Transcation History
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:gap-0 md:flex md:flex-row md:flex-wrap px-12">
          {/* Estimated Balance */}
          <div className="flex flex-col bg-slate-500 bg-opacity-10 w-80 rounded-lg border-amber-400 border py-6 px-3 gap-6 ">
            <p className="text-amber-400 font-semibold text-xl underline underline-offset-8 decoration-slate-50/10 ">
              Estimated Balance
            </p>
            <div className="flex items-center mb-3 gap-3">
              <p className="text-white text-lg font-semibold tracking-wider">
                0.00305251 BTC
              </p>
              <p className="text-slate-200 text-lg font-semibold tracking-wider">
                ≈ $119.11
              </p>
            </div>
          </div>
          <div className="flex flex-col h-full items-center gap-20 md:flex md:flex-row">
            {/* Spot Balance */}
            <div className="flex flex-col w-70 bg-slate-500 bg-opacity-10 rounded-lg border-amber-400 border py-6 px-3 gap-6">
              <p className="text-amber-400 text-xl font-semibold underline underline-offset-8 decoration-slate-50/10 ">
                Spot Balance
              </p>
              <div className="flex items-center mb-3 gap-3 ">
                <p className="text-white text-lg font-semibold tracking-wider">
                  0.00305251 BTC
                </p>
                <p className="text-slate-200 text-lg font-semibold tracking-wider">
                  ≈ $119.11
                </p>
              </div>
            </div>
            {/* Fiat Balance */}
            <div className="flex flex-col w-70 bg-slate-500 bg-opacity-10 rounded-lg border-amber-400 border py-6 px-3 gap-6">
              <div className="flex items-center">
                <p className="text-amber-400 font-semibold text-xl underline underline-offset-8 decoration-slate-50/10 ">
                  Fiat Balance
                </p>
                <MdAddCircle className="fill-amber-400 cursor-pointer" />
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
        <div className="flex flex-col w-full divide-y divide-slate-50 divide-opacity-20">
          <div className="flex "></div>
          <CoinsTable />
        </div>
      </div>
    </div>
  );
}

export default App;
