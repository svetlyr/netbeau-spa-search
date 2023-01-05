import React from "react";
import { List } from "antd";

import { StyledListWrapper } from "./styles";

type Props = {
  data: string[];
};

const VerticalList: React.FC<Props> = ({ data }: Props) => {
  return (
    <StyledListWrapper width={"40%"} hideScrollbar>
      <List
        size={"small"}
        dataSource={data}
        itemLayout={"horizontal"}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </StyledListWrapper>
  );
};

VerticalList.displayName = "List";

export default React.memo(VerticalList);
