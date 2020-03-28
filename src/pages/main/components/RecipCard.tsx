import { Card, Avatar, Tag, Rate } from "antd";
import React from "react";
import "./RecipCard.scss";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
const { Meta } = Card;

interface IProps {}

const RecipCard: React.FC<IProps> = () => {
  return (
    <Card
      className="recipeCard"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      hoverable
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />
      ]}
    >
      <Meta
        // avatar={
        //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        // }
        title="Card title"
        description={
          <div>
            <Rate className="recipCard__rate" />
            <div>
              <div className="recipCard__detail">This is the description </div>
              <div className="recipCard__tags">
                <Tag color="gold">당근</Tag>
                <Tag color="gold">magenta</Tag>
                <Tag color="gold">magenta</Tag>
                <Tag>magenta</Tag>
                <Tag>magenta</Tag>
                <Tag>magenta</Tag>
              </div>
            </div>
          </div>
        }
      />
    </Card>
  );
};

export default RecipCard;
