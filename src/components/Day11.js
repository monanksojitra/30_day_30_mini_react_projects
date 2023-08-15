import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Day11 = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [lists, setLists] = useState([
    {
      title: "List 1",
      data: ["Item 1", "Item 2", "Item 3"],
    },
    {
      title: "List 2",
      data: ["Item 4", "Item 5", "Item 6"],
    },
  ]);

  const dragStart = (e, listIndex, itemIndex) => {
    dragItem.current = { listIndex, itemIndex };
  };

  const dragEnter = (e, listIndex, itemIndex) => {
    dragOverItem.current = { listIndex, itemIndex };
  };

  const drop = (e) => {
    if (dragItem.current && dragOverItem.current) {
      const copyLists = [...lists];
      const draggedItem =
        copyLists[dragItem.current.listIndex].data[dragItem.current.itemIndex];

      copyLists[dragItem.current.listIndex].data.splice(
        dragItem.current.itemIndex,
        1
      );
      copyLists[dragOverItem.current.listIndex].data.splice(
        dragOverItem.current.itemIndex,
        0,
        draggedItem
      );

      dragItem.current = null;
      dragOverItem.current = null;
      setLists(copyLists);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center ">
        {lists.map((list, listIndex) => (
          <div
            className="col-md-5 bg-light p-3 m-2 card list-group"
            key={listIndex}
          >
            <h3 className="card-title">{list.title}</h3>
            {list.data.map((item, itemIndex) => (
              <l
                className="list-group-item d-flex justify-content-between align-items-start bg-white text-center p-2 my-2"
                key={itemIndex}
                draggable
                onDragStart={(e) => dragStart(e, listIndex, itemIndex)}
                onDragEnter={(e) => dragEnter(e, listIndex, itemIndex)}
                onDragEnd={drop}
              >
                <div className="fw-light m-1"> {item}</div>
              </l>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day11;
