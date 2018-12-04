export default ({ pageCount, page }, current) =>
  Number.isInteger(page) && page >= 1 && page !== current && pageCount >= page;
