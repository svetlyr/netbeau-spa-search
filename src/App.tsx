import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { collection, getDocs } from "firebase/firestore";
import React, { Suspense, useEffect, useState } from "react";

import database from "./modules/firestore";
const Search = React.lazy(() => import("./components/Search/Search"));
const VerticalList = React.lazy(() => import("./components/VerticalList/List"));

import { StyledFlexContainer } from "./components/styles/container.style";

const App: React.FC = () => {
  const [employees, setEmployees] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(database, "employees"));
    const newData = querySnapshot.docs.map(
      (employee) => employee.data().FullName
    );

    setEmployees(() => newData);
    setFilteredData(() => newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledFlexContainer direction={"column"} alignItems={"center"}>
      <Suspense
        fallback={
          <Spin
            size={"large"}
            tip={"Loading"}
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
          />
        }
      >
        <Search
          size={"large"}
          width={"500px"}
          data={employees}
          setFilteredData={setFilteredData}
        />
        <VerticalList data={filteredData} />
      </Suspense>
    </StyledFlexContainer>
  );
};

export default App;
