// eslint-disable-next-line no-undef
const response = await fetch(`http://${process.env.HOST}:3006/ping`);
if (response.status === 200) process.exit(0);
else process.exit(1);
