// import ResizeModule from '@botom/quill-resize-module'
import styled from '@emotion/styled';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import './ImageResize';
import 'react-quill/dist/quill.snow.css';
const Parchment = Quill.import('parchment');

/*
  TextEditor.tsx Hayden 220526
  react-quill를 사용하여 구현
 */
type Props = {
  value: string;
  onChange: (value: string) => void;
  reqUrl: string;
  resUrl: string;
};
const TextEditor = ({ value, onChange, reqUrl, resUrl }: Props) => {
  // hooks 선언부
  const QuillRef = useRef<ReactQuill>();
  // const [preview, setPreview] = useState<EditorConfig<any>>({
  //   mode: '',
  // })
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // quill?.root.addEventListener('dblclick', (e) => {
  //   const img = Parchment.find(e.target)
  //   if (img instanceof ImageBlot) {
  //     quill?.setSelection(img.offset(quill.scroll), 1, 'user')
  //   }
  // })

  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement('input');
    let url = '';
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = async () => {
      const file = input.files;
      console.log('input', input);
      if (file !== null) {
        const formData = new FormData();
        // 현재 커서 위치 저장
        let range: any = QuillRef.current?.getEditor().getSelection(true);
        let quill = QuillRef.current?.getEditor();
        console.log('file1', file);
        formData.append('files', file[0]);
        console.log('formData', formData.get('file'));
        try {
          const res = axios.post('http://172.30.1.16:8080/edits/save', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Credentials': 'include',
            },
          });
          // const res = await apiRequest({
          //   url: reqUrl,
          //   method: 'post',
          //   data: formData,
          //   headers: {
          //     'Content-Type': 'multipart/form-data',
          //   },
          //   onUploadProgress: (event) => {
          //     console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
          //   },
          // });

          url = `1233`;

          if (range !== null && range !== undefined) {
            // 정상적으로 업로드 됐다면 로딩 placeholder 삭제
            quill?.setSelection(range.index, 1);
            quill?.insertEmbed(range.index, 'image', url);
            quill?.root.querySelectorAll('img').forEach((item) => {
              item.style.cursor = 'pointer';
              // item.addEventListener('dblclick', (e: MouseEvent) => {
              //   window.open(url)
              //   // Modal.confirm({
              //   //   centered: true,
              //   //   content: <img src={url}></img>,
              //   // })
              // })
            });
            range = QuillRef.current?.getEditor().getSelection();
            // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
            setTimeout(() => quill?.setSelection(range.index + 1), 0);
          }
          return { ...res, success: true };
        } catch (error) {
          const err = error as AxiosError;
          // if (range !== null && range !== undefined) {
          //   console.log('whitttt')
          //   QuillRef.current?.getEditor()?.deleteText(range.index, 1)
          // }
          return { ...err.response, success: false };
        }
      }
    };
  };

  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀림
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'],
          ['blockquote', 'code-block'],
          [{ header: [1, 2, 3, false] }],
          // [{ color: [] }, { background: [] }],
          [{ color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
          // ['image', 'video', 'link'],
          ['image', 'link'],
        ],
        handlers: {
          image: () => imageHandler(),
        },
      },
    }),
    [],
  );
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'size',
    'color',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
  ];

  return (
    <>
      <TextEditorWrapper>
        <ReactQuill
          ref={(element) => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
          value={value}
          onChange={(content, delta, source, editor) => {
            if (editor.getLength() > 1) {
              return onChange(content);
            } else {
              return onChange('');
            }
          }}
          modules={{
            ...modules,
            imageResize: {
              modules: ['Resize', 'DisplaySize', 'Toolbar'],
              parchment: Parchment,
            },
          }}
          theme="snow"
          placeholder="내용을 입력해주세요."
          formats={formats}
        />
      </TextEditorWrapper>
    </>
  );
};

export default TextEditor;

export const TextEditorWrapper = styled.div`
  position: relative;
  > button {
    position: absolute;
    right: 8px;
    top: 8px;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 4px;
    font-weight: bold;
    :hover {
      color: #06c;
    }
  }
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  .qui #editor-resizer {
    z-index: 0;
  }
  .ql-align .ql-picker .ql-icon-picker {
    height: auto !important;
  }
  .ql-syntax {
    background-color: ${({ theme }) => theme.colors.gray} !important;
    color: ${({ theme }) => theme.colors.warning} !important;
    max-width: fit-content;
    white-space: pre-line;
  }
  .ql-container {
    height: 20rem;

    .ql-editor {
      font-size: 1rem;
      height: 20rem;
    }
  }
  #editor-resizer {
    right: 0;
    left: 100% !important;
  }
`;
