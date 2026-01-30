import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-[1200px] mx-auto px-[24px] py-[20px] flex justify-between items-center">
        <Link to="/" className="text-[24px] font-[700]">
          Etech.
        </Link>

        <nav className="flex gap-[32px] font-[500]">
          <Link to="/courses">Courses</Link>
          <Link to="/instructors">Teachers</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-[16px]">
          <Link to="/login" className="px-[20px] py-[10px]  text-black rounded-[12px] font-[600]">Sign in</Link>
          <Link
            to="/register"
            className="px-[20px] py-[10px] bg-[#9B5CF6] text-white rounded-[12px] font-[600]"
          >
            Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
