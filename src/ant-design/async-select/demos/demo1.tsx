import React, { ReactNode, useState } from 'react';
import { Space } from 'antd';

import { mockAsyncFetchData } from '../../../tools/mock';

import { antd } from '@yang/ant-design-plus';

const { AsyncSelect } = antd;

type ValueType = {
  value: number;
  label: ReactNode;
};

export default () => {
  const [value, setValue] = useState<number>();

  const handleChange = (value: number) => {
    console.log(`选择了${value}`);
    setValue(value);
  };

  return (
    <>
      <Space>
        <AsyncSelect
          value={value}
          style={{ width: 120 }}
          placeholder="轻点我"
          request={async () => {
            const res = await mockAsyncFetchData<ValueType>(1000);
            const { data } = res || {};
            return data;
          }}
          onChange={handleChange}
        />
      </Space>
    </>
  );
};
