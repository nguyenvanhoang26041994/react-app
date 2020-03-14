import React from 'react';
import Textarea from '../../components/Textarea';
import Textbox from '../../components/Textbox';
import Select from '../../components/Select';
import Button from '../../components/Button';

const FormDocumentPage = () => {
  return (
    <div id="form-document-page" className="flex">
      <div className="w-1/4 px-2">
        <Button className="mb-3">TEXTBOX</Button>
        <Textbox
          className="mb-2"
          label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
        />
        <Textbox
          className="mb-2"
          require
          label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
          error="Không được để trống"
        />
        <Textbox
          className="mb-2"
          // label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
        />
        <Textbox
          className="mb-2"
          require
          // label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
          error="Không được để trống"
        />
      </div>
      <div className="w-1/4 px-3">
      <Button className="mb-3">PASSWORD</Button>
        <Textbox
          className="mb-2"
          type="password"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <Textbox
          className="mb-2"
          type="password"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          error="Không chứa ký tự đặc biệt"
        />
        <Textbox
          className="mb-2"
          type="password"
          // label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <Textbox
          className="mb-2"
          type="password"
          // label="Mật khẩu"
          placeholder="Nhập mật khẩu"
          error="Không chứa ký tự đặc biệt"
        />
      </div>
      <div className="w-1/4 px-3">
        <Button className="mb-3">TEXTAREA</Button>
        <Textarea
          className="mb-2"
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
        />
        <Textarea
          className="mb-2"
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
          error="Nội dung ít nhất 50 ký tự"
        />
        <Textarea
          className="mb-2"
          // label="Lời nhắn"
          placeholder="Nhập lời nhắn"
        />
        <Textarea
          className="mb-2"
          // label="Lời nhắn"
          placeholder="Nhập lời nhắn"
          error="Nội dung ít nhất 50 ký tự"
        />
      </div>
      <div className="w-1/4 px-3">
        <Button className="mb-3">SELECTBOX</Button>
        <Select
          className="mb-2"
          label="Giới tính"
          placeholder="--Chọn giới tính--"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
        <Select
          className="mb-2"
          label="Giới tính"
          placeholder="--Chọn giới tính--"
          error="Không được để trống"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
        <Select
          className="mb-2"
          // label="Giới tính"
          placeholder="--Chọn giới tính--"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
        <Select
          className="mb-2"
          // label="Giới tính"
          placeholder="--Chọn giới tính--"
          error="Không được để trống"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
      </div>
    </div>
  )
};

export default FormDocumentPage;
