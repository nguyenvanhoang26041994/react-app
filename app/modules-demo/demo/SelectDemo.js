/* eslint-disable no-console, no-alert */
import React from 'react';
import { Button, Select } from '../../components/core';

class Demo extends React.Component {
  options = [
    {
      key: 'option-1',
      value: 'option-1',
      children: (
        <span
          aria-label="admin"
          role="img"
          style={{
            color: '#9627ba',
            fontWeight: 500,
          }}
        >
          ✨Nguyễn Văn Hoàng
        </span>
      ),
    },
    { key: 'option-2', value: 'option-2', children: 'Nguyễn Văn Minh' },
    { key: 'option-3', value: 'option-3', children: 'Trương Gia Bảo' },
    { key: 'option-4', value: 'option-4', children: 'Quế Ngọc Vân' },
    { key: 'option-5', value: 'option-5', children: 'Doàn Gia Thế' },
    { key: 'option-6', value: 'option-6', children: 'Nhạc Bảo Quân' },
    { key: 'option-7', value: 'option-7', children: 'Trương Quang Khải' },
    { key: 'option-8', value: 'option-8', children: 'Thái Dương Hệ' },
    { key: 'option-9', value: 'option-9', children: 'Võ Sĩ Quyền Anh' },
    { key: 'option-10', value: 'option-10', children: 'Đong Dương Bất Bại' },
    { key: 'option-11', value: 'option-11', children: 'Ngũ Hành Sơn' },
    {
      key: 'option-12',
      value: 'option-12',
      children: 'Đà Nẵng',
    },
    { key: 'option-13', value: 'option-13', children: 'Quảng Bình' },
    { key: 'option-14', value: 'option-14', children: 'Sơn Đòng' },
    { key: 'option-15', value: 'option-15', children: 'Mạc Quỳnh Chi' },
    { key: 'option-15-1', value: 'option-15-1', children: 'Yến Yến' },
    { key: 'option-17', value: 'option-17', children: 'Hoàng Gia Bảo' },
    { key: 'option-18', value: 'option-18', children: 'Hân Nguyễn' },
    { key: 'option-19', value: 'option-19', children: 'Thái Ba Gia' },
    { key: 'option-20', value: 'option-20', children: 'Đoãng Huynh Ca' },
    { key: 'option-21', value: 'option-21', children: 'Hay Quên Trí Nhớ' },
    { key: 'option-22', value: 'option-22', children: 'Cạn Lời Kiệt Quệ Luôn' },
    { key: 'option-23', value: 'option-23', children: 'Bí Tên Luôn Nè' },
    { key: 'option-24', value: 'option-24', children: 'Đau Đầu Đặt Tên Biến' },
    {
      key: 'option-25',
      value: 'option-25',
      children: 'Không Biết Đặt Như Nào Nên Đặt Rất Là Dài',
    },
    { key: 'option-26', value: 'option-26', children: 'Bó Tay' },
    { key: 'option-27', value: 'option-27', children: 'Quân Nguyễn' },
    { key: 'option-28', value: 'option-28', children: 'ReactJS' },
    { key: 'option-29', value: 'option-29', children: 'React Native' },
    { key: 'option-30', value: 'option-30', children: 'Thái Thái Công' },
    { key: 'option-31', value: 'option-31', children: 'Cạn Lời' },
    { key: 'option-32', value: 'option-32', children: 'Hạn Hạn Lời' },
    { key: 'option-33', value: 'option-33', children: 'Đệ Nhất Thiên Hạ' },
    { key: 'option-34', value: 'option-34', children: 'Vô Địch Thiện Hạ' },
    { key: 'option-35', value: 'option-35', children: 'Thiên Hạ Vô Địch' },
    { key: 'option-36', value: 'option-36', children: 'Thanh Thanh Thanh' },
    { key: 'option-37', value: 'option-37', children: 'Quế Mễ Gia' },
    { key: 'option-38', value: 'option-38', children: 'Tháng Hoà Bình' },
    { key: 'option-39', value: 'option-39', children: 'Bình Yên' },
    {
      key: 'option-40',
      value: 'option-40',
      children: 'Chúng ta không luộc được rau',
    },
  ];

  state = { value: 'option-2' };

  onChange = event => this.setState({ value: event.target.value });

  render() {
    return (
      <div>
        <div className="flex mb-2">
          <Select.Native
            className="ml-1"
            options={[
              { key: 'option-26', value: 'option-26', children: 'Bó Tay' },
              { key: 'option-27', value: 'option-27', children: 'Quân Nguyễn' },
              { key: 'option-28', value: 'option-28', children: 'ReactJS' },
              {
                key: 'option-29',
                value: 'option-29',
                children: 'React Native',
              },
              {
                key: 'option-30',
                value: 'option-30',
                children: 'Thái Thái Công',
              },
              { key: 'option-31', value: 'option-31', children: 'Cạn Lời' },
              { key: 'option-32', value: 'option-32', children: 'Hạn Hạn Lời' },
              {
                key: 'option-33',
                value: 'option-33',
                children: 'Đệ Nhất Thiên Hạ',
              },
              {
                key: 'option-34',
                value: 'option-34',
                children: 'Vô Địch Thiện Hạ',
              },
              {
                key: 'option-35',
                value: 'option-35',
                children: 'Thiên Hạ Vô Địch',
              },
              {
                key: 'option-36',
                value: 'option-36',
                children: 'Thanh Thanh Thanh',
              },
              { key: 'option-37', value: 'option-37', children: 'Quế Mễ Gia' },
              {
                key: 'option-38',
                value: 'option-38',
                children: 'Tháng Hoà Bình',
              },
              { key: 'option-39', value: 'option-39', children: 'Bình Yên' },
            ]}
          />
          <Button color="primary" className="ml-1">
            Button
          </Button>
        </div>
        <div className="flex mb-2">
          <Button color="primary" className="mr-1">
            Button
          </Button>
          <Select
            value={this.state.value}
            onChange={this.onChange}
            options={this.options}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
