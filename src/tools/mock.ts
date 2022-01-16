/**
 * @param options: <T>[], @param delay: number
 * @returns Promise<{data: T[]}>
 */
import { mergeProps } from '../utils/with-default-props';

const defaultOptions: any = [
  {
    label: '小明 👦🏻',
    value: 1,
  },
  {
    label: '小红 👧🏻',
    value: 2,
  },
  {
    label: '小丑 🤡',
    value: 3,
  },
];

type ResponseType = 'success' | 'fail' | 'random';

const defaultProps = {
  delay: 1000,
  options: defaultOptions,
  responseType: 'success',
};

const mockAsyncFetchData = <T>({
  delay,
  options,
  responseType,
}: {
  delay: number;
  options?: T[];
  responseType?: ResponseType;
}): Promise<{ data: T[] }> => {
  const {
    delay: d,
    options: o,
    responseType: r,
  } = mergeProps(defaultProps, { delay, options, responseType });
  console.log('我被调用了');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (r === 'fail') {
        reject(new Error('请求错误'));
      }
      if (r === 'success') {
        resolve({
          data: o,
        });
      }
      if (r === 'random') {
        Math.random() > 0.5
          ? resolve({
              data: o,
            })
          : reject(new Error('请求错误'));
      }
    }, d);
  });
};

export { mockAsyncFetchData };
