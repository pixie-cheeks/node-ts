import https from 'node:https';

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode?.toString() ?? 'N/A'}`);

  res.on('data', (d: string | Uint8Array) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
