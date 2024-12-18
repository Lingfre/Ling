import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center">
      <div className="text-sm text-gray-600">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </div>
      <ul className="flex justify-center mt-4">
        <li className="mr-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
        </li>
        <li className="mr-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;