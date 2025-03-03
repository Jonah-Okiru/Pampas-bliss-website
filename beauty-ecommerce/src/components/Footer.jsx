import React from 'react'; // Import React to use functional components

// Footer Component: Displays a footer with copyright information
function Footer() {
  // Get the current year dynamically to keep the copyright up to date
  const currentYear = new Date().getFullYear();
  return (
    <footer className='text-center bg-gray-300 p-4 font-bold'>
      {/* Display the copyright message with the current year */}
      <p>&copy; {currentYear} Pampers Bliss. All rights reserved.</p>
    </footer>
  );
}

export default Footer; // Export the Footer component for use in other parts of the app
