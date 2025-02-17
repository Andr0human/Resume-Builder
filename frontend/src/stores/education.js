import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import resumeData from '../helpers/constants/resume-data.json';

const addEducation =
  (set) =>
  ({ institution, studyType, area, startDate, isStudyingHere, endDate, id, url, score, courses }) =>
    set(
      produce((state) => {
        state.academics.push({
          institution,
          studyType,
          area,
          startDate,
          isStudyingHere,
          endDate,
          id,
          url,
          courses,
          score,
        });
      })
    );

const removeEducation = (set) => (index) =>
  set((state) => ({
    academics: state.academics.slice(0, index).concat(state.academics.slice(index + 1)),
  }));

const setEducation = (set) => (values) => {
  set({
    academics: values,
  });
};

const getEducation = (get) => (index) => {
  return get().academics[index];
};

const onMoveUp = (set) => (index) => {
  set(
    produce((state) => {
      if (index > 0) {
        const currentExperience = state.academics[index];
        state.academics[index] = state.academics[index - 1];
        state.academics[index - 1] = currentExperience;
      }
    })
  );
};
const onMoveDown = (set) => (index) => {
  set(
    produce((state) => {
      const totalExp = state.academics.length;
      if (index < totalExp - 1) {
        const currentExperience = state.academics[index];
        state.academics[index] = state.academics[index + 1];
        state.academics[index + 1] = currentExperience;
      }
    })
  );
};

const updateEducation = (set) => (index, updatedInfo) => {
  set(
    produce((state) => {
      state.academics[index] = updatedInfo;
    })
  );
};

export const useEducations = create()(
  persist(
    (set, get) => ({
      academics: resumeData.education,
      add: addEducation(set),
      get: getEducation(get),
      remove: removeEducation(set),
      reset: setEducation(set),
      onmoveup: onMoveUp(set),
      onmovedown: onMoveDown(set),
      updateEducation: updateEducation(set),
    }),
    { name: 'education' }
  )
);
