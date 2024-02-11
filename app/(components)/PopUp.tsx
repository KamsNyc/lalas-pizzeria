'use client'
import React, { useState } from 'react';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';


const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  const handleClose = () => {
    setShowPopUp(false);
  };

  const handleReopen = () => {
    setShowPopUp(true);
  };

  return (
    <>
      {showPopUp && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start uppercase">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div className="space-y-[-20px]">
                    <h3 className="text-lg leading-6 font-bold text-[#FE0000] mb-4">Super Bowl 2024 Deals</h3>
                    <h2 className='font-bold'>CALL TODAY (347) 426-5287</h2>
                    </div>
                    <ul className="divide-y divide-gray-200">
                      <li className="py-2 pt-4">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>Field Goal Feast</span> - 1 large cheese pie, 12pc wings, and a 2-liter soda $35</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>First Down</span> - 2 medium Cheese Pie, 12PC wings, 6pc garlic knots, and a 2-liter soda $48</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>Double Play</span> - 2 large CHEESE PIE /w one topping each, 12pc wings, 6pc garlic knots, and a 2-liter soda $60</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>Touchdown</span> - 4 large cheese pie, and Two 2-liter soda $70</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>Special Pizza</span> - 4 large SPECIAL pie,  and Two 2-liter soda $85</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>End Zone</span> - 3 large CHEESE pie, 18pc wings, 6pc Mozzarella sticks and Two 2-liter soda $85</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>Grand Slam</span> - 5 LARGE CHEESE PIES, 30PC WINGS, 24PC GARLIC KNOTS, 12PC MOZZARELLA STICKS, THREE 2-LITER SODA $150</p>
                      </li>
                      <li className="py-2">
                        <p className="text-gray-700"><span className='text-[#FE0000] font-medium'>MVP</span> - 5 LARGE SPECIAL PIES, 30PC WINGS, 24PC GARLIC KNOTS, 12PC MOZZARELLA STICKS, THREE 2-LITER SODA $170</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={handleClose} type="button" className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#FE0000] text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!showPopUp && (
        <div
          className="fixed bottom-4 right-4 z-50 cursor-pointer text-yellow-400 animate-bounce"
          onClick={handleReopen}
        >
          <div className="bg-red-500 w-[50px] h-[50px] rounded-full flex items-center justify-center ">
            <SportsFootballIcon fontSize="large" />
          </div>
        </div>
      )}
    </>
  );
}

export default PopUp;
