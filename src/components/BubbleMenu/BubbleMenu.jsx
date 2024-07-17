import { useState } from 'react';
import {
  ArrowDown01Icon,
  ImageAdd02Icon,
  Link02Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextStrikethroughIcon,
  TextUnderlineIcon,
  AtIcon,
  TextAlignLeft01Icon,
  TextAlignCenterIcon,
  TextAlignRight01Icon,
  Add01Icon,
  UnavailableIcon,
} from '../../assets/icons';
import css from './BubbleMenu.module.css';

const BubbleMenu = () => {
  // const textColorList = {};
  const [isColorSelector, setIsColorSelector] = useState(false);

  return (
    <div className={css.BubbleMenu}>
      <DropdownButton>Heading 1</DropdownButton>
      <div className={css.separator} />
      <div className={css.buttonWrapper}>
        <ToolbarButton icon={<TextBoldIcon size={20} />} />
        <ToolbarButton icon={<TextItalicIcon size={20} />} />
        <ToolbarButton icon={<TextUnderlineIcon size={20} />} />
        <ToolbarButton icon={<TextStrikethroughIcon size={20} />} />
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
  );
};
export default BubbleMenu;

// eslint-disable-next-line react/prop-types
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

// eslint-disable-next-line react/prop-types
const DropdownButton = ({ children, onClick, isActive }) => {
  const dropdownButtonClasses = `${css.DropdownButton} ${
    isActive ? css.active : ''
  }`;

  return (
    <button type='button' className={dropdownButtonClasses} onClick={onClick}>
      {children}
      <ArrowDown01Icon size={20} className={css.icon} />
    </button>
  );
};
