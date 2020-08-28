export const parseAddresses = (data, page?) => {
  const arr = data
  .split('\n')
  .map(line => line.split(','))
  .reduce((addresses, line) => {
    addresses.push({
      number: parseInt(line[0], 10),
      street: line[0].replace(/[0-9]/g, ''),
      city: line[1],
      state: line[2].replace(/[0-9]/g, '').trim(),
      zip: parseInt(line[2].replace(/\D/g, '') , 10)
    });
    return addresses;
  }, []);
  return {
    size: arr.length,
    data: page !== null ? arr.slice(page * 10, (page + 1)  * 10) : arr
  };
};
