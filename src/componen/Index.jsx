import React from "react";
import { useState } from "react";
import btth from "../assets/image/btth.jpeg";
import ds from "../assets/image/demons.jpeg";

function index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-teal-400 text-white p-4">
        <div>
          {/* Hamburger */}
          <button
            className="hover:cursor-pointer "
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              width="84"
              height="59"
              viewBox="0 0 84 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <path
                d="M4.5 0.0133352C3.94787 0.00552664 3.39969 0.107532 2.88732 0.313423C2.37495 0.519313 1.90862 0.824983 1.51541 1.21267C1.1222 1.60035 0.809968 2.06232 0.596853 2.57173C0.383737 3.08113 0.273991 3.62781 0.273991 4.18C0.273991 4.73219 0.383737 5.27887 0.596853 5.78828C0.809968 6.29768 1.1222 6.75965 1.51541 7.14734C1.90862 7.53502 2.37495 7.84069 2.88732 8.04658C3.39969 8.25247 3.94787 8.35448 4.5 8.34667H79.5C80.0521 8.35448 80.6003 8.25247 81.1127 8.04658C81.625 7.84069 82.0914 7.53502 82.4846 7.14734C82.8778 6.75965 83.19 6.29768 83.4031 5.78828C83.6163 5.27887 83.726 4.73219 83.726 4.18C83.726 3.62781 83.6163 3.08113 83.4031 2.57173C83.19 2.06232 82.8778 1.60035 82.4846 1.21267C82.0914 0.824983 81.625 0.519313 81.1127 0.313423C80.6003 0.107532 80.0521 0.00552664 79.5 0.0133352H4.5ZM4.5 25.0133C3.94787 25.0055 3.39969 25.1075 2.88732 25.3134C2.37495 25.5193 1.90862 25.825 1.51541 26.2127C1.1222 26.6004 0.809968 27.0623 0.596853 27.5717C0.383737 28.0811 0.273991 28.6278 0.273991 29.18C0.273991 29.7322 0.383737 30.2789 0.596853 30.7883C0.809968 31.2977 1.1222 31.7596 1.51541 32.1473C1.90862 32.535 2.37495 32.8407 2.88732 33.0466C3.39969 33.2525 3.94787 33.3545 4.5 33.3467H79.5C80.0521 33.3545 80.6003 33.2525 81.1127 33.0466C81.625 32.8407 82.0914 32.535 82.4846 32.1473C82.8778 31.7596 83.19 31.2977 83.4031 30.7883C83.6163 30.2789 83.726 29.7322 83.726 29.18C83.726 28.6278 83.6163 28.0811 83.4031 27.5717C83.19 27.0623 82.8778 26.6004 82.4846 26.2127C82.0914 25.825 81.625 25.5193 81.1127 25.3134C80.6003 25.1075 80.0521 25.0055 79.5 25.0133H4.5ZM4.5 50.0133C3.94787 50.0055 3.39969 50.1075 2.88732 50.3134C2.37495 50.5193 1.90862 50.825 1.51541 51.2127C1.1222 51.6004 0.809968 52.0623 0.596853 52.5717C0.383737 53.0811 0.273991 53.6278 0.273991 54.18C0.273991 54.7322 0.383737 55.2789 0.596853 55.7883C0.809968 56.2977 1.1222 56.7596 1.51541 57.1473C1.90862 57.535 2.37495 57.8407 2.88732 58.0466C3.39969 58.2525 3.94787 58.3545 4.5 58.3467H79.5C80.0521 58.3545 80.6003 58.2525 81.1127 58.0466C81.625 57.8407 82.0914 57.535 82.4846 57.1473C82.8778 56.7596 83.19 56.2977 83.4031 55.7883C83.6163 55.2789 83.726 54.7322 83.726 54.18C83.726 53.6278 83.6163 53.0811 83.4031 52.5717C83.19 52.0623 82.8778 51.6004 82.4846 51.2127C82.0914 50.825 81.625 50.5193 81.1127 50.3134C80.6003 50.1075 80.0521 50.0055 79.5 50.0133H4.5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="  flex justify-between items-center">
          {/* Logo */}
          <div>
            <svg
              width="3000"
              height="3000"
              viewBox="0 0 3000 3000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 "
            >
              <rect x="0.5" y="0.5" width="2999" height="2999" stroke="black" />
              <path
                d="M691.865 172C714.611 171.949 735.43 184.765 745.63 205.096L1349.13 1408.1C1358.35 1426.48 1357.52 1448.3 1346.92 1465.93C1336.31 1483.55 1317.42 1494.52 1296.86 1494.98L1098.86 1499.48C1075.33 1500.02 1053.66 1486.75 1043.45 1465.55L692.301 736.841L345.164 1465.31C335.211 1486.2 314.136 1499.5 291 1499.5H92.9999C72.2389 1499.5 52.9532 1488.77 42.0107 1471.12C31.0683 1453.48 30.0241 1431.44 39.2499 1412.84L638.25 205.337L638.731 204.387C649.007 184.56 669.475 172.05 691.865 172Z"
                fill="#FF6600"
                stroke="#FF6600"
              />
              <path
                d="M2611.62 313.383C2631.67 293.434 2661.75 287.509 2687.87 298.363C2713.98 309.218 2731 334.721 2731 363.002V2517.86C2731 2556.52 2699.66 2587.86 2661 2587.86H2416.84C2378.18 2587.86 2346.84 2556.52 2346.84 2517.86V1131.16L656.393 2748.58C636.139 2767.96 606.277 2773.39 580.5 2762.37C554.722 2751.36 538 2726.03 538 2698V1378.38C538 1339.72 569.34 1308.38 608 1308.38H824.442C863.102 1308.38 894.442 1339.72 894.442 1378.38V2022.16L2611.62 313.383Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M1885 2018C2017.55 2018 2125 2125.45 2125 2258C2125 2390.55 2017.55 2498 1885 2498C1752.45 2498 1645 2390.55 1645 2258C1645 2125.45 1752.45 2018 1885 2018Z"
                fill="#FF6600"
                stroke="#FF6600"
                stroke-width="20"
              />
            </svg>
          </div>
          {/* <div className="text-xl font-bold">MyLogo</div> */}

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 ml-4 rounded  border-1 focus:outline-none border-black bg-white text-black "
          />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button className="mb-4" onClick={() => setSidebarOpen(false)}>
          Close
        </button>
        <ul>
          <li className="py-2">Home</li>
          <li className="py-2">About</li>
          <li className="py-2">Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-vlue-300 border-2 rounded-lg p-1 hover:scale-110 cursor-pointer duration-300">
            <div className="w-full aspect-[3/4]">
              <img
                src={ds}
                alt=""
                className="w-full h-full rounded-t-lg object-cover"
              />
            </div>
            <div className="mt-1 flex flex-col text-left">
              <h1 className="text-2xl font-bold mb-1">Main Content</h1>
              <div className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 32 32"
                  className="w-8 h-8"
                >
                  <path
                    fill="#FCD53F"
                    d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"
                  />
                </svg>
                <p>7.893</p>
              </div>
              <p className="">Here goes your page content...</p>
            </div>
          </div>
          <div className="bg-vlue-300 border-2 rounded-lg p-1 hover:scale-110 cursor-pointer duration-300">
            <div className="w-full aspect-[3/4]">
              <img
                src={btth}
                alt=""
                className="w-full h-full rounded-t-lg object-cover"
              />
            </div>
            <div className="mt-1 flex flex-col text-left">
              <h1 className="text-2xl font-bold mb-1">Main Content</h1>
              <div className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 32 32"
                  className="w-8 h-8"
                >
                  <path
                    fill="#FCD53F"
                    d="m18.7 4.627l2.247 4.31a2.27 2.27 0 0 0 1.686 1.189l4.746.65c2.538.35 3.522 3.479 1.645 5.219l-3.25 2.999a2.225 2.225 0 0 0-.683 2.04l.793 4.398c.441 2.45-2.108 4.36-4.345 3.24l-4.536-2.25a2.282 2.282 0 0 0-2.006 0l-4.536 2.25c-2.238 1.11-4.786-.79-4.345-3.24l.793-4.399c.14-.75-.12-1.52-.682-2.04l-3.251-2.998c-1.877-1.73-.893-4.87 1.645-5.22l4.746-.65a2.23 2.23 0 0 0 1.686-1.189l2.248-4.309c1.144-2.17 4.264-2.17 5.398 0Z"
                  />
                </svg>
                <p>7.893</p>
              </div>
              <p className="">Here goes your page content...</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-400 text-white p-4 text-center">
        &copy; 2025 My Website
      </footer>
    </div>
  );
}

export default index;
