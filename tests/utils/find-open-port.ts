import { AddressInfo, createServer } from 'net';

export function findOpenPort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.unref();
    server.on('error', reject);
    server.listen(0, () => {
      const { port } = server.address() as AddressInfo;

      server.close(() => {
        resolve(port);
      });
    });
  });
}
