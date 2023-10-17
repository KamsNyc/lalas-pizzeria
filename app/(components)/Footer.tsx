import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#FE0000] text-white py-6 rounded-t-2xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Lalas Pizzeria</h3>
          <p className="text-sm">Your go-to spot for delicious pizza in Queens Village, NY.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Address: 215-32 Hillside Ave Queens Village, NY 11427</p>
          <p>Phone: (347) 426 5287</p>
          <p>Email: info@lalaspizzeria.com</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm">
            <li><a href="#home" className="text-white hover:underline">Home</a></li>
            <li><a href="#menu" className="text-white hover:underline">Menu</a></li>
            <li><a href="#promotions" className="text-white hover:underline">Promotions</a></li>
            <li><a href="#reviews" className="text-white hover:underline">Reviews</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p>&copy; {new Date().getFullYear()} Lalas Pizzeria. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
