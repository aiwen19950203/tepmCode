import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
class App extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    );
  }
}

// 组件是 jsx

export default App;

// 拆分组件  拆分界面 抽取组件

// 实现静态组件，实现组件的静态页面效果

// 实现动态组件

//  数据类型
//  数据名称
//  保存在哪个组件

// 交互

// 从绑定事件监听开始
