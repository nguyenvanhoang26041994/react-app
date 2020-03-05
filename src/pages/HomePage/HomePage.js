import React from 'react';
import Button from '../../components/Button';
import Textbox from '../../components/Textbox';

require('./HomePage.scss');

const HomePage = () => (
  <div className="flex min-h-screen p-3">
    <div className="flex flex-col w-1/4">
      <div className="mb-5">
        <Button className="mr-3">Normal Button</Button>
      </div>
    </div>
    <div className="flex flex-col w-1/5">
      <Textbox className="mr-3 w-full mb-2" label="Tên đăng nhập" placeholder="Tên đăng nhập..." />
      <Textbox className="mr-3 w-full mb-2" label="Tên hiển thị" placeholder="Tên hiển thị..." />
      <Textbox className="mr-3 w-full mb-2" label="Email" placeholder="Email..." />
      <Textbox className="mr-3 w-full mb-2" label="Mật khẩu" placeholder="Mật khẩu..." type="password" />
      <Textbox className="mr-3 w-full mb-2" label="Nhập lại mật khẩu" placeholder="Nhập lại mật khẩu..." type="password" />
      <Textbox className="mr-3 w-full mb-2" label="Disabled" type="password" disabled />
      <div className="flex justify-end">
        <Button>Đăng ký</Button>
      </div>
    </div>
  </div>
);

export default HomePage;
