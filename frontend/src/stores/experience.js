import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import resumeData from '../helpers/constants/resume-data.json';

const addExperience =
  (set) =>
  ({
    name,
    position,
    startDate,
    isWorkingHere,
    endDate,
    years,
    summary,
    id,
    url = '',
    highlights = [],
  }) =>
    set(
      produce((state) => {
        state.experiences.push({
          id,
          name,
          position,
          startDate,
          isWorkingHere,
          endDate,
          summary,
          url,
          years,
          highlights,
        });
      })
    );

const removeExperience = (set) => (index) =>
  set((state) => ({
    experiences: state.experiences.slice(0, index).concat(state.experiences.slice(index + 1)),
  }));

const setExperience = (set) => (values) => {
  set({
    experiences: values,
  });
};

const updateExperience = (set) => (index, updatedInfo) => {
  set(
    produce((state) => {
      state.experiences[index] = updatedInfo;
    })
  );
};

const getExperience = (get) => (index) => {
  return get().experiences[index];
};

const onMoveUp = (set) => (index) => {
  set(
    produce((state) => {
      if (index > 0) {
        const currentExperience = state.experiences[index];
        state.experiences[index] = state.experiences[index - 1];
        state.experiences[index - 1] = currentExperience;
      }
    })
  );
};

const onMoveDown = (set) => (index) => {
  set(
    produce((state) => {
      const totalExp = state.experiences.length;
      if (index < totalExp - 1) {
        const currentExperience = state.experiences[index];
        state.experiences[index] = state.experiences[index + 1];
        state.experiences[index + 1] = currentExperience;
      }
    })
  );
};

export const useExperiences = create()(
  persist(
    (set, get) => ({
      experiences: resumeData.work,
      add: addExperience(set),
      get: getExperience(get),
      remove: removeExperience(set),
      reset: setExperience(set),
      onmoveup: onMoveUp(set),
      onmovedown: onMoveDown(set),
      updateExperience: updateExperience(set),
    }),
    { name: 'experience' }
  )
);
