function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#B56CFF] to-[#E889E8] text-white py-[60px]">
      <div className="max-w-[1200px] mx-auto px-[24px] grid grid-cols-4 gap-[40px]">
        
        <div>
          <h3 className="text-[24px] font-[700] mb-[12px]">Etech.</h3>
          <p className="text-[14px] leading-[22px]">
            Empowering learners through innovative online education.
          </p>
        </div>

        <div>
          <h4 className="font-[600] mb-[12px]">Company</h4>
          <ul className="space-y-[8px] text-[14px]">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-[600] mb-[12px]">Support</h4>
          <ul className="space-y-[8px] text-[14px]">
            <li>Help Center</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-[600] mb-[12px]">Contact</h4>
          <ul className="space-y-[8px] text-[14px]">
            <li>info@etech.com</li>
            <li>+1 234 567 890</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;