import React from "react";
import { Header } from "../components";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

export default function Editor() {
  return (
    <div className="my-6 mx-auto max-w-[1200px]">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}
