import React, { useState } from "react";

export default function BrokenDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-yellow-100 min-h-screen text-pink-600 p-6 font-mono overflow-x-auto">
      <h1 className="text-3xl text-center mb-2">🛠 Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <button className="bg-pink-200 hover:bg-pink-300 text-xl py-6 px-4 w-24 h-12">
          Click
        </button>
        <button className="bg-pink-200 hover:bg-pink-300 text-xl p-3 rounded text-pink-100">
          Or Click
        </button>
        <button
          className="bg-pink-200 hover:bg-pink-300 text-xl py-6 px-4 w-12 h-24"
          onClick={() => setIsModalOpen(true)}
        >
          ☰
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-2">Modal Menu</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Option One</li>
              <li>Option Two</li>
              <li>Option Three</li>
            </ul>
            <button
              className="mt-4 bg-pink-300 px-4 py-2 rounded"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-evenly items-start mb-4 text-sm">
        <div className="bg-white p-4 w-96 shadow-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
            sagittis purus. Nullam pretium, nunc eget feugiat iaculis, nulla
            massa imperdiet libero, in ullamcorper lacus nulla nec velit.
          </p>
        </div>
        <div className="bg-white p-2 w-48 shadow-md">
          <p>
            This section is totally unrelated. But we’re putting it next to the
            other one anyway.
          </p>
        </div>
      </div>

      <form className="space-y-2">
        <label className="block text-sm">Name</label>
        <input
          type="text"
          className="border border-pink-400 p-1 w-1/3"
          placeholder=""
        />

        <label className="block text-sm mt-4">Favorite Color</label>
        <select className="border border-pink-400 p-1 w-1/6">
          <option value="">Pick</option>
          <option>Red</option>
          <option>Green</option>
          <option>Blue</option>
        </select>

        <div className="flex w-full justify-end">
          <button className="block mt-8 bg-yellow-300 p-3 text-lg">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
