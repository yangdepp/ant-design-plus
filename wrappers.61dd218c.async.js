(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{7428:function(e,n,t){"use strict";t.r(n),t.d(n,"ROUTE_MSG_TYPE",(function(){return h}));var a=t("q1tI"),o=t.n(a),r=t("9kvl"),s=t("dEAq"),c=t("hfkL"),i=t.n(c),u=t("zKLG"),l=t.n(u),d=t("Gb9n"),m=t.n(d),p=t("tDJ2"),f=t.n(p),h="dumi:update-iframe-route",b={vl:i(),flex:l(),vw:m(),vh:f()},v=e=>{var n=e.children,t=Object(a["useContext"])(s["context"]),c=t.config,i=Object(a["useRef"])(null),u=c.theme,l=u.hd;l=void 0===l?{}:l;var d=l.rules,m=void 0===d?[{mode:"vw",options:[100,750]}]:d;return Object(a["useEffect"])((()=>{i.current;var e=e=>{e.data.type===h&&r["a"].push(e.data.value)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)}),[]),Object(a["useEffect"])((()=>{var e=()=>{var e=document.documentElement.clientWidth;m.filter((e=>b[e.mode])).some((n=>{if(Number.isNaN(1*n.minWidth)&&Number.isNaN(1*n.maxWidth)||Number.isNaN(1*n.maxWidth)&&e>n.minWidth||Number.isNaN(1*n.minWidth)&&e<n.maxWidth||e>n.minWidth&&e<n.maxWidth)return b[n.mode](...[].concat(n.options)),document.documentElement.setAttribute("data-scale","true"),!0}))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[m]),o.a.createElement("div",{className:"__dumi-default-mobile-demo-layout",ref:i},n)};n["default"]=v},"9kvl":function(e,n,t){"use strict";var a=t("FfOG");t.d(n,"a",(function(){return a["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),o=t("q1tI"),r=t.n(o),s=t("q3YX"),c=t("9og8"),i=t("WmNS"),u=t.n(i),l=t("rlch"),d="import React, { ReactNode, useState } from 'react';\nimport { Space } from 'antd';\n\nimport { mockAsyncFetchData } from '../../../tools/mock';\n\nimport { antd } from '@yang/ant-design-plus';\n\nconst { AsyncSelect } = antd;\n\ntype ValueType = {\n  value: number;\n  label: ReactNode;\n};\n\nexport default () => {\n  const [value, setValue] = useState<number>();\n\n  const handleChange = (value: number) => {\n    console.log(`\u9009\u62e9\u4e86${value}`);\n    setValue(value);\n  };\n\n  return (\n    <>\n      <Space>\n        <AsyncSelect\n          value={value}\n          style={{ width: 120 }}\n          placeholder=\"\u8f7b\u70b9\u6211\"\n          request={async () => {\n            const res = await mockAsyncFetchData<ValueType>(1000);\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n        />\n      </Space>\n    </>\n  );\n};",m="/**\n * @param options: <T>[], @param delay: number\n * @returns Promise<{data: T[]}>\n */\nconst defaultOptions: any = [\n  {\n    label: '\u5c0f\u660e \ud83d\udc66\ud83c\udffb',\n    value: 1,\n  },\n  {\n    label: '\u5c0f\u7ea2 \ud83d\udc67\ud83c\udffb',\n    value: 2,\n  },\n  {\n    label: '\u5c0f\u4e11 \ud83e\udd21',\n    value: 3,\n  },\n];\n\nconst mockAsyncFetchData = <T>(\n  delay: number,\n  options?: T[],\n  isSuccess: boolean = true,\n): Promise<{ data: T[] }> => {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (isSuccess) {\n        resolve({\n          data: options || (defaultOptions as T[]),\n        });\n      } else {\n        reject(new Error('\u9519\u8bef'));\n      }\n    }, delay);\n  });\n};\n\nexport { mockAsyncFetchData };",p='import React, { ReactNode } from \'react\';\nimport { Space } from \'antd\';\n\nimport { mockAsyncFetchData } from \'../../../tools/mock\';\n\nimport { antd } from \'@yang/ant-design-plus\';\n\nconst { AsyncSelect } = antd;\n\ntype OptionType = {\n  value: number;\n  label: ReactNode;\n};\n\nexport default () => {\n  const handleChange = (value: number) => {\n    console.log(`\u9009\u62e9\u4e86${value}`);\n  };\n\n  return (\n    <>\n      <Space>\n        <AsyncSelect\n          trigger="auto"\n          placeholder="\u9875\u9762\u52a0\u8f7d\u65f6\u81ea\u52a8\u8bf7\u6c42"\n          style={{ width: 170 }}\n          request={async () => {\n            const res = await mockAsyncFetchData<OptionType>(1000);\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n        />\n        <AsyncSelect\n          trigger="down"\n          placeholder="\u5c55\u793a\u4e0b\u62c9\u6846\u65f6\u52a0\u8f7d"\n          style={{ width: 170 }}\n          request={async () => {\n            const res = await mockAsyncFetchData<OptionType>(1000);\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n        />\n        <AsyncSelect\n          trigger="open"\n          placeholder="\u6253\u5f00\u4e0b\u62c9\u6846\u65f6\u52a0\u8f7d"\n          style={{ width: 170 }}\n          request={async () => {\n            const res = await mockAsyncFetchData<OptionType>(1000);\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n        />\n      </Space>\n    </>\n  );\n};',f="import React, { ReactNode, useState } from 'react';\nimport { Space } from 'antd';\n\nimport { mockAsyncFetchData } from '../../../tools/mock';\n\nimport { antd } from '@yang/ant-design-plus';\n\nconst { AsyncSelect } = antd;\nconst { Option } = AsyncSelect;\n\ntype ValueType = {\n  id: number;\n  name: ReactNode;\n};\n\nconst defaultValues: ValueType[] = [\n  {\n    name: '\u5c0f\u660e \ud83d\udc66\ud83c\udffb',\n    id: 1,\n  },\n  {\n    name: '\u5c0f\u7ea2 \ud83d\udc67\ud83c\udffb',\n    id: 2,\n  },\n  {\n    name: '\u5c0f\u4e11 \ud83e\udd21',\n    id: 3,\n  },\n];\n\nexport default () => {\n  const [value, setValue] = useState<number>();\n\n  const handleChange = (value: number) => {\n    console.log(`\u9009\u62e9\u4e86${value}`);\n    setValue(value);\n  };\n\n  return (\n    <>\n      <Space>\n        <AsyncSelect\n          value={value}\n          style={{ width: 150 }}\n          placeholder=\"\u6211\u53ef\u4ee5\u81ea\u5b9a\u4e49\"\n          request={async () => {\n            const res = await mockAsyncFetchData<ValueType>(1000, defaultValues);\n            const { data } = res || {};\n            return data;\n          }}\n          onChange={handleChange}\n          customOption={(item: ValueType, index: number) => {\n            return (\n              <Option value={item.id} disabled={index > 1} key={item.id}>\n                {item.name + ' \ud83d\udc49\ud83c\udffb  \ud83d\ude01'}\n              </Option>\n            );\n          }}\n        />\n      </Space>\n    </>\n  );\n};",h="import React from 'react';\nimport { antd } from '@yang/ant-design-plus';\nconst { Boo } = antd;\nexport default () => <Boo title=\"antd Boo\" />;",b="import React from 'react';\nimport { antdm } from '@yang/ant-design-plus';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo1\" />;",v="import React from 'react';\nimport { antdm } from '@yang/ant-design-plus';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo2\" />;",y="import React from 'react';\nimport { antdm } from '@yang/ant-design-plus';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo3\" />;",g="import React from 'react';\nimport { antdm } from '@yang/ant-design-plus';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo4\" />;",w="import React from 'react';\nimport { antdm } from '@yang/ant-design-plus';\nconst { Boo } = antdm;\n\nexport default () => <Boo title=\"antdm Boo6\" />;",x={"async-select-demo1":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(6)]).then(t.bind(null,"itTO"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"tools/mock.ts":{import:"../../../tools/mock",content:m}},dependencies:{antd:{version:"4.18.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"async-select-demo1"}},"async-select-demo2":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(6)]).then(t.bind(null,"PQQW"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:p},"tools/mock.ts":{import:"../../../tools/mock",content:m}},dependencies:{antd:{version:"4.18.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"async-select-demo2"}},"async-select-demo3":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(6)]).then(t.bind(null,"LcSn"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:f},"tools/mock.ts":{import:"../../../tools/mock",content:m}},dependencies:{antd:{version:"4.18.3",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"async-select-demo3"}},"boo-demo1":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"3x2f"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:h}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo1"}},"boo-demo1-1":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"ohoj"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo1-1"}},"boo-demo2":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"kZgO"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:v}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo2"}},"boo-demo3":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"XG+t"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:y}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo3"}},"boo-demo4":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"S5ss"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:g}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo4"}},"boo-demo5":{component:Object(l["c"])({loader:function(){var e=Object(c["a"])(u.a.mark((function e(){return u.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(2),t.e(7)]).then(t.bind(null,"FpYi"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:w}},dependencies:{react:{version:"17.0.2"}},componentName:"boo",identifier:"boo-demo5"}}},O=t("x2v5"),k=t("KcUY"),S=t.n(k);n["default"]=e=>r.a.createElement(S.a,Object(a["a"])({},e,{config:s,demos:x,apis:O}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"ant-design","path":"/components/ant-design","meta":{"order":1},"children":[{"path":"/components/ant-design/async-select","title":"AsyncSlect \u5f02\u6b65\u9009\u62e9\u5668","meta":{"order":1}},{"path":"/components/ant-design/boo","title":"Boo \u7ec4\u4ef6","meta":{"order":1}}]},{"title":"antd-design-mobile","path":"/components/antd-design-mobile","meta":{"order":2},"children":[{"path":"/components/antd-design-mobile/boo","title":"Boo \u7ec4\u4ef6","meta":{"order":1}}]}],"*":[{"path":"/","title":"ant-design-plus","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"title":"\u7ec4\u4ef6","path":"/components"},{"title":"GitHub","path":"https://github.com/yangdepp/ant-design-plus"}]},"title":"ant-design-plus","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{"hd":{"rules":[]}}}')},x2v5:function(e){e.exports=JSON.parse("{}")}}]);