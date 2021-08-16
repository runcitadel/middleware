import fetch from "node-fetch";

fetch(`http://${process.env.HOST}:3006/ping`)
  .then((resp) => {
    if(resp.status === 200)
        process.exit(0);
    else
        process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch((_error) => {
    process.exit(1);
  });
