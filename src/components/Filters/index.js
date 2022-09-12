import React from "react";
import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchFilterChange,
  statusFilterChange,
  priorityFilterChange,
} from "../../redux/action";
const { Search } = Input;

export default function Filters() {
  const [search, setsearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState([]);
  console.log("a", status);
  const disPatch = useDispatch();
  const handleChangeSearch = (e) => {
    setsearch(e.target.value);
    disPatch(searchFilterChange(e.target.value));
  };
  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
    disPatch(statusFilterChange(e.target.value));
  };
  const handleChangePriority = (value) => {
    setPriority(value);
    disPatch(priorityFilterChange(value));
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          defaultValue={search}
          onChange={handleChangeSearch}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleChangeStatus} value={status}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          onChange={handleChangePriority}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
