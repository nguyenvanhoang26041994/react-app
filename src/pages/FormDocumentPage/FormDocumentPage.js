import React from 'react';
import Textarea from '../../components/Textarea';
import Textbox from '../../components/Textbox';
import Select from '../../components/Select';

const FormDocumentPage = ({ children }) => {
  return (
    <div id="form-document-page" className="flex mt-20">
      <div className="w-1/3 px-2">
        <h2 className="mb-3">FORM CƠ BẢN</h2>
        <Textbox
          className="mb-2"
          label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
        />
        <Textbox
          className="mb-2"
          type="password"
          label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <Textarea
          className="mb-2"
          label="Lời nhắn"
          placeholder="Nhập lời nhắn"
        />
        <Select
          className="mb-2"
          label="Giới tính"
          placeholder="--Chọn giới tính--"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
      </div>
      <div className="w-1/3 px-2">
        <h2 className="mb-3">FORM WITHOUT LABEL</h2>
        <Textbox
          className="mb-2"
          // label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
        />
        <Textbox
          className="mb-2"
          type="password"
          // label="Mật khẩu"
          placeholder="Nhập mật khẩu"
        />
        <Textarea
          className="mb-2"
          // label="Lời nhắn"
          placeholder="Nhập lời nhắn"
        />
        <Select
          className="mb-2"
          // label="Giới tính"
          placeholder="--Chọn giới tính--"
        >
          <Select.Option value="male">Nam</Select.Option>
          <Select.Option value="female">Nữ</Select.Option>
        </Select>
      </div>
      <div className="w-1/3 px-2">
        <h2 className="mb-3">FORM WITH ERROR</h2>
        <Textbox
          className="mb-2"
          require
          label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
          error="Không được để trống"
        />
        <Textbox
          className="mb-2"
          require
          // label="Tên tài khoản"
          placeholder="Nhập tên tài khoản của bạn"
          error="Không được để trống"
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
          error="Không chứa ký tự đặc biệt"
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
          error="Nội dung ít nhất 50 ký tự"
        />
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
