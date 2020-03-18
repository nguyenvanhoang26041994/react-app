import React from 'react';
import cn from 'classnames';
import { Table } from '../../components/core';
import PracticeBox from '../../components/PracticeBox';


const data = [
  {
    id: '001',
    name: 'Nguyễn Văn Hoàng',
    sex: 'male',
  },
  {
    id: '002',
    name: 'Nguyễn Văn Minh',
    sex: 'male',
  },
  {
    id: '003',
    name: 'Cao Văn Giang',
    sex: 'male',
  },
  {
    id: '004',
    name: 'Thanh Thu',
    sex: 'female',
  },
  {
    id: '005',
    name: 'Hero Master',
    sex: 'female',
  },
  // {
  //   id: '006',
  //   name: 'Nguyễn Văn Hoàng',
  //   sex: 'male',
  // },
  // {
  //   id: '007',
  //   name: 'Nguyễn Văn Hoàng',
  //   sex: 'male',
  // },
  // {
  //   id: '008',
  //   name: 'Nguyễn Văn Hoàng',
  //   sex: 'male',
  // },
  // {
  //   id: '009',
  //   name: 'Nguyễn Văn Hoàng',
  //   sex: 'male',
  // },
  // {
  //   id: '010',
  //   name: 'Nguyễn Văn Hoàng',
  //   sex: 'male',
  // },
];

export default ({ className }) => {
  return (
    <PracticeBox wrapperClassName={className} className="flex items-center" header="TABLE">
      <Table className="w-full">
        <Table.THead>
          <Table.TR>
            <Table.TH>ID</Table.TH>
            <Table.TH>Tên</Table.TH>
            <Table.TH>Giới tính</Table.TH>
          </Table.TR>
          <tr className="rc-table-expander --header" style={{ height: '0.5em' }} />
        </Table.THead>
        <Table.TBody>
          {data.map(item => (
            <React.Fragment>
              <Table.TR key={item.id} belongBody>
                <Table.TD>{item.id}</Table.TD>
                <Table.TD>{item.name}</Table.TD>
                <Table.TD>{item.sex}</Table.TD>
              </Table.TR>
            </React.Fragment>
          ))}
        </Table.TBody>
        <Table.TFoot>
          <tr className="rc-table-expander --footer" style={{ height: '0.35em' }} />
          <Table.TR isFooter>
            <Table.TD colspan={4}>WELLCOME</Table.TD>
          </Table.TR>
        </Table.TFoot>
      </Table>
    </PracticeBox>
  );
};
