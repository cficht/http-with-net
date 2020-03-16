module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  const res = 
`HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}`;

  return res;
};
