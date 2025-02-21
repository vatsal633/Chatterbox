import React, { useState } from "react";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="flex h-screen bg-[#0b0f17] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <nav className="space-y-2">
          <a href="#profile" className="block py-2 px-3 rounded-lg hover:">
            Profile
          </a>
          <a href="#security" className="block py-2 px-3 rounded-lg hover:">
            Security
          </a>
          <a href="#notifications" className="block py-2 px-3 rounded-lg hover:">
            Notifications
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Profile Settings */}
        <div id="profile" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Profile Settings</h3>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-600 rounded-full"></div>
            <div className="space-y-2">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-600 rounded  text-white" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-600 rounded  text-white" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Save Changes</button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div id="security" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Account Security</h3>
          <input type="password" placeholder="Change Password" className="w-full p-2 border border-gray-600 rounded  text-white" />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Update Password</button>
        </div>

        {/* Notifications */}
        <div id="notifications" className="p-6 rounded-lg bg-[#111317] border shadow-lg">
          <h3 className="text-lg font-bold mb-4">Notifications</h3>
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="w-6 h-6"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
