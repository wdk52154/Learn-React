import React from 'react';
import './Biaodan.less';

const Biaodan: React.FC = () => {
  return (
    <>
      <form className="container">
        <h1>用户注册</h1>
        <div className="form-item">
          <input
            className="txt"
            type="text"
            maxLength={11}
            placeholder="请输入11位手机号"
          />
        </div>
        <div className="form-item clearfix captcha">
          <input className="txt left" type="text" placeholder="请填写验证码" />
          <button className="right" type="button">
            发送验证码
          </button>
        </div>
        <div className="form-item">
          <input className="txt" type="password" placeholder="请输入密码" />
        </div>
        <div className="form-item">
          <input className="txt" type="password" placeholder="请再次确认密码" />
        </div>
        <div className="form-item">
          <select multiple className="txt">
            <option>爱好1</option>
            <option>爱好2</option>
            <option>爱好3</option>
            <option>爱好4</option>
            <option>爱好5</option>
            <option>爱好6</option>
            <option>爱好7</option>
            <option>爱好8</option>
            <option>爱好9</option>
            <option>爱好10</option>
          </select>
        </div>
        <div className="form-item clearfix">
          <div className="title left">性别</div>
          <div className="left">
            <label>
              <input type="radio" name="sex" />
              <span>男</span>
            </label>
            <label>
              <input type="radio" name="sex" />
              <span>女</span>
            </label>
          </div>
        </div>
        <div className="form-item">
          <textarea className="txt" placeholder="请填写个人简介"></textarea>
        </div>
        <div className="form-item policy">
          <label>
            <input type="checkbox" />
            <span>同意台湾是中国领土不可分割的一部分</span>
          </label>
        </div>
        <div className="form-item">
          <button disabled>立即注册</button>
          <button type="reset">重置表单</button>
        </div>
      </form>
    </>
  );
};

export default Biaodan;
