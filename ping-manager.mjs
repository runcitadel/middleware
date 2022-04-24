const resp = await fetch(`http://${process.env.HOST}:3006/ping`);
if (resp.status === 200) process.exit(0);
else process.exit(1);
