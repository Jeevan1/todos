import { useState, useEffect } from "react";
import "./Content.scss";
import { GoDotFill } from "react-icons/go";
import { BiTime,BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";

//get the local storage data bachk
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function Content() {
  const [inputData, setInputData] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [items, setItems] = useState(getLocalData());
     const [isEditItem,setIsEditItem] = useState("");
     const [toggleButton, setToggleButton] = useState(false);

  //    add items function
  const addItem = () => {
    if (inputData === "" || inputDate === "") {
      alert("plz fill the data..");
    }
    else if(inputData && toggleButton){
        const [hours, minutes] = inputDate.split(":");
      let formattedHours = hours % 12;
      if (formattedHours === 0) {
        formattedHours = 12;
      }
      const amPm = hours >= 12 ? "PM" : "AM";
        setItems(
            items.map((curElem) =>{
                if(curElem.id === isEditItem){
                    return{...curElem, name: inputData, time: inputDate,date: `${formattedHours}:${minutes} ${amPm}`}
                }
                return curElem;
            })
        );
        setInputData("");
        setInputDate("");
    setIsEditItem(null);
    setToggleButton(false);
    }
    else {
      const [hours, minutes] = inputDate.split(":");
      let formattedHours = hours % 12;
      if (formattedHours === 0) {
        formattedHours = 12;
      }
      const amPm = hours >= 12 ? "PM" : "AM";
      const newItemData = {
        id: new Date().getTime().toString(),
        name: inputData,
        date: `${formattedHours}:${minutes} ${amPm}`,
        time: inputDate,
        status: "incomplete",
      };
      setItems([...items, newItemData]);
      setInputData("");
      setInputDate("");
    }
  };
  //edit the items
  const editItem = (index) => {
    const item_todo_edited = items.find((curElem) => {
        return curElem.id ===index;
    });
    setInputData(item_todo_edited.name);
    setInputDate(item_todo_edited.time);
    setIsEditItem(index);
    setToggleButton(true);
}
  //delete item
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };
  //delete all
  const deleteAll = () =>{
    setItems([]);
  }

  //adding local storage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);

  return (
    <div className="content">
      <div className="upcoming">
        <h2>
          Today main focus <span>{items[0] ? items[0].name:'Programming!!'}</span>
        </h2>
      </div>
      <div className="todoInput">
        <div className="leftInput">
          <GoDotFill className="option" />
          <GoDotFill className="option" />
          <GoDotFill className="option" />
          <input
            type="text"
            placeholder="What is your naxt task?"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="rightInput">
          {/* <BiTime className ='icon'/> */}
          <input
            type="time"
            name=""
            id=""
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <LiaBusinessTimeSolid className="icon" onClick={addItem} />
        </div>
      </div>
      <div className="todoList">
        {items.map((curElem, index) => (
          <div className="list" key={curElem.id}>
            <GoDotFill className="type" />
            <p className="todooItem">{curElem.name}</p>
            <p className="time">{curElem.date}</p>
            {curElem.status === "complete" ? (
              <AiOutlineCheckCircle className="status" />
            ) : (
              <BsCircle className="status" />
            )}
            <RiDeleteBin5Line
              className="delete"
              onClick={() => deleteItem(curElem.id)}
            />
            <BiEdit className="edit" onClick={()=>editItem(curElem.id)} />
          </div>
        ))}
        {items.length>1 && <button className="deleteAll" onClick={deleteAll}>Delete All Tasks</button>}
      </div>
    </div>
  );
}

export default Content;
