import Switch from '@mui/material/Switch';

export const SwitchWidget = ({
  label,
  value,
  onChange,
}) => {
  const handleSwitchChange = (event) => {
    const newValue = event.target.checked;
    onChange(newValue);
  };

  return (
    <div className="w-full flex justify-between items-center mb-3 ">
      <span className="text-xs">{label}</span>
      <Switch checked={value} onChange={handleSwitchChange} />
    </div>
  );
};
