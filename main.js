import stringLength from 'string-length';
const nativeLength = 'ππ±βοΈπΎπππΆβ οΈπΆοΈ'.length;
const actualLength = stringLength('ππ±βοΈπΎπππΆβ οΈπΆοΈ');

document.querySelector('#app').innerHTML = `
  <div>nativeLength: ${nativeLength}</div>
  <div>actualLength: ${actualLength}</div>
`;
