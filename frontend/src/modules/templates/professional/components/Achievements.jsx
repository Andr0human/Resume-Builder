import { HTMLRenderer } from '../../../../helpers/common/components/HTMLRenderer';

export default function Achievements({ data }) {
  return (
    <div>
      <HTMLRenderer htmlString={data} />
    </div>
  );
}
