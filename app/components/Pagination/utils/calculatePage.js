export default ({ total, pageSize }) =>
  pageSize ? Math.floor((total - 1) / pageSize) + 1 : pageSize;
