import { useMemo } from 'react';
import { OutlinedButton } from '../../../../../../helpers/common/atoms/Buttons';
import { useExperiences } from '../../../../../../stores/experience';

const NEW_EXPERIENCE = {
  name: '',
  position: '',
  startDate: null,
  isWorkingHere: false,
  endDate: null,
  summary: '',
  years: '',
  id: '',
  url: '',
  highlights: [],
};

const AddExperience = ({
  handleChange,
  isEmpty,
}) => {
  const addNewExperience = useExperiences((state) => state.add);

  const onCreateNewExperience = () => {
    const uniqueExpandedId = `${Math.random()}`;
    NEW_EXPERIENCE.id = uniqueExpandedId;
    addNewExperience(NEW_EXPERIENCE);
    handleChange(uniqueExpandedId, true);
  };

  const buttonCaption = useMemo(() => {
    if (isEmpty) {
      return '+ Add an experience';
    } else {
      return '+ Add more';
    }
  }, [isEmpty]);

  return (
    <div className="flex gap-2 mt-3">
      <OutlinedButton onClick={onCreateNewExperience} disabled={false}>
        {buttonCaption}
      </OutlinedButton>
    </div>
  );
};

export default AddExperience;
