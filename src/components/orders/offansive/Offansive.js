import React, { useEffect, useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import "./Offcanvas.css";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ActionsSelected } from "../../../Store";
const Offansive = (props) => {
  useEffect(() => {
    setValueaddions1(props.Item.addion1.state);
    setValueaddions2(props.Item.addion2.state);
    setValueaddions3(props.Item.addion3.state);
    setValueaddions4(props.Item.addion4.state);
    setValueSize(props.Item.size.trim());
    setcomment(props.Item.comment);
  }, []);

  //handle with size buttons
  const [ValueSize, setValueSize] = useState("1");
  const btnsSize = [
    { name: "سنجل", price: 5, value: "1" },
    { name: "دبل", price: 15, value: "2" },
    { name: "بيج", price: 25, value: "3" },
  ];

  //handle with addions buttons
  //first addions
  const [Valueaddions1, setValueaddions1] = useState("0");
  const addions1 = [
    { name: "10gms", price: "10ر.س", value: "1" },
    { name: "20gms", price: "20ر.س", value: "2" },
  ];
  //second addions
  const [Valueaddions2, setValueaddions2] = useState("0");
  const addions2 = [
    { name: "10gms", price: "10ر.س", value: "1" },
    { name: "20gms", price: "20ر.س", value: "2" },
  ];
  //therd addions
  const [Valueaddions3, setValueaddions3] = useState("0");
  const addions3 = [
    { name: "10gms", price: "10ر.س", value: "1" },
    { name: "20gms", price: "20ر.س", value: "2" },
  ];
  //fourth addions
  const [Valueaddions4, setValueaddions4] = useState("0");
  const addions4 = [
    { name: "hot sauce", price: "10ر.س", value: "1" },
    { name: "mayonnaise", price: "10ر.س", value: "2" },
    { name: "barbecue", price: "10ر.س", value: "3" },
    { name: "ketchup", price: "10ر.س", value: "4" },
  ];

  //comment
  const [comment, setcomment] = useState("");

  //amount handle
  const [amountNum, setamountNum] = useState(props.Item.amount);
  const increase = () => {
    setamountNum(amountNum + 1);
  };
  const decrease = () => {
    if (amountNum > 1) {
      setamountNum(amountNum - 1);
    }
  };
  const handleChange = (e) => {
    const number = parseInt(e.target.value);
    setamountNum(number);
  };

  //dispatch of amount and addions
  const dispatch = useDispatch();
  const submitChanges = (id, amount) => {
    //dispatch for amount
    dispatch(ActionsSelected.ChangeAmount({ id, amount }));
    //dispatch for addion1
    let addion1 = {};
    if (Valueaddions1 === "0") {
      addion1 = { state: "0", content: {} };
    }
    if (Valueaddions1 === "1") {
      addion1 = {
        state: "1",
        content: { id: 1, title: " 10gmsجبنه إضافيه شيدر", price: 10 },
      };
    }
    if (Valueaddions1 === "2") {
      addion1 = {
        state: "2",
        content: { id: 1, title: " 20gmsجبنه إضافيه شيدر", price: 20 },
      };
    }
    // --------------end addion1
    //dispatch for addion2
    let addion2 = {};
    if (Valueaddions2 === "0") {
      addion2 = { state: "0", content: {} };
    }
    if (Valueaddions2 === "1") {
      addion2 = {
        state: "1",
        content: { id: 2, title: " 10gmsجبنه إضافيه ريكفورد", price: 10 },
      };
    }
    if (Valueaddions2 === "2") {
      addion2 = {
        state: "2",
        content: { id: 2, title: " 20gmsجبنه إضافيه ريكفورد", price: 20 },
      };
    }
    // --------------end addion2
    //dispatch for addion3
    let addion3 = {};
    if (Valueaddions3 === "0") {
      addion3 = { state: "0", content: {} };
    }
    if (Valueaddions3 === "1") {
      addion3 = {
        state: "1",
        content: { id: 3, title: " 10gmsجبنه إضافيه أمريكي", price: 10 },
      };
    }
    if (Valueaddions3 === "2") {
      addion3 = {
        state: "2",
        content: { id: 3, title: " 20gmsجبنه إضافيه أمريكي", price: 20 },
      };
    }
    // --------------end addion3
    //dispatch for addion4
    let addion4 = {};
    if (Valueaddions4 === "0") {
      addion4 = { state: "0", content: {} };
    }
    if (Valueaddions4 === "1") {
      addion4 = {
        state: "1",
        content: { id: 4, title: " 10gmsصوص حار", price: 10 },
      };
    }
    if (Valueaddions4 === "2") {
      addion4 = {
        state: "2",
        content: { id: 4, title: " 10gmsمايونيز", price: 10 },
      };
    }
    if (Valueaddions4 === "3") {
      addion4 = {
        state: "3",
        content: { id: 4, title: " 10gmsباربيكيو", price: 10 },
      };
    }
    if (Valueaddions4 === "4") {
      addion4 = {
        state: "4",
        content: { id: 4, title: " 10gmsكاتشب", price: 10 },
      };
    }
    // --------------end addion4
    //dispatch for btnsSize
    let sizeAddion = {};
    if (ValueSize == "1") {
      sizeAddion = { title: "single", price: 5, value: "1" };
    }
    if (ValueSize == "2") {
      sizeAddion = { title: "double", price: 15, value: "2" };
    }
    if (ValueSize == "3") {
      sizeAddion = { title: "big", price: 25, value: "3" };
    }

    // --------------end btnsSize

    dispatch(
      ActionsSelected.AddAdions({
        id,
        addion1,
        addion2,
        addion3,
        addion4,
        comment,
        sizeAddion,
      })
    );
    //handle with price of single item
    dispatch(ActionsSelected.TotalItemPrice({ id }));
  };
  return (
    <div className="OffcanvasList">
      <div className="desc">
        <div>
          <h4>{props.Item.title}</h4>
          <p>لحم بيف بلدي</p>
          <p>{props.Item.description}</p>
        </div>
        <div>
          <img src={props.Item.img} alt="" />
        </div>
      </div>
      <div className="selectSize">
        <h5>إختيار الحجم</h5>
        <div>
          <ButtonGroup>
            {btnsSize.map((btn, idx) => (
              <Button
                key={idx}
                value={btn.value}
                className={ValueSize === btn.value ? "active " : ""}
                onClick={(e) => setValueSize(e.currentTarget.value)}
              >
                <div className="innerbtn">
                  <div>{btn.name}</div>
                  <div>{btn.price}ر.س</div>
                </div>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="addions">
        <h5>الإضافات</h5>
        <div>
          <div className="Addion">
            <h6>
              <MdOutlineNotListedLocation />
              جبنه إضافيه شيدر
            </h6>
            <ButtonGroup>
              {addions1.map((btn, idx) => (
                <Button
                  key={idx}
                  value={btn.value}
                  className={Valueaddions1 === btn.value ? "active " : ""}
                  onClick={(e) => setValueaddions1(e.currentTarget.value)}
                >
                  <div className="innerbtn">
                    <div>{btn.name}</div>
                    <div>{btn.price}</div>
                  </div>
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <div className="Addion">
            <h6>
              <MdOutlineNotListedLocation />
              جبنه إضافيه ريكفورد
            </h6>
            <ButtonGroup>
              {addions2.map((btn, idx) => (
                <Button
                  key={idx}
                  value={btn.value}
                  className={Valueaddions2 === btn.value ? "active " : ""}
                  onClick={(e) => setValueaddions2(e.currentTarget.value)}
                >
                  <div className="innerbtn">
                    <div>{btn.name}</div>
                    <div>{btn.price}</div>
                  </div>
                </Button>
              ))}
            </ButtonGroup>
          </div>
          <div className="Addion">
            <h6>
              <MdOutlineNotListedLocation />
              جبنه إضافيه أمريكي
            </h6>
            <ButtonGroup>
              {addions3.map((btn, idx) => (
                <Button
                  key={idx}
                  value={btn.value}
                  className={Valueaddions3 === btn.value ? "active " : ""}
                  onClick={(e) => setValueaddions3(e.currentTarget.value)}
                >
                  <div className="innerbtn">
                    <div>{btn.name}</div>
                    <div>{btn.price}</div>
                  </div>
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
        <div className="lastAddion">
          <h6>
            <MdOutlineNotListedLocation />
            صوص برجر
          </h6>
          <ButtonGroup>
            {addions4.map((btn, idx) => (
              <Button
                key={idx}
                value={btn.value}
                className={Valueaddions4 === btn.value ? "active " : ""}
                onClick={(e) => setValueaddions4(e.currentTarget.value)}
              >
                <div className="innerbtn">
                  <div>{btn.name}</div>
                  <div>{btn.price}</div>
                </div>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <div className="lstForm">
        <input
          type="text"
          placeholder="أضف تعليقا"
          value={comment}
          onChange={(e) => {
            setcomment(e.target.value);
          }}
        />
        <div className="amount">
          <label htmlFor="amount">الكميه</label>
          <div className="amounthandle">
            <button onClick={increase}>+</button>
            <input type="number" value={amountNum} onChange={handleChange} />
            <button onClick={decrease}>-</button>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              submitChanges(props.Item.id, amountNum);
              props.handleClose();
            }}
          >
            تاكيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offansive;
