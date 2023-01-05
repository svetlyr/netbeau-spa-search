import styled from "@emotion/styled";

type ContainerProps = {
  direction?: string;
  alignItems?: string;
};

export const StyledFlexContainer = styled.div<ContainerProps>`
  gap: 25px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.alignItems};
`;
