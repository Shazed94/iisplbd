import JoditEditor from "jodit-react";


const RichTextEditor = ({ value = "", getValue, joditRef }) => {
  return (
    <JoditEditor
      ref={joditRef}
      value={value}
      // config={config}
      tabIndex={1}
      onChange={(newContent) => getValue(newContent)}
    />
  );
};

export default RichTextEditor;
