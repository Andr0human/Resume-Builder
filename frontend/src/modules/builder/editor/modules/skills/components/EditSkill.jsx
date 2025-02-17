import { useEffect, useRef, useState } from 'react';
import { TextField } from '@mui/material';
import SliderValue from '../atoms/SliderValue';
import { OutlinedButton } from '../../../../../../helpers/common/atoms/Buttons';

const EditSkill = ({
  editHandler,
  items,
  hasLevel = false,
  skillData,
  onCancel,
}) => {
  const [name, setName] = useState(skillData.name);
  const [level, setLevel] = useState(skillData.level);
  const [disabled, setDisabled] = useState(true);
  const [errorText, setErrorText] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    setName(skillData.name);
    setLevel(skillData.level);
  }, [skillData]);

  const changeHandler = (e) => {
    setName(e.target.value);
    setErrorText('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    doneHandler();
  };

  const doneHandler = () => {
    const trimmedText = name.trim();
    const trimmedLowerText = trimmedText.toLowerCase();

    if (
      items.find((item) => item.name.toLowerCase() === trimmedLowerText) &&
      items[skillData.index].name !== name
    ) {
      setErrorText('Duplicate entry');
    } else {
      setName('');
      setErrorText('');
      editHandler({ name: trimmedText, level, index: skillData.index });
      onCancel();
      inputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (name.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name]);

  return (
    <form className="mb-4" onSubmit={submitHandler}>
      <TextField
        label="Skill"
        variant="filled"
        value={name}
        error={!!errorText}
        helperText={errorText}
        onChange={changeHandler}
        autoComplete="off"
        inputRef={inputRef}
        fullWidth
        required
        autoFocus
      />
      {hasLevel && <SliderValue level={level} setLevel={setLevel} />}
      <div className="flex gap-2 mt-3">
        <OutlinedButton onClick={doneHandler} disabled={disabled}>
          Done
        </OutlinedButton>
        <TextButton onClick={onCancel}>Cancel</TextButton>
      </div>
    </form>
  );
};

export default EditSkill;
