// src/Tiptap.tsx
import { EditorProvider, BubbleMenu, AnyExtension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenuItems from "./BubbleMenuItems";
import { MarkButton } from "@/components/tiptap-ui/mark-button";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { Image } from "@tiptap/extension-image";
import { ImageUploadNode } from "@/components/tiptap-node/image-upload-node";
import { handleImageUpload, MAX_FILE_SIZE } from "@/lib/tiptap-utils";
import { TextAlign } from "@tiptap/extension-text-align";
import "@/styles/_variables.scss";
import "@/styles/_keyframe-animations.scss";
import "@/components/tiptap-node/code-block-node/code-block-node.scss";
import "@/components/tiptap-node/paragraph-node/paragraph-node.scss";
import "@/components/tiptap-node/image-node/image-node.scss";
import "@/components/tiptap-node/image-upload-node/image-upload-node.scss";
import "@/components/tiptap-node/list-node/list-node.scss";

// define your extension array
const extensions = [
  StarterKit,
  MarkButton,
  Image,
  ImageUploadNode.configure({
    accept: "image/*",
    maxSize: MAX_FILE_SIZE,
    limit: 3,
    upload: handleImageUpload,
    onError: (error) => console.error("Upload failed:", error),
  }),
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
] as AnyExtension[];

const content = `
        <p>
            <strong>Bold</strong> for emphasis with <code>**</code> or <code>⌘+B</code> or the <code>B</code> button.
        </p>
        <p>
            <em>Italic</em> for subtle nuances with <code>*</code> or <code>⌘+I</code> or the <code>I</code> button.
        </p>
        <p>
            <s>Strikethrough</s> to show revisions with <code>~~</code> or the <code>~~S~~</code> button.
        </p>
        <p>
            <code>Code</code> for code snippets with <code>:</code> or <code>⌘+⇧+C</code> or the <code>C</code> button.
        </p>
        <p>
            <u>Underline</u> for emphasis with <code>⌘+U</code> or the <code>U</code> button.
        </p>
        <p>
            <sup>Superscript</sup> for footnotes with <code>⌘+.</code> or the <code>.</code> button.
        </p>
        <p>
            <sub>Subscript</sub> for chemical formulas with <code>⌘+,</code> or the <code>,</code> button.
        </p>
        `;
const Tiptap = () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      immediatelyRender={false}
      slotBefore={
        <div style={{ background: "black", color: "white" }}>slotBefore</div>
      }
      slotAfter={
        <div style={{ background: "black", color: "white" }}>slotAfter</div>
      }
      editorContainerProps={{ className: "editor-container" }}
    >
      <BubbleMenu editor={null} tippyOptions={{ duration: 100 }}>
        <BubbleMenuItems />
      </BubbleMenu>
    </EditorProvider>
  );
};

export default Tiptap;
