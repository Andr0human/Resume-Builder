import parseHtmlStringToHtml, { domToReact } from 'html-react-parser';

import { Link } from 'react-router-dom';
import styles from './richtext/jodit.module.css';
import { useMemo } from 'react';

export const HTMLRenderer = ({ htmlString }) => {
  const parsedElement = useMemo(() => {
    return parseHtmlStringToHtml(htmlString, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      replace: (domNode) => {
        if (domNode.attribs && domNode.attribs.href && domNode.name === 'a') {
          return <Link href={domNode.attribs.href}>{domToReact(domNode.children)}</Link>;
        } else if (domNode.name === 'script') {
          return <></>;
        }
      },
    });
  }, [htmlString]);
  return <div className={`${styles.richtextRuntimeWrapper} text-xs`}>{parsedElement}</div>;
};
