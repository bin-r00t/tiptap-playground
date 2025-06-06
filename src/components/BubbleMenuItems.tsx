import { useCurrentEditor } from "@tiptap/react";
import "./bubble-menu-items.scss";
import { MarkButton } from "./tiptap-ui/mark-button";
import { HeadingButton } from "./tiptap-ui/heading-button";
import { UndoRedoButton } from "./tiptap-ui/undo-redo-button";
import { ImageUploadButton } from "./tiptap-ui/image-upload-button";
import { TextAlignButton } from "./tiptap-ui/text-align-button";

export default function BubbleMenuItems() {
  const { editor } = useCurrentEditor();
  if (!editor) return <div className="hw-bubble-menu">loading...</div>;

  return (
    <div
      className="hw-bubble-menu tiptap-button-group"
      data-orientation="horizontal"
    >
      <UndoRedoButton action="undo" />
      <UndoRedoButton action="redo" />
      <HeadingButton level={1}></HeadingButton>
      <HeadingButton level={2}></HeadingButton>
      <HeadingButton level={3}></HeadingButton>
      <HeadingButton level={4}></HeadingButton>
      <MarkButton
        type="bold"
        className={`hw-editor-button ${
          editor.isActive("bold") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="italic"
        className={`hw-editor-button ${
          editor.isActive("italic") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="strike"
        className={`hw-editor-button ${
          editor.isActive("strike") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="code"
        className={`hw-editor-button ${
          editor.isActive("code") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="underline"
        className={`hw-editor-button ${
          editor.isActive("underline") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="superscript"
        className={`hw-editor-button ${
          editor.isActive("superscript") ? "is-active" : ""
        }`}
      />
      <MarkButton
        type="subscript"
        className={`hw-editor-button ${
          editor.isActive("subscript") ? "is-active" : ""
        }`}
      />
      <ImageUploadButton text="Add" />
      <TextAlignButton align="left" />
      <TextAlignButton align="center" />
      <TextAlignButton align="right" />
      <TextAlignButton align="justify" />
    </div>
  );
}
