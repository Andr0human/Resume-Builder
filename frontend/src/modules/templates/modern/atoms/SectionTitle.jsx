export const SectionTitle = ({ label, textSize }) => {
  return <p className={` ${textSize == 'md' ? 'text-md' : 'text-lg'} font-normal`}>{label}</p>;
};
