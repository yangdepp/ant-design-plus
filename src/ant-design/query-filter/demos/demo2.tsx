import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import { antd } from '@yang/ant-design-plus';

const { QueryFilter } = antd;

export default () => {
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <QueryFilter onFinish={onFinish}>
        <Form.Item label="名字" name="name">
          <Input placeholder="请输入名字" />
        </Form.Item>
        <Form.Item label="性别" name="gender">
          <Select
            options={[
              { label: '男', value: 'male' },
              { label: '女', value: 'female' },
            ]}
          />
        </Form.Item>
        <Form.Item label="身份证号" name="idNo">
          <Input placeholder="请输入身份证号" />
        </Form.Item>
        <Form.Item label="创建日期" name="createDate">
          <DatePicker placeholder="请选择创建日期" style={{ width: '100%' }} />
        </Form.Item>
      </QueryFilter>
    </>
  );
};
