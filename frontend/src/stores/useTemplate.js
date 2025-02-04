import { create } from 'zustand';
import ModernTemplate from '../modules/templates/modern/ModernTemplate';
import ProfessionalTemplate from '../modules/templates/professional/ProfessionalTemplate';

const availableTemplates = {
  modern: {
    id: 'modern',
    name: 'Modern Resume',
    thumbnail: '/templates/modern.png',
    component: ModernTemplate,
  },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: ProfessionalTemplate,
  },
};

export const useTemplates = create((set) => ({
  availableTemplate: availableTemplates,
  activeTemplate: availableTemplates['modern'],

  setTemplate: (template) => {
    localStorage.setItem('selectedTemplateId', template.id);
    set({ activeTemplate: template });
  },
}));
