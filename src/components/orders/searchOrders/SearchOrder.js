import React, { useEffect, useState } from "react";
import classes from "./SearchOrder.module.css";
import { InputGroup, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SearchOrder = () => {
  const [isactive, setisactive] = useState(1);
  const [Categories, setCategories] = useState([]);
  const [load, setload] = useState(false);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    const fetching = async () => {
      setload(true);
      const res = await fetch("/data/Categories.JSON");
      const data = await res.json();
      setload(false);
      const allData = data.filter((item) => {
        return item.title.includes(Search);
      });
      setCategories(allData);
    };
    fetching();
  }, [Search]);
  const searchHandle = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className={classes.searchIcon}>
          <BsSearch />
        </InputGroup.Text>
        <FormControl
          className={classes.searchInput}
          placeholder="فئه البحث هنا"
          aria-label="searchInput"
          onChange={searchHandle}
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className={classes.allCategories}>
        {load && <h5>جاري التحميل ..</h5>}
        {Categories &&
          Categories.map((item) => (
            <NavLink
              className={isactive === item.id ? "isactive" : ""}
              to={`/orders?category=${item.category}`}
              key={item.id}
              onClick={() => {
                setisactive(item.id);
              }}
            >
              {item.title}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default SearchOrder;
