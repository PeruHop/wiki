import React, { Component } from "react";
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

class Home extends Component {

    onSelectTree = (selectedKeys, info) => {
      console.log('selected', selectedKeys, info);
  };

  render () {
    return (
      <div>
        <h2>Getting Started</h2>
        <p>This is a simple wiki for begginers on React. This guide will allow you to organize your project in an appropriate way so that it is maintainable.</p>
        <h2>U need know previously:</h2>
          <h3>for frontend</h3>
            <ul>
              <li><a href="https://reactjs.org/docs/hello-world.html">React</a></li>
              <li><a href="http://2ality.com/2015/02/es6-classes-final.html">ECMAS 6 </a>(Quickly Guide)</li>
              <li><a href="https://sass-guidelin.es/">SASS</a></li>
            </ul>
          <h3>for backend</h3>
            <ul>
                <li><a href="https://nodejs.org/en/docs/">Node</a></li>
                <li><a href="https://spring.io/docs">Spring</a></li>
                <li><a href="https://firebase.google.com/docs/storage/web/start?authuser=0">Firestore</a></li>
            </ul>
        <h2>We use:</h2>

          <Tree
              showLine
              defaultExpandedKeys={['0-0-0']}
              onSelect={this.onSelectTree}
          >
              <TreeNode title="parent 1" key="0-0">
                  <TreeNode title="React Docs" key="0-0-0">
                      <TreeNode title="leaf" key="0-0-0-0" dataRef={<a href="https://reactjs.org/docs/hello-world.html">React</a>}/>
                      <TreeNode title="leaf" key="0-0-0-1" />
                      <TreeNode title="leaf" key="0-0-0-2" />
                  </TreeNode>
                  <TreeNode title="parent 1-1" key="0-0-1">
                      <TreeNode title="leaf" key="0-0-1-0" />
                  </TreeNode>
                  <TreeNode title="parent 1-2" key="0-0-2">
                      <TreeNode title="leaf" key="0-0-2-0" />
                      <TreeNode title="leaf" key="0-0-2-1" />
                  </TreeNode>
              </TreeNode>
          </Tree>
      </div>

    )
  }
}

export default Home;