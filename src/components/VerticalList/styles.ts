import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ListWrapperProps = {
  width?: string;
  hideScrollbar?: boolean;
};

export const StyledListWrapper = styled.div<ListWrapperProps>`
  width: ${(props) => props.width ?? "90%"};
  height: 85vh;
  overflow-x: hidden;
  padding: 0 16px;
  border: 1px solid rgba(140, 140, 140, 0.35);
  border-radius: 10px;

  ${(props) =>
    props.hideScrollbar &&
    css`
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `}
`;
