import React, { ReactNode } from 'react';
import { Select, Spin } from 'antd';
import { SelectProps } from 'antd/es/select';

import { mergeProps } from '../../utils/with-default-props';
import { useRequest } from './use-request';

export const { Option } = Select;

export type ActionType = 'auto' | 'open';
export interface AsyncSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  trigger?: ActionType;
  request: () => Promise<ValueType[] | undefined>;
  customOption?: (option: ValueType, index: number, options: ValueType[]) => ReactNode;
  customLoading?: ReactNode;
}

export interface DefaultValueType {
  key?: string;
  disabled?: boolean;
  label: ReactNode;
  value: string | number;
}

const defaultProps = {
  trigger: 'open',
};

export const AsyncSelect = <ValueType extends DefaultValueType = any>(p: AsyncSelectProps) => {
  const props = mergeProps(defaultProps, p);
  const { trigger, request, customOption, customLoading, notFoundContent, ...restProps } = props;

  const { data: options = [], loading, run } = useRequest<ValueType>(request, trigger);

  const onFocus = () => {
    if (trigger === 'open' && !options.length) {
      console.log('我被手动触发了');
      run();
    }
  };

  const renderCustomLoding = () => {
    return customLoading || <Spin size="small" />;
  };

  const render = () => {
    // no props customOption means use options render data
    if (!customOption) {
      return (
        <Select<ValueType>
          onFocus={onFocus}
          options={options}
          notFoundContent={loading ? renderCustomLoding() : undefined}
          {...restProps}
        />
      );
    }

    // custom option
    return (
      <Select<ValueType>
        notFoundContent={loading ? renderCustomLoding() : undefined}
        onFocus={onFocus}
        {...restProps}
      >
        {options.map((item, index) => {
          return customOption(item, index, options);
        })}
      </Select>
    );
  };
  return render();
};
