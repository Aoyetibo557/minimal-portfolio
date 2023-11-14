const truncateString = (str: any, n: any = 20) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

export { truncateString };
