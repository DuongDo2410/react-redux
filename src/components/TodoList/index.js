import { Col, Row, Input, Button, Select, Tag, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/action";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selecter";
export default function TodoList() {
  const disPatch = useDispatch();
  const todoList = useSelector(todosRemainingSelector);
  const onFinish = (values) => {
    let todo = {
      id: uuidv4(),
      name: values.todo,
      priority: values.priority,
      completed: false,
    };
    disPatch(addTodo(todo));
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo name={todo.name} prioriry={todo.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Form onFinish={onFinish}>
          <Input.Group style={{ display: "flex" }} compact>
            <Form.Item name="todo" defaultValue="">
              <Input placeholder="todo name" />
            </Form.Item>
            <Form.Item name="priority">
              <Select placeholder="select one priority" allowClear>
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
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Input.Group>
        </Form>
      </Col>
    </Row>
  );
}
