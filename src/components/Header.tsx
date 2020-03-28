import React from "react";
import { Row, Col, Select, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./Header.scss";

const { Header } = Layout;
const { Option } = Select;

interface IProps {
  sideIsClose: boolean;
  handleSearchChange: any;
}

const CustomHeader: React.FC<IProps> = ({
  sideIsClose,
  handleSearchChange
}) => {
  return (
    <Header className="header">
      <Row>
        <Col flex="50px">
          <span>
            {sideIsClose ? (
              <MenuUnfoldOutlined twoToneColor="#eb2f96" />
            ) : (
              <MenuFoldOutlined />
            )}
          </span>
        </Col>
        <Col flex="auto">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            onChange={handleSearchChange}
          >
            <Option value={"당근"}>당근</Option>
            <Option value={"당근1"}>당근</Option>
            <Option value={"당근2"}>당근</Option>
            <Option value={"당근3"}>당근</Option>
            <Option value={"당근4"}>당근</Option>
            <Option value={"당근5"}>당근</Option>
            <Option value={"당근6"}>당근</Option>
            <Option value={"당근7"}>당근</Option>
            <Option value={"당근8"}>당근</Option>
            <Option value={"당근9"}>당근</Option>
            <Option value={"당근10"}>당근</Option>
            <Option value={"당근11"}>당근</Option>
            <Option value={"당근12"}>당근</Option>
            <Option value={"당근13"}>당근</Option>
            <Option value={"당근14"}>당근</Option>
            <Option value={"당근15"}>당근</Option>
            <Option value={"당근16"}>당근</Option>
            <Option value={"당근17"}>당근</Option>
            <Option value={"당근18"}>당근</Option>
            <Option value={"당근19"}>당근</Option>
            <Option value={"당근20"}>당근</Option>
          </Select>
        </Col>
      </Row>
    </Header>
  );
};

export default CustomHeader;
