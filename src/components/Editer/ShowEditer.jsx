import React from "react";

import { HeaderOutput, ParagraphOutput } from "editorjs-react-renderer";

import parse from "html-react-parser";
import Test from "../PublicComponents/Test";
const ShowEditer = ({ blocks }) => {
  if (blocks) {
    return blocks.map((output) => <Output key={output.id} block={output} />);
  }
  return <h2>Нет данных</h2>;
};

const Output = ({ block }) => {
  switch (block.type) {
    case "header":
      return <HeaderOutput data={block.data} />;
    case "delimiter":
      return <hr />;
    case "youtubeEmbed":
      return (
        <div className="wrapper__video-box">
          {block.data?.url ? (
            <iframe
              width="100%"
              height="100%"
              src={block.data.url.replace("watch?v=", "embed/") || " "}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <h2>Video</h2>
          )}
        </div>
      );

    case "paragraph":
      return <ParagraphOutput data={block.data} />;
    case "image":
      return <img src={`${block.data.file.url}`} alt="" />;
    case "simpleImage":
      return <img src={`${block.data.url}`} alt="" />;
    case "list":
      return (
        <ul>
          {block.data.items.map((item) => (
            <li>{parse(item)}</li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        // <div className="test">
        //   {block.data.items.map((item, i) => (
        //     <label key={i}>
        //       <input type="radio" name={block.id} />
        //       <span className="checkmark"></span>
        //       <span className="checkmark__text">{item.text}</span>
        //     </label>
        //   ))}
        // </div>
        <Test blocks={[block]} isInner={true} />
      );
    case "table":
      return (
        <table border={1}>
          {block.data.content.map((tr, i) => (
            <tr key={i}>
              {tr.map((td, i) => (
                <td style={{ minWidth: "100px", padding: "8px 15px", borderRadius: "2px", textAlign: "left" }} key={i}>
                  {parse(td)}
                </td>
              ))}
            </tr>
          ))}
        </table>
      );
    case "quote":
      return <Quote block={block} />;
    case "audio":
      return <audio style={{ marginBottom: "20px" }} controlsList="nodownload" controls src={block.data.url}></audio>;
    default:
      console.log("Unknown block type", block.type);
      break;
  }
};

const Quote = ({ block }) => {
  const [active, setActive] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setActive((prev) => !prev)}
        style={{ marginBottom: "10px", marginTop: "10px" }}
        className="btn"
      >
        Show
      </button>
      {active && <p>{parse(block.data.text)}</p>}
    </>
  );
};

export default ShowEditer;
