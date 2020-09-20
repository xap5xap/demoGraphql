import React from "react";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Rick and Morti Demo GraphQL
        </span>
      </div>
    </nav>
  );
};

export default Header;
