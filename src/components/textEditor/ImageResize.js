import { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);
export default ImageResize;

/* Quill uill-image-resize-module-react js모듈을 이용하기 위한 js파일 
  타입 추가를 위해서는 d.ts 파일 만들어서 사용할 것
*/
