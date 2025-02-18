"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3896],{34588:function(o,n,t){t.r(n),t.d(n,{demos:function(){return d}});var e=t(75271),d={"copy-demo-basic":{component:e.memo(e.lazy(function(){return Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(332),t.e(6409)]).then(t.bind(t,29565))})),asset:{type:"BLOCK",id:"copy-demo-basic",refAtomIds:["copy"],dependencies:{"index.tsx":{type:"FILE",value:t(27087).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"}},entry:"index.tsx",title:"\u70B9\u51FB\u6309\u94AE\uFF0C\u8FDB\u884C\u590D\u5236"},context:void 0,renderOpts:void 0},"copy-demo-custom":{component:e.memo(e.lazy(function(){return Promise.all([t.e(5959),t.e(3517),t.e(1066),t.e(1270),t.e(332),t.e(6409)]).then(t.bind(t,32294))})),asset:{type:"BLOCK",id:"copy-demo-custom",refAtomIds:["copy"],dependencies:{"index.tsx":{type:"FILE",value:t(42949).Z},react:{type:"NPM",value:"18.3.1"},"dt-react-component":{type:"NPM",value:"4.3.1"}},entry:"index.tsx",title:"\u81EA\u5B9A\u4E49\u6309\u94AE",description:"\u901A\u8FC7hideTooltip\u5C5E\u6027\uFF0C\u53EF\u4EE5\u9690\u85CF\u9ED8\u8BA4\u7684\u63D0\u793A"},context:void 0,renderOpts:void 0}}},14031:function(o,n,t){t.r(n),t.d(n,{texts:function(){return e}});const e=[{value:"\u590D\u5236\u6587\u672C\u5230\u7C98\u8D34\u7248",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"text",paraId:1,tocIndex:5},{value:"\u9700\u8981\u590D\u5236\u7684\u6587\u672C",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"title",paraId:1,tocIndex:5},{value:"\u5728 Tooltip \u5C55\u793A\u7684\u6587\u672C",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"\u590D\u5236",paraId:1,tocIndex:5},{value:"hideTooltip",paraId:1,tocIndex:5},{value:"\u662F\u5426\u9690\u85CF Tooltip",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"button",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u6309\u94AE",paraId:1,tocIndex:5},{value:"React.ReactNode",paraId:1,tocIndex:5},{value:"<CopyOutlined />",paraId:1,tocIndex:5},{value:"onCopy",paraId:1,tocIndex:5},{value:"\u590D\u5236\u540E\u7684\u56DE\u8C03\u51FD\u6570",paraId:1,tocIndex:5},{value:"(text: string) => void",paraId:1,tocIndex:5},{value:"() => message.success('\u590D\u5236\u6210\u529F')",paraId:1,tocIndex:5}]},27087:function(o,n){n.Z=`import React from 'react';
import { Copy } from 'dt-react-component';

const text =
    '\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.';

export default () => {
    return (
        <div>
            <Copy text={text} title="\u590D\u5236\u8BE5\u6587\u672C" />
            <p>{text}</p>
        </div>
    );
};
`},42949:function(o,n){n.Z=`import React from 'react';
import { Copy } from 'dt-react-component';

const text =
    '\u57FA\u4E8E ant-design \u7684 React UI \u7EC4\u4EF6\u5E93\u3002 \u4E3B\u8981\u7528\u4E8E\u4E2D\uFF0C\u540E\u53F0\u4EA7\u54C1\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u6EE1\u8DB3\u66F4\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u7EC4\u4EF6\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u4E5F\u6709\u57FA\u4E8E\u539F\u751F javascript \u5B9E\u73B0\u7684\u4E1A\u52A1\u7EC4\u4EF6\uFF0C\u4F8B\u5982ContextMenu\uFF0CKeyEventListener\u7B49.';

export default () => {
    return (
        <div>
            <Copy text={text} button={<a>\u590D\u5236\u6587\u672C</a>} hideTooltip />
            <p>{text}</p>
        </div>
    );
};
`}}]);
