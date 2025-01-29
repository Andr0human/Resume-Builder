/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RichtextEditor } from '../../../../../../helpers/common/components/richtext';

const About = ({
  basicTabs,
  onChangeHandler,
}) => {
  return (
    <>
      <RichtextEditor
        label="About me"
        value={basicTabs.summary}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'summary');
        }}
        name="summary"
      />
      <RichtextEditor
        label="Career objective"
        value={basicTabs.objective}
        onChange={(htmlOutput) => {
          onChangeHandler(htmlOutput, 'objective');
        }}
        name="objective"
      />
    </>
  );
};

export default About;
