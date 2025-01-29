import { create } from 'zustand';
import { AVAILABLE_TEMPLATES } from '../helpers/constants';

export const useTemplates = create((set) => ({
  availableTemplate: AVAILABLE_TEMPLATES,
  activeTemplate: AVAILABLE_TEMPLATES['modern'],

  setTemplate: (template) => {
    localStorage.setItem('selectedTemplateId', template.id);
    set({ activeTemplate: template });
  },
}));
