import { useRef } from 'react';
import { HTMLRenderer } from '../../../../helpers/common/components/HTMLRenderer';
import { dateParser } from '../../../../helpers/utils';
import { scrollToElement } from '../../../../helpers/utils';
import { useAwards } from '../../../../stores/awards';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const AwardSection = ({ awardsReceived }) => {
  const awardsRef = useRef(null);
  useAwards.subscribe(() => {
    scrollToElement(awardsRef);
  });

  return (
    <div className="mb-2" ref={awardsRef}>
      <SectionHeading title="Awards" />

      {awardsReceived.map((award, index) => {
        return (
          <div key={index} className="pb-2">
            <SectionTitle label={award.title} />
            <div className="flex justify-between awards-center">
              <SectionSubtitle label={award.awarder} />
              <div>
                <p className="text-xs">{dateParser(award.date)}</p>
              </div>
            </div>
            <SectionList>
              <HTMLRenderer htmlString={award.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};
