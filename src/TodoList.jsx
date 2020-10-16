import React, {Component, Fragment} from 'react';
import './todolist.css';

class TodoList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      inputValue: '',
      list: ['123', '145'],
    };
  }
  render () {
    return (
      // Fragment   16版本提供的占位符
      (
        <Fragment>
          <label htmlFor="insertArea">输入内容</label>
          {/* 4.希望点击   <label htmlFor="insertArea">输入内容</label>  光标自动聚焦到 input 框*/}
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind (this)}
          />
          {/* 1.用组件的this去改变函数的this */}
          <button onClick={this.handleBtnClick.bind (this)}>提交</button>
          <ul>
            {this.state.list.map ((item, index) => {
              return (
                <li
                  key={index}
                  onClick={this.handleItemDelete.bind (this, index)}
                  dangerouslySetInnerHTML={{__html: item}}
                >
                  {/* 3. dangerouslySetInnerHTML  表示 不需要对h1标签转义，那就不需要写{item} */}
                  {/* {item} */}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )
    );
  }
  handleInputChange (e) {
    console.log (e.target.value);
    // this.state.inputValue = e.target.value;
    // 2.不能直接去改变组件的值，必须调用setState() 这个方法去改变
    this.setState ({
      inputValue: e.target.value,
    });
  }
  //添加项
  handleBtnClick () {
    this.setState ({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  }
  //   删除项
  handleItemDelete (index) {
    console.log (index);
    // immutable  state 不允许我们做任何改变
    const list = [...this.state.list];
    list.splice (index, 1);
    this.setState ({
      list: list,
    });
  }
}
export default TodoList;
