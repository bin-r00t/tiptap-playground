// src/Tiptap.tsx
import React from "react";
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import BubbleMenuItems from "./BubbleMenuItems";

// define your extension array
const extensions = [StarterKit];

const content =
  "<p>ions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulions allow you to add attributes to the rendered HTML through the HTMLAttributes option. You can use that to add a custom class (or any other attribute). That's also very helpfulƒ!</p>";

const Tiptap = () => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      slotBefore={
        <div style={{ background: "black", color: "white" }}>slotBefore</div>
      }
      slotAfter={
        <div style={{ background: "black", color: "white" }}>slotAfter</div>
      }
      editorContainerProps={{ className: "editor-container" }}
    >
      {/* <FloatingMenu editor={null}>
        <h1>Hello Floating....</h1>
      </FloatingMenu> */}
      <BubbleMenu editor={null} tippyOptions={{ duration: 100 }}>
        <BubbleMenuItems />
      </BubbleMenu>
    </EditorProvider>
  );
};

export default Tiptap;
