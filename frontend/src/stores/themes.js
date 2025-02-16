import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const systemColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: '#1890ff',
  highlighterColor: 'yellowgreen',
  id: 1,
};

const customThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

export const useThemes = create()(
  persist(
    (set) => ({
      selectedTheme: systemColor,
      customTheme: customThemeColor,
      chooseTheme: (theme) => {
        set(() => ({ selectedTheme: theme }));
      },
    }),
    { name: 'themes' }
  )
);
