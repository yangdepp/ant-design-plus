import React from 'react';
import { Form, Input, Select } from 'antd';
import { FormInstance } from 'antd/es/form';
import { antd } from '@yang/ant-design-plus';

import { mockAsyncFetchData } from '../../../tools/mock';

const { QueryFilter } = antd;

export default class Demo extends React.Component {
  state = {
    loading: false,
  };

  formRef = React.createRef<FormInstance>();

  componentDidMount() {
    this.initGenderValue();
  }

  initGenderValue = async () => {
    this.setState({
      loading: true,
    });
    try {
      const defaultGender = await mockAsyncFetchData({
        delay: 3000,
        options: [{ label: '男', value: 'male' }],
      });
      this.formRef.current?.setFieldsValue({
        gender: defaultGender?.data[0]?.value,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        <QueryFilter onFinish={this.onFinish} ref={this.formRef} labelWidth={50} loading={loading}>
          <Form.Item label="名字" name="name">
            <Input placeholder="请输入名字" />
          </Form.Item>
          <Form.Item label="性别" name="gender">
            <Select
              placeholder="请选择性别"
              options={[
                { label: '男', value: 'male' },
                { label: '女', value: 'female' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="hobby"
            dependencies={['gender']}
            label="爱好"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (getFieldValue('gender') === 'female' && !value) {
                    return Promise.reject(new Error('请选择爱好'));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input placeholder="性别选择female时必填" />
          </Form.Item>
        </QueryFilter>
      </>
    );
  }
}
