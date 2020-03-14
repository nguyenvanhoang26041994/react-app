import React, { useCallback, useRef, useState } from 'react';
import cn from 'classnames';

import Textbox from '../../../components/Textbox';
import Textarea from '../../../components/Textarea';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Radio from '../../../components/Radio';
import Switch from '../../../components/Switch';
import Confirm from '../../../components/Confirm';

const RegisterDesign = ({ className, }) => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const formRef = useRef();
  const onSubmit = useCallback(e => {
    e.preventDefault();
  }, []);

  const handleCleanForm = useCallback(() => {
    formRef.current.reset();
  }, [formRef]);

  return (
    <div className={cn('register-design', className)}>
      <form onSubmit={onSubmit} ref={formRef}>
        <h2 className="mb-5">ĐĂNG KÝ THÀNH VIÊN</h2>
        <Textbox
          className="mb-3"
          label="Tên tài khoản"
          placeholder="Nhập tên tài khoản"
        />
        <Textbox
          className="mb-3"
          label="Mật khẩu"
          type="password"
          placeholder="Nhập mật khẩu"
        />
        <Textbox
          className="mb-3"
          label="Nhập lại mật khẩu"
          type="password"
          placeholder="Nhập lại mật khẩu"
        />
        <Select
          className="mb-3"
          label="Địa chỉ liên lạc"
          placeholder="--Chọn địa chỉ--"
        >
          <Select.Option value="HCM">TP.HCM</Select.Option>
          <Select.Option value="HN">Hà Nội</Select.Option>
          <Select.Option value='QB"'>Quảng Bình</Select.Option>
          <Select.Option value='DN"'>Đà Nẵng</Select.Option>
        </Select>
        <Textarea
          className="mb-3"
          label="Lý do gia nhập"
          placeholder="Lý do bạn muốn gia nhập với chúng tôi là gì?"
        />
        <div className="flex justify-end">
          <Button className="mr-2" onClick={handleCleanForm}>Cancel</Button>
          <Confirm open={registerOpen} onClose={() => setRegisterOpen(false)} header="Đăng ký tài khoản">
            Bạn đã chắc chưa?
          </Confirm>
          <Button onClick={() => setRegisterOpen(true)}>Đăng ký</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterDesign;
