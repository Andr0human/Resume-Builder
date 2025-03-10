import { useRef } from 'react';
import { HTMLRenderer } from '../../../../helpers/common/components/HTMLRenderer';
import { dateParser } from '../../../../helpers/utils';
import { scrollToElement } from '../../../../helpers/utils';
import { useVoluteeringStore } from '../../../../stores/volunteering';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const VolunteerSection = ({ volunteer }) => {
  const volunteerRef = useRef(null);
  useVoluteeringStore.subscribe(() => {
    scrollToElement(volunteerRef);
  });

  return (
    <div className="mb-3" ref={volunteerRef}>
      <SectionHeading title="Volunteering" />

      {volunteer.map((item, index) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.organization}`} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={item.position} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {dateParser(item.startDate)} -
                    {item.isVolunteeringNow ? 'present' : dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <SectionList>
                <HTMLRenderer htmlString={item.summary} />
              </SectionList>
            </div>
          </div>
        );
      })}
    </div>
  );
};
