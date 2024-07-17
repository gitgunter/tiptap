/* eslint-disable react/prop-types */
import { BubbleMenu } from '@tiptap/react';

import css from './TiptapBubbleMenu.module.css';
import {
  Add01Icon,
  ArrowDown01Icon,
  AtIcon,
  ImageAdd02Icon,
  Link02Icon,
  TextAlignCenterIcon,
  TextAlignLeft01Icon,
  TextAlignRight01Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
  UnavailableIcon,
} from '../../assets/icons';
import { useState } from 'react';

const TiptapBubbleMenu = ({ editor, currentNode }) => {
  const [isColorSelector, setIsColorSelector] = useState(false);
  const [isBasicBlocks, setIsBasicBlocks] = useState(false);

  const toggleMark = (command) => () => {
    editor.chain().focus()[command]().run();
  };

  const toggleBlock = (command, level) => () => {
    editor.chain().focus()[command]({ level }).run();
  };

  const getNodeDescription = (nodeType) => {
    if (nodeType === 'paragraph') {
      return 'Párrafo';
    } else if (nodeType === 'heading 1') {
      return 'Título 1';
    } else if (nodeType === 'heading 2') {
      return 'Título 2';
    } else if (nodeType === 'heading 3') {
      return 'Título 3';
    } else {
      return nodeType;
    }
  };

  return (
    <BubbleMenu
      editor={editor}
      className={css.TiptapBubbleMenu}
      tippyOptions={{ duration: 100 }}
    >
      <div className={css.BubbleMenu}>
        <DropdownButton onClick={() => setIsBasicBlocks(!isBasicBlocks)}>
          {getNodeDescription(currentNode)}
          {isBasicBlocks && (
            <div className={css.basicBlocks}>
              <button type="button" className={css.blockButton} onClick={toggleMark('setParagraph')}>Párrafo</button>
              <button type="button" className={css.blockButton} onClick={toggleBlock('toggleHeading', 1)}>Título 1</button>
              <button type="button" className={css.blockButton} onClick={toggleBlock('toggleHeading', 2)}>Título 2</button>
              <button type="button" className={css.blockButton} onClick={toggleBlock('toggleHeading', 3)}>Título 3</button>
              <button type="button" className={css.blockButton} onClick={toggleMark('toggleBulletList')}>Lista con viñetas</button>
              <button type="button" className={css.blockButton} onClick={toggleMark('toggleOrderedList')}>Lista numérica</button>
              <button type="button" className={css.blockButton} onClick={toggleMark('toggleBlockquote')}>Cita en bloque</button>
            </div>
          )}
        </DropdownButton>
        <div className={css.separator} />
        <div className={css.buttonWrapper}>
          <ToolbarButton
            icon={<TextBoldIcon size={20} />}
            onClick={toggleMark('toggleBold')}
            isActive={editor.isActive('bold')}
          />
          <ToolbarButton
            icon={<TextItalicIcon size={20} />}
            onClick={toggleMark('toggleItalic')}
            isActive={editor.isActive('italic')}
          />
          <ToolbarButton
            icon={<TextUnderlineIcon size={20} />}
            onClick={toggleMark('toggleUnderline')}
            isActive={editor.isActive('underline')}
          />
          <ToolbarButton
            icon={<TextStrikethroughIcon size={20} />}
            onClick={toggleMark('toggleStrike')}
            isActive={editor.isActive('strike')}
          />
          <DropdownButton
            isActive={isColorSelector}
            onClick={() => setIsColorSelector(!isColorSelector)}
          >
            <div className={css.colorSelected} />
            {isColorSelector && (
              <div className={css.colorSelectorDropdown}>
                <span>Color de texto</span>
                <div className={css.options}>
                  <UnavailableIcon size={20} className={css.addIcon} />
                  <div
                    className={css.colorOption}
                    style={{ backgroundColor: '#999' }}
                  />
                  <div
                    className={css.colorOption}
                    style={{ backgroundColor: '#999' }}
                  />
                  <div
                    className={css.colorOption}
                    style={{ backgroundColor: '#999' }}
                  />
                  <div
                    className={css.colorOption}
                    style={{ backgroundColor: '#999' }}
                  />
                  <Add01Icon size={20} className={css.addIcon} />
                </div>
              </div>
            )}
          </DropdownButton>
        </div>
        <div className={css.separator} />
        <div className={css.buttonWrapper}>
          <ToolbarButton icon={<Link02Icon size={20} />} />
          <ToolbarButton icon={<ImageAdd02Icon size={20} />} />
          <ToolbarButton icon={<AtIcon size={20} />} />
        </div>
        <div className={css.separator} />
        <div className={css.buttonWrapper}>
          <ToolbarButton icon={<TextAlignLeft01Icon size={20} />} />
          <ToolbarButton icon={<TextAlignCenterIcon size={20} />} />
          <ToolbarButton icon={<TextAlignRight01Icon size={20} />} />
        </div>
      </div>
    </BubbleMenu>
  );
};
export default TiptapBubbleMenu;

const ToolbarButton = ({ icon, onClick, isActive }) => {
  const toolbarButtonClasses = `${css.toolbarButton} ${
    isActive ? css.active : ''
  }`;

  return (
    <button type='button' className={toolbarButtonClasses} onClick={onClick}>
      {icon && icon}
    </button>
  );
};

const DropdownButton = ({ children, onClick, isActive }) => {
  const dropdownButtonClasses = `${css.DropdownButton} ${
    isActive ? css.active : ''
  }`;

  return (
    <div className={dropdownButtonClasses} onClick={onClick}>
      {children}
      <ArrowDown01Icon size={20} className={css.icon} />
    </div>
  );
};