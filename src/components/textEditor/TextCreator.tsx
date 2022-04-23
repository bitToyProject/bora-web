import Input from 'components/common/Input';
import { DraftEditorCommand, Editor, EditorState, RichUtils } from 'draft-js';
import React, { useState } from 'react';
import { ITitle } from 'types/textEditor.types';

interface Props {
  // defaultState: EditorState;
}

const TextCreator = ({}: Props) => {
  const [title, setTitle] = useState<ITitle>({
    major: '',
    sub: '',
  });
  const [editState, setEditState] = useState<EditorState>(() => EditorState.createEmpty());
  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editState, command);

    if (newState) {
      setEditState(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  const handleToggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditState(RichUtils.toggleInlineStyle(editState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditState(RichUtils.toggleBlockType(editState, blockType));
  };

  // console.log(editState);
  return (
    <div>
      <Input
        name="major"
        value={title.major}
        onChange={(e) => setTitle({ ...title, major: e.target.value })}
        placeholder="Title"
      />
      <Input
        name="sub"
        value={title.sub}
        onChange={(e) => setTitle({ ...title, sub: e.target.value })}
        placeholder="SubTitle"
      />

      <button
        disabled={editState.getUndoStack().size <= 0}
        onMouseDown={() => setEditState(EditorState.undo(editState))}>
        undo
      </button>
      <button
        disabled={editState.getRedoStack().size <= 0}
        onMouseDown={() => setEditState(EditorState.redo(editState))}>
        redo
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, 'header-one')}>h1</button>
      <button onMouseDown={(e) => handleBlockClick(e, 'header-two')}>h2</button>
      <button onMouseDown={(e) => handleBlockClick(e, 'header-three')}>h3</button>
      <button onMouseDown={(e) => handleBlockClick(e, 'unstyled')}>normal</button>
      <button onMouseDown={(e) => handleToggleClick(e, 'BOLD')}>bold</button>
      <button onMouseDown={(e) => handleToggleClick(e, 'ITALIC')}>italic</button>
      <button onMouseDown={(e) => handleToggleClick(e, 'STRIKETHROUGH')}>strikthrough</button>
      <button onMouseDown={(e) => handleBlockClick(e, 'ordered-list-item')}>ol</button>
      <button onMouseDown={(e) => handleBlockClick(e, 'unordered-list-item')}>ul</button>
      <Editor
        editorState={editState}
        onChange={setEditState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Write Down Contents"
      />
    </div>
  );
};

export default TextCreator;
