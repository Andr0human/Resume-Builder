import { Slider } from '@mui/material';

const SliderValue = ({ level, setLevel }) => {
  const sliderhangeHandler = (_, value) => {
    setLevel(value);
  };

  return (
    <div className='flex mt-4'>
      <Slider
        aria-label='Skill Level'
        value={level}
        onChange={sliderhangeHandler}
        className='basis-2/3'
      />
      <div className='bg-custom-grey rounded-md px-2 py-1 ml-auto'>{level}</div>
    </div>
  );
};

export default SliderValue;
