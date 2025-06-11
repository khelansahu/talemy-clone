import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const navItems = [
  { name: 'All', path: '/' },
  { name: 'Business', path: '/business' },
  { name: 'Design', path: '/design' },
  { name: 'Development', path: '/development' },
  { name: 'Marketing', path: '/marketing' },
];

export default function RootLayout() {
  return (
    <div className="p-8 ">
  <div>
  <h2 className="text-sm text-gray-500">Online Learning</h2>
  <h1 className="text-3xl font-bold mb-4">Popular Courses</h1>
  </div>
  <div>
  <div className="flex gap-4 mb-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'px-4 py-2 bg-pink-600 text-white rounded-full'
                : 'px-4 py-2 text-gray-800 hover:bg-gray-100 hover:rounded-full'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <Outlet />
  </div>
     
    </div>
  );
}