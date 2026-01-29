function PageHeader({ title, subtitle }) {
  return (
    <div className="white py-[60px] text-center text-black">
      <h1 className="text-[36px] font-[700] mb-[8px]">{title}</h1>
      <p className="text-[16px] text-black/90">{subtitle}</p>
    </div>
  );
}

export default PageHeader;