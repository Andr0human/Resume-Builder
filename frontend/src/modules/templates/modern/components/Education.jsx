import { useRef } from 'react';
import { dateParser } from '../../../../helpers/utils';
import { scrollToElement } from '../../../../helpers/utils';
import { useEducations } from '../../../../stores/education';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const EducationSection = ({ education }) => {
  const educationRef = useRef(null);
  useEducations.subscribe(() => {
    scrollToElement(educationRef);
  });

  return (
    <div className="mb-3" ref={educationRef}>
      <SectionHeading title="Education" />

      {education.map((item, index) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.studyType} - ${item.area}`} textSize="md" />
              <div className="">
                <SectionSubtitle label={item.institution} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {`${dateParser(item.startDate)} - ${
                      item.isStudyingHere ? 'present' : dateParser(item.endDate)
                    }`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
