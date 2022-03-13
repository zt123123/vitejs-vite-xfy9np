import stringLength from 'string-length';
const nativeLength = '🙂📱♐️💾🚗🍋🐶☠️🈶️'.length;
const actualLength = stringLength('🙂📱♐️💾🚗🍋🐶☠️🈶️');

document.querySelector('#app').innerHTML = `
  <div>nativeLength: ${nativeLength}</div>
  <div>actualLength: ${actualLength}</div>
`;
