export const SectionHeading = ({ title }) => {
  return (
    <div className="relative mb-2 text-base font-medium before:content-[''] before:w-full before:border-b-4 before:border-color-[#b2b4b6] before:absolute before:-bottom-0.5">
      {title}
    </div>
  );
};
