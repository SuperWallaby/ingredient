import React from "react";
import { Row, Col } from "antd";
import RecipCard from "./components/RecipCard";

interface IProps {}

const MainPage: React.FC<IProps> = () => {
  return (
    <div>
      <Row gutter={[32, 24]}>
        <Col span={6}>
          <RecipCard />
        </Col>
        <Col span={6}>
          <RecipCard />
        </Col>
        <Col span={6}>
          <RecipCard />
        </Col>
        <Col span={6} />
      </Row>
    </div>
  );
};

export default MainPage;
