import { Input } from "antd";
import styled from "@emotion/styled";

type SearchProps = {
  width?: string;
};

export const StyledInput = styled(Input)<SearchProps>`
  width: ${(props) => props.width ?? "400px"};
`;
