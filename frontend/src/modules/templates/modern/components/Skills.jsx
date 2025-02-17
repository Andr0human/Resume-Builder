import { SectionHeading } from '../atoms/SectionHeading';
import { useRef } from 'react';
import {
  useLanguages,
  useFrameworks,
  useLibraries,
  usePractices,
  useDatabases,
  useTechnologies,
  useTools,
} from '../../../../stores/skills';
import { scrollToElement } from '../../../../helpers/utils';

export const SkillsSection = ({ title, list }) => {
  const skillRef = useRef(null);
  useLanguages.subscribe(() => {
    scrollToElement(skillRef);
  });
  useFrameworks.subscribe(() => {
    scrollToElement(skillRef);
  });
  useLibraries.subscribe(() => {
    scrollToElement(skillRef);
  });
  usePractices.subscribe(() => {
    scrollToElement(skillRef);
  });
  useDatabases.subscribe(() => {
    scrollToElement(skillRef);
  });
  useTechnologies.subscribe(() => {
    scrollToElement(skillRef);
  });
  useTools.subscribe(() => {
    scrollToElement(skillRef);
  });

  return (
    <div className="my-3" ref={skillRef}>
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item, index) => (
          <div
            key={index}
            className="py-1 px-2 text-sm font-medium border-b-2 border-color-[##a9a9a9]"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
