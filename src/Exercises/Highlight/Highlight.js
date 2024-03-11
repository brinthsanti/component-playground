import React, { useState } from 'react';

const HighlightableText = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [selection, setSelection] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleMouseDown = () => {
    setIsSelecting(true);
  };

  const handleMouseMove = () => {
    if (isSelecting) {
      const selection = window.getSelection();
      const selectedText = selection.toString();
      setHighlightedText(selectedText);
      setSelection(selection.getRangeAt(0));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    applyHighlight();
  };

  const applyHighlight = () => {
    if (selection) {
      const span = document.createElement('span');
      span.style.backgroundColor = 'yellow';
      span.textContent = highlightedText;
      selection.deleteContents();
      selection.insertNode(span);
    }
  };

  const renderHighlightedText = () => {
    if (!searchQuery.trim()) {
      return children;
    }

    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = children.split(regex);
    return parts.map((part, index) => {
      if (part.toLowerCase() === searchQuery.toLowerCase()) {
        return <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>;
      }
      return part;
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <p
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ userSelect: 'text' }}
      >
        {renderHighlightedText()}
      </p>
    </div>
  );
};

export default HighlightableText;
