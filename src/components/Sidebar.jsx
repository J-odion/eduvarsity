import React, { useState } from 'react';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1); // Set initial active link ID

  const links = [
    { title: 'Dashboard', img: 'home.png', id: 1 },
    { title: 'Classes', img: 'book.png', id: 2 },
    { title: 'Assignment', img: 'document-text.png', id: 3 },
    { title: 'Performance', img: 'status-up.png', id: 4 },
    { title: 'Community', img: 'colorfilter.png', id: 5 },
    { title: 'Payment', img: 'card.png', id: 6 },
    { title: 'Help', img: '24-support.png', id: 7 },
    { title: 'Settings', img: 'setting.png', id: 8 },
  ];

  return (
    <div className="hidden md:block md:w-64 bg-white text-gray-700 p-4 shadow-lg">
      <div className="text-2xl font-bold mb-6">Eduvacity</div>
      <nav>
        {links.map((link) => (
          <a
            key={link.id}
            href="javascript:void(0)"
            onClick={() => setActiveLink(link.id)}
            className={`flex justify-start items-center gap-2 py-2.5 px-4 rounded ${
              activeLink === link.id
                ? 'bg-green-500 text-white'
                : 'hover:bg-green-200 hover:text-green-700'
            }`}
          >
            <img src={link.img} className='w-5 h-5' alt={link.title} />
            <p>{link.title}</p>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
