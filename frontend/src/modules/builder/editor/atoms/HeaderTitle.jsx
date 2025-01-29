const HeaderTitle = ({ title }) => (
  <div className="flex items-center my-5 cursor-pointer">
    <p className="text-xl ml-2">{title}</p>

    <div className="ml-auto pl-4 flex items-center">
      <img src="/icons/right-arrow.svg" alt="right-arrow" height="16" width="16" />
    </div>
  </div>
);

export default HeaderTitle;
