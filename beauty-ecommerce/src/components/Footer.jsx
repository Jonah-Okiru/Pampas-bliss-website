import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='text-center bg-gray-300 p-4 font-bold'>
      <p>&copy; {currentYear} Pampers Bliss. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
