import React, { Dispatch, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { StyledInput } from "./styles";

type Props = {
  data: string[];
  width?: string;
  size?: SizeType;
  setFilteredData: Dispatch<React.SetStateAction<string[]>>;
};

const Search: React.FC<Props> = ({
  data,
  size,
  width,
  setFilteredData,
}: Props) => {
  const [query, setQuery] = useSearchParams();
  const initialQuery = query.get("name") ?? "";

  const handleSearch = (searchQuery: string) => {
    setQuery(() => ({ name: searchQuery }));

    setFilteredData(() =>
      data.filter((name) => {
        if (!searchQuery) return name;

        return name.toLowerCase().includes(searchQuery);
      })
    );
  };

  useEffect(() => {
    handleSearch(initialQuery);
  }, [data]);

  return (
    <StyledInput
      size={size}
      width={width}
      defaultValue={initialQuery}
      addonAfter={<SearchOutlined />}
      placeholder={"Search employee"}
      onChange={({ target }) => handleSearch(target.value)}
    ></StyledInput>
  );
};

Search.displayName = "Search";

export default React.memo(Search);
