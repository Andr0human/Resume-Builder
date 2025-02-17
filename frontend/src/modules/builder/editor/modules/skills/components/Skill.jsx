import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import DragContainer from '../../../../../../helpers/common/components/DragContainer';
import SkillPill from '../atoms/SkillPill';
import AddSkill from './AddSkill';
import EditSkill from './EditSkill';

const animation = {
  initial: { height: '1px' },
  animate: { height: '100%' },
};

export default function Skill({
  items,
  addItem,
  removeItem,
  editItem,
  setItems,
  hasLevel,
}) {
  const [editMode, setEditMode] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState();
  return (
    <>
      <motion.div
        className="flex flex-col gap-2 mb-8 empty:mb-0"
        initial={animation.initial}
        animate={animation.animate}
      >
        <DragContainer items={items} setItems={setItems}>
          <AnimatePresence>
            {items.map((item, index) => (
              <SkillPill
                key={item.name}
                index={index}
                name={item.name}
                level={item.level}
                onDelete={removeItem}
                showLevel={hasLevel}
                onEdit={(data) => {
                  setEditMode(true);
                  setSelectedSkill(data);
                }}
              />
            ))}
          </AnimatePresence>
        </DragContainer>
      </motion.div>

      {editMode && selectedSkill && (
        <EditSkill
          editHandler={editItem}
          items={items}
          hasLevel={hasLevel}
          skillData={selectedSkill}
          onCancel={() => {
            setEditMode(false);
          }}
        />
      )}
      <AddSkill addHandler={addItem} items={items} hasLevel={hasLevel} />
    </>
  );
}
