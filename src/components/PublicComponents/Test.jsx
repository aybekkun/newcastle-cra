import { ParagraphOutput } from "editorjs-react-renderer";
import React from "react";
import ShowEditer from "../Editer/ShowEditer";
import cls from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { createCheckTest } from "../../redux/checkTest/asyncActions";
const Test = ({ blocks, isInner = false }) => {
  const dispatch = useDispatch();
  const { lesson } = useSelector((state) => state.lessons);
  const { user } = useSelector((state) => state.auth);

  const [test, setTest] = React.useState([]);

  const [checkedArr, setCheckedArr] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (blocks) {
      const tests = blocks.filter((item) => item.type === "checklist").map((item) => item.data?.items);
      setTest(tests);
    }
  }, [blocks]);

  const onClickTest = (arr, index, blockIndex) => {
    const checkedFilter = [
      ...checkedArr.filter((item) => item.blockIndex !== blockIndex),
      { arr, blockIndex: blockIndex, checkedId: index },
    ];
    setCheckedArr(checkedFilter);
    //  console.log(arr, index);
  };

  const onCheckTest = async () => {
    if (test.length === checkedArr.length) {
      let result = 0;
      checkedArr.map((item) => {
        if (item.arr[item?.checkedId]?.checked) {
          result++;
        }
        return 0;
      });
      if (!isInner) {
        await dispatch(
          createCheckTest({ lesson_id: lesson.id, user_id: user.id, number: test.length, overall: result })
        );
      }
      window.scrollTo(0, 0);
      setCount(result);
      setChecked(true);
    } else {
      alert("Check all questions!!!");
    }
  };
  const onSumbitAgain = () => {
    window.scrollTo(0, 0);
    setChecked(false);
  };
  return (
    <div className="wrapper__desc">
      <div className="test">
        {!isInner && checked && (
          <div className="test__result">
            <h3>Result of test</h3>
            <div className="test__result-box">
              <div className="test__result-range">
                <div style={{ width: `${(count / test.length) * 100}%` }} className="test__result-range-item"></div>
              </div>
              <span>{`${count}/${test.length}`}</span>
            </div>
          </div>
        )}

        {!checked && blocks.length > 0 ? (
          blocks.map((block, blockIndex) => {
            if (block.type === "checklist") {
              return block.data.items.map((item, i) => (
                <label key={i}>
                  <input onClick={() => onClickTest(block.data.items, i, blockIndex)} type="radio" name={block.id} />
                  <span className="checkmark"></span>
                  <span className="checkmark__text">{item.text}</span>
                </label>
              ));
            } else if (block.type === "paragraph") {
              return (
                <ParagraphOutput key={block.id} style={{ margin: "0px", marginBottom: "10px" }} data={block.data} />
              );
            } else {
              return <ShowEditer key={block.id} blocks={[block]} />;
            }
          })
        ) : !checked ? (
          <h2>Нет данных</h2>
        ) : (
          <></>
        )}
        {/* Test check! */}
        {checked &&
          blocks.map((block, blockIndex) => {
            if (block.type === "checklist") {
              const checkedId = checkedArr.find((item) => item.blockIndex === blockIndex).checkedId;
              return checkedArr
                .find((item) => item.blockIndex === blockIndex)
                .arr.map((item, i) => (
                  <label key={i}>
                    <input type="radio" checked={checkedId === i} name={block.id} />
                    <span
                      className={cls("checkmark", {
                        true: item.checked && checkedId === i,
                        wrong: !item.checked && checkedId === i,
                      })}
                    ></span>
                    <span
                      className={cls("checkmark__text", {
                        true: item.checked && checkedId === i,
                        wrong: !item.checked && checkedId === i,
                      })}
                    >
                      {item.text}
                    </span>
                  </label>
                ));
            } else if (block.type === "paragraph") {
              return (
                <ParagraphOutput key={block.id} style={{ margin: "0px", marginBottom: "10px" }} data={block.data} />
              );
            } else {
              return <React.Fragment key={blockIndex}></React.Fragment>;
            }
          })}

        {!checked ? (
          <button onClick={onCheckTest} style={{ margin: "0px", marginBottom: "10px" }} className="btn">
            Check Test
          </button>
        ) : (
          <button onClick={onSumbitAgain} style={{ margin: "0px", marginBottom: "10px" }} className="btn">
            Submit again
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
