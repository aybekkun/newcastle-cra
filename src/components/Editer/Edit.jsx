import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import EditorJS from "@editorjs/editorjs";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";

import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import YoutubeEmbed from "editorjs-youtube-embed";
import Audio from "audio-editor-js";
import React from "react";
import { $host } from "../../axios";
const Edit = ({ blocks = [], handleSaveData }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editer",
      tools: {
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
          
        },
        embed: Embed,
        table: Table,
        marker: Marker,
        list: List,
        linkTool: LinkTool,
        image: {
          class: ImageTool,
          config: {
            additionalRequestHeaders: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
            endpoints: {
              byFile: `${process.env.REACT_APP_BASE_URL}/api/v1/upload`, // Your backend file uploader endpoint
              byUrl: `${process.env.REACT_APP_BASE_URL}/public/storage`, // Your endpoint that provides uploading by Url
            },
          },
        },
        header: Header,
        checklist: CheckList,
        delimiter: Delimiter,
        simpleImage: SimpleImage,
        youtubeEmbed: YoutubeEmbed,
        audio: {
          class: Audio,
          config: {
            // token: `Bearer ${window.localStorage.getItem("token")}`,
            route: `${process.env.REACT_APP_BASE_URL}/public/storage`,
            routeDelete: `${process.env.REACT_APP_BASE_URL}/public/storage/files`,
            saveServer: async (file) => {
              try {
                let formData = new FormData();
                formData.append("audio", file);
                let req = await $host.post(`${process.env.REACT_APP_BASE_URL}/api/v1/upload`, formData);

                return req.data;
              } catch (e) {
                console.error(e);
              }
            },
          },
        },
      },
      data: {
        time: new Date(),
        blocks: [...blocks],
        version: "2.8.1",
      },
      async onChange() {
        const { blocks } = await editor.save();
        handleSaveData(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("ERROR editor cleanup", e));
    };
  }, []);

  return (
    <div className="editer">
      <div id="editer"></div>
    </div>
  );
};

export default Edit;
