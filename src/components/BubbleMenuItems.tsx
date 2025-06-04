import { useCurrentEditor } from "@tiptap/react";
import React from "react";
import "./bubble.menu.items.scss";

export default function BubbleMenuItems() {
  const { editor } = useCurrentEditor();
  if (!editor) return <div className="bubble-menu">loading...</div>;

  return (
    <div className="bubble-menu">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        Strike
      </button>
    </div>
  );
}
