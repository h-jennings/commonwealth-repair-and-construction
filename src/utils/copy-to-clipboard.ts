// TODO: Need to ask some who's better at TS
// what would be the correct way to handle this cb
export function copyToClipboard(text: string, cb?: any): void {
  navigator.clipboard.writeText(text).then(() => {
    cb && cb();
  });
}
