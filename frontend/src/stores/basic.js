import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import resumeData from '../helpers/constants/resume-data.json';

const onChangeText = (set) => (values) => set({ values });

export const useBasicDetails = create()(
  persist(
    (set) => ({
      values: resumeData.basics,
      reset: onChangeText(set),
    }),
    { name: 'basic' }
  )
);
