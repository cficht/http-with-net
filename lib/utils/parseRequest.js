module.exports = rawRequest => {
  const pattern = /(?<method>[A-Z]+)\s(?<path>.)/;
  const parse = rawRequest.match(pattern).groups;

  if(rawRequest.includes('\r')) {
    const bodySplit = rawRequest.split('\n');
    const body = bodySplit[bodySplit.length - 1];
    parse.body = body;
  }
  return parse;
};
