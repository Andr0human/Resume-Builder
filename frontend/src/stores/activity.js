import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import resumeData from '../helpers/constants/resume-data.json';

const setAllAwards = (set) => (activityItem) => {
  set({
    activities: activityItem,
  });
};

const updateAchievements = (set) => (achievements) => {
  set(
    produce((state) => {
      state.activities.achievements = achievements;
    })
  );
};

const updateInvolvements = (set) => (involvements) => {
  set(
    produce((state) => {
      state.activities.involvements = involvements;
    })
  );
};

export const useActivity = create()(
  persist(
    (set, get) => ({
      activities: resumeData.activities,

      get: () => get().activities,
      reset: setAllAwards(set),
      updateAchievements: updateAchievements(set),
      updateInvolvements: updateInvolvements(set),
    }),
    { name: 'activities' }
  )
);
