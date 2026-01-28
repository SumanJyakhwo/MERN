import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Courses",
      links: [
        { name: "Robotics and IoT", href: "/courses/iot" },
        { name: "Python Coding", href: "/courses/py" },
        { name: "Advance AI ML", href: "/courses/ai" },
      ],
    },
    {
      name: "Instructors",
      links: [
        { name: "All Teachers", href: "/teachers" },
        { name: "Top Rated", href: "/teachers/top" },
      ],
    },
    {
      name: "Offers",
      links: [
        { name: "Discounts", href: "/offers/discounts" },
        { name: "Special", href: "/offers/special" },
      ],
    },
    {
      name: "Contact",
      links: [
        { name: "Support", href: "/contact/support" },
        { name: "Locations", href: "/contact/locations" },
      ],
    },
  ];

  return (
    <header className="w-full bg-white shadow-sm z-50 fixed top-0 left-0">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <a href="/" className="text-2xl md:text-3xl font-bold">
          SkillsUp
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button className="flex items-center gap-1">
                {item.name} <span className="text-lg">▾</span>
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {item.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="px-5 py-2 border border-gray-300 rounded-lg relative group text-base font-medium hover:border-transparent">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Sign in</span>
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg font-semibold text-base">
            Free Trial
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl font-bold focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-md mt-[64px]">
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <p className="font-semibold py-2 border-b border-gray-200">
                  {item.name}
                </p>
                {item.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="pl-4 py-1 text-gray-700 hover:text-purple-500"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ))}
            {/* Mobile Buttons */}
            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full px-5 py-2 border border-gray-300 rounded-lg text-base font-medium">
                Sign in
              </button>
              <button className="w-full px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-lg font-semibold text-base">
                Free Trial
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
