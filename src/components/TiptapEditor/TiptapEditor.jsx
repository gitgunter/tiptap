import { useState, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Highlight from '@tiptap/extension-highlight';
import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import Heading from '@tiptap/extension-heading';
import OrderedList from '@tiptap/extension-ordered-list';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';

import TiptapBubbleMenu from '../TiptapBubbleMenu/TiptapBubbleMenu';

import './TiptapEditor.css';
import { Download04Icon, FileAttachmentIcon } from '../../assets/icons';

const TiptapEditor = () => {
  const [currentNode, setCurrentNode] = useState('');

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const jsonContent = JSON.parse(content);
        editor.commands.setContent(jsonContent);
      };
      reader.readAsText(file);
    }
  };

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Highlight,
      Blockquote,
      Bold,
      Italic,
      Underline,
      Strike,
      ListItem,
      BulletList,
      OrderedList,
      Heading,
      TextStyle,
      Color,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'What’s the title?';
          }
          return `Escribe algo, o pulsa ' / ' para comandos...`;
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      setCurrentNode(getNodeType(editor));
    },
    onSelectionUpdate: ({ editor }) => {
      setCurrentNode(getNodeType(editor));
    },
    content: '',
  });

  const getNodeType = (editor) => {
    const { selection } = editor.state;
    const { $anchor } = selection;
    let nodeType = '';

    if ($anchor.nodeAfter) {
      const node = $anchor.nodeAfter;
      nodeType = node.type.name;
      if (nodeType === 'heading') {
        nodeType += ` ${node.attrs.level}`;
      }
    } else {
      const node = $anchor.parent;
      nodeType = node.type.name;
      if (nodeType === 'heading') {
        nodeType += ` ${node.attrs.level}`;
      }
    }

    return nodeType;
  };

  const handleGetJSONContent = () => {
    if (editor) {
      const jsonContent = editor.getJSON();
      const jsonString = JSON.stringify(jsonContent, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'editor-content.json';
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className='editorContainer'>
      <EditorContent
        editor={editor}
        spellCheck='false'
        className='tiptapEditor'
      />
      <div className='floatingButtonWrapper'>
        <button onClick={handleButtonClick} className='btn'><FileAttachmentIcon size={20} />Subir Archivo</button>
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          className='hideInput'
        />
        <button onClick={handleGetJSONContent} className='btn'>
          <Download04Icon size={20} />
          Download JSON
        </button>
      </div>
      {editor && <TiptapBubbleMenu editor={editor} currentNode={currentNode} />}
    </div>
  );
};

export default TiptapEditor;
