import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { produce } from 'immer';
import resumeData from '../helpers/constants/resume-data.json';

const addSkill =
  (set) =>
  ({ name, level }) =>
    set(
      produce((state) => {
        state.values.push({ name, level });
      })
    );

const removeSkill = (set) => (index) =>
  set(
    produce((state) => {
      state.values.splice(index, 1);
    })
  );

const editSkill =
  (set) =>
  ({ name, level, index }) =>
    set(
      produce((state) => {
        state.values[index] = { name, level: level };
      })
    );

const setSkills = (set) => (values) => set(() => ({ values }));

const getSkills = (get) => () => get().isEnabled ? get().values : [];

const setIsEnabled = (set) => (isEnabled) => set(() => ({ isEnabled }));

const getMethods = (set, get) => ({
  get: getSkills(get),
  add: addSkill(set),
  remove: removeSkill(set),
  edit: editSkill(set),
  reset: setSkills(set),
  setIsEnabled: setIsEnabled(set),
});

export const useLanguages = create()(
  persist(
    (set, get) => ({
      title: 'Languages',
      hasLevel: true,
      values: resumeData.skills.languages,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'languages' }
  )
);

export const useFrameworks = create()(
  persist(
    (set, get) => ({
      title: 'Frameworks',
      hasLevel: true,
      values: resumeData.skills.frameworks,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'frameworks' }
  )
);

export const useTechnologies = create()(
  persist(
    (set, get) => ({
      title: 'Technologies',
      hasLevel: false,
      values: resumeData.skills.technologies,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'technologies' }
  )
);

export const useLibraries = create()(
  persist(
    (set, get) => ({
      title: 'Libraries',
      hasLevel: false,
      values: resumeData.skills.libraries,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'libraries' }
  )
);

export const useDatabases = create()(
  persist(
    (set, get) => ({
      title: 'Databases',
      hasLevel: false,
      values: resumeData.skills.databases,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'databases' }
  )
);

export const usePractices = create()(
  persist(
    (set, get) => ({
      title: 'Practices',
      hasLevel: false,
      values: resumeData.skills.practices,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'practices' }
  )
);

export const useTools = create()(
  persist(
    (set, get) => ({
      title: 'Tools',
      hasLevel: false,
      values: resumeData.skills.tools,
      isEnabled: true,

      ...getMethods(set, get),
    }),
    { name: 'tools' }
  )
);
