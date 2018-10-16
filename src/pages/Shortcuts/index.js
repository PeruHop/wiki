import React, {Component} from "react";
import {Divider, Table, Tag, Icon} from 'antd';
const pageSize = 30;

const columns = [{
    title: 'Action',
    width: 250,
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: <p>Intellij <br/> Shorcuts</p>,
    width: 150,
    key: 'shortcut',
    dataIndex: 'shortcut',
    render: shortcut => (
        <span>
      {shortcut.map(tag => <Tag color="blue"
                                key={tag}>{tag}</Tag>)}
    </span>
    ),
}, {
    title: <p>WebStorm <br/> Shorcuts</p>,
    width: 180,
    key: 'wshortcut',
    dataIndex: 'wshortcut',
    render: wshortcut => (
        <span>
      {wshortcut.map(tag => <Tag color="blue"
                                 key={tag}>{tag}</Tag>)}
    </span>
    ),
}, {
    title: 'Options',
    width: 180,
    key: 'Edit',
    render: (text, record) => (
        <span>
            <a href="javascript:;"><Icon type="edit"/> Edit</a>
      {/*<a href="javascript:;">Edit {record.name}</a>*/}
      <Divider type="vertical"/>
      <a href="javascript:;"><Icon type="delete"/> Delete</a>
    </span>
    ),
}];

const data = [{
    key: '1',
    name: 'Refactor name',
    shortcut: ['⇧ F6'],
    wshortcut: [],
}, {
    key: '2',
    name: 'Multi select',
    shortcut: ['⇧ Alt'],
    wshortcut: [],
}, {
    key: '3',
    name: 'Open class file',
    shortcut: ['⌘ ⇧ O'],
    wshortcut: [],
}, {
    key: '4',
    name: 'Search usage',
    shortcut: ['Alt F7'],
    wshortcut: [],
}, {
    key: '5',
    name: 'Format code',
    shortcut: [' Alt ⌘ L'],
    wshortcut: [],
}, {
    key: '6',
    name: 'Optimize imports',
    shortcut: ['Ctrl Alt O'],
    wshortcut: [],
}, {
    key: '7',
    name: 'Delete line',
    shortcut: ['⌘ ←'],
    wshortcut: [],
}, {
    key: '8',
    name: 'Duplicate Line',
    shortcut: ['⌘ D'],
    wshortcut: [],
}, {
    key: '9',
    name: 'Open IDE preferences',
    shortcut: ['⌘ ,'],
    wshortcut: [],
}, {
    key: '10',
    name: 'Reformat Code',
    shortcut: ['Alt ⇧ ⌘ L'],
    wshortcut: [],
}, {
    key: '11',
    name: 'Generate test',
    shortcut: ['Shift ⌘ T'],
    wshortcut: [],
}, {
    key: '12',
    name: 'Run test',
    shortcut: ['⇧ Ctrl R'],
    wshortcut: [],
}, {
    key: '13',
    name: 'Select next ocurrence',
    shortcut: ['Ctrl G'],
    wshortcut: ['Ctrl G'],
}, {
    key: '14',
    name: 'Run test',
    shortcut: ['⇧ Ctrl R'],
    wshortcut: [],
}, {
    key: '15',
    name: 'Remove intro in line',
    shortcut: ['Ctrl ⇧ J'],
    wshortcut: [],
}, {
    key: '15',
    name: 'Remove intro in line',
    shortcut: ['Ctrl ⇧ J'],
    wshortcut: [],
}, {
    key: '16',
    name: 'Comment Line',
    shortcut: ['⌘ /'],
    wshortcut: [],
}];

class Shortcuts extends Component {
    render() {
        return (
            <div>
                <h2>Shortcuts</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Table columns={columns}
                       dataSource={data}
                       pagination={data.length > pageSize && { pageSize }}
                       scroll={{ x:600 }}
                />
            </div>
        )
    }
}

export default Shortcuts;