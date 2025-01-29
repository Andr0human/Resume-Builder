import styled from '@emotion/styled';

const SubTitle = styled.p`
  color: ${(props) => props.theme.titleColor};
`;

export const SectionSubtitle = ({ label }) => {
  return <SubTitle className="text-base font-normal">{label}</SubTitle>;
};
