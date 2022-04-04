import React, { useState, useEffect } from "react";
import "./RightSide.css";
import { BsSearch } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
const RightSide = () => {
  const [active, setactive] = useState(1);
  const [StateBtn, setStateBtn] = useState("الكل");
  const [tableContent, settableContent] = useState([]);
  const [allData, setallData] = useState([]);
  const [load, setload] = useState(false);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    const fetching = async () => {
      setload(true);
      const res = await fetch("/data/tableCapsolute.JSON");
      const data = await res.json();
      setallData(data);
      settableContent(data);
      setload(false);
    };
    fetching();
  }, []);

  useEffect(() => {
    let SearchData = allData.filter((item) => {
      return item.number.includes(Search);
    });
    let BillAppear = [];
    if (StateBtn === "الكل") {
      BillAppear = SearchData;
    } else {
      BillAppear = SearchData.filter((item) => {
        return item.state === StateBtn;
      });
    }
    settableContent(BillAppear);
  }, [Search, StateBtn, allData]);

  const setBillBtns = (state) => {
    setStateBtn(state);
  };
  const deleteBill = () => {
    let selected = tableContent.filter((item) => {
      return item.checked === false;
    });
    setallData(selected);
    console.log(tableContent);
  };
  const handleOnChange = (id) => {
    const newItems = tableContent.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });
    settableContent(newItems);
  };
  return (
    <div className="RightSide">
      <div className="input">
        <BsSearch />
        <input
          type="number"
          placeholder="بحث برقم الفاتوره"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {/* <div className="btnControl">
        <ul>
          <li
            onClick={() => {
              setBillBtns("الكل");
              setactive(1);
            }}
            className={active === 1 ? "active" : ""}
          >
            الكل({allData.length})
          </li>
          <li
            onClick={() => {
              setBillBtns("تم");
              setactive(2);
            }}
            className={active === 2 ? "active" : ""}
          >
            تم
          </li>
          <li
            onClick={() => {
              setBillBtns("النشطه");
              setactive(3);
            }}
            className={active === 3 ? "active" : ""}
          >
            النشطه
          </li>
          <li
            onClick={() => {
              setBillBtns("المعلقه");
              setactive(4);
            }}
            className={active === 4 ? "active" : ""}
          >
            المعلقه
          </li>
          <li
            onClick={() => {
              setBillBtns("تحت التجهيز");
              setactive(5);
            }}
            className={active === 5 ? "active" : ""}
          >
            تحت التجهيز
          </li>
          <li
            onClick={() => {
              setBillBtns("المتأخرة");
              setactive(6);
            }}
            className={active === 6 ? "active" : ""}
          >
            المتأخرة
          </li>
          <li
            onClick={() => {
              setBillBtns("تحت التوصيل");
              setactive(7);
            }}
            className={active === 7 ? "active" : ""}
          >
            تحت التوصيل
          </li>
          <li
            onClick={() => {
              deleteBill();
            }}
          >
            <AiFillDelete />
          </li>
        </ul>
      </div> */}
      <div className="table">
        {load && <h1>...تحميل</h1>}
        {!load && (
          <>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="text-center px-1">رقم الفاتورة</th>
                  <th>نوع الفاتورة</th>
                  <th>إسم العميل</th>
                  {/* <th>حالة الفاتورة</th> */}
                </tr>
              </thead>
              <tbody>
                {tableContent.map((item) => (
                  <tr key={item.id}>
                    <td className="checkbox">
                      <div>
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          onChange={() => {
                            handleOnChange(item.id);
                          }}
                        />
                      </div>
                    </td>
                    <td className="number">{item.number}</td>
                    <td>
                      <div className="type">
                        <div className="type">
                          <p>{item.type}</p>
                        </div>
                        {/* <div className="btns">
                          <button>التفاصيل</button>
                          <button>تعديل</button>
                          <button>تكرار</button>
                        </div> */}
                      </div>
                      <div className="time ">
                        {item.time.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </td>
                    <td className="name">
                      <p className="title">{item.name}</p>
                      <p className="desc">{item.idNumber}</p>
                    </td>
                    {/* <td className="state">
                      <p>{item.state}</p>
                      <div className="time d-flex">
                        {item.timeState.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            {!tableContent.length && <h3 className="noBill">لا يوجد فواتير</h3>}
          </>
        )}
      </div>
    </div>
  );
};

export default RightSide;
