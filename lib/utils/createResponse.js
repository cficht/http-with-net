module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  const res = `HTTP/1.1 ${status}\nAccept-Ranges: bytes\nContent-Length: ${body.length}\nContent-Type: ${contentType}\n\n${body}`;
  return res;
};
