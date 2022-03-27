import React, { useState, useEffect } from "react";
import classes from "./SelectedProducts.module.css";
import { Row, Col, Offcanvas, Modal, Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { ActionsSelected } from "../../../Store";
import Offansive from "./../offansive/Offansive";
const SelectedProducts = () => {
  //access and handle store of selected list
  const Items = useSelector((state) => state.selectedItems);
  const TotalPrice = useSelector((state) => state.TotalPrice);
  const dispatch = useDispatch();
  const DeleteItemFromSelectedList = (id) => {
    dispatch(ActionsSelected.deleteItem(id));
  };

  //remove addions
  const removeaddion = (id, addionName) => {
    dispatch(ActionsSelected.removeaddion({ id, addionName }));
    //handle with price of single item
    dispatch(ActionsSelected.TotalItemPrice({ id }));
  };

  // handle amount of item
  const increase = (id) => {
    dispatch(ActionsSelected.increaseAmount({ id }));
    dispatch(ActionsSelected.TotalItemPrice({ id }));
  };
  const decrease = (id) => {
    dispatch(ActionsSelected.decreaseAmount({ id }));
    dispatch(ActionsSelected.TotalItemPrice({ id }));
  };

  //handle all price of selected items
  useEffect(() => {
    dispatch(ActionsSelected.TotalPrice());
  }, [Items]);

  //handle with offansive model
  const [show, setShow] = useState(false);
  const [offansiveItem, setoffansiveItem] = useState({});

  //handle with offansive model of pay
  const [ModalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setoffansiveItem({});
    setShow(false);
  };
  const handleShow = (item) => {
    setoffansiveItem(item);
    setShow(true);
  };
  //handle with offansive model of comment
  const [ModalCommentShow, setModalCommentShow] = useState(false);
  return (
    <div className={classes.selectedProducts}>
      {/* offansive element */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>معلومات الطلب</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offansive Item={offansiveItem} handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
      <div className={classes.table}>
        <Row xs={5} className={classes.row}>
          <Col xs={3}>
            <p>اسم المنتج</p>
          </Col>
          <Col xs={2}>
            <p>سعر الوحده</p>
          </Col>
          <Col xs={2}>
            <p>الكميه</p>
          </Col>
          <Col xs={2}>
            <p>المجموع</p>
          </Col>
          <Col xs={2}>
            <p>إضافات</p>
          </Col>
          <Col xs={1}>
            <p>حذف</p>
          </Col>
        </Row>
        {!Items.length && (
          <h6 className="text-center py-2">لا عناصر مختاره حتى الان !</h6>
        )}
        {Items &&
          Items.map((item) => (
            <Row key={item.id} xs={5} className={classes.row2}>
              <Col xs={3}>
                <p>{item.title}</p>
              </Col>
              <Col xs={2}>
                <p>ر.س{item.price}</p>
              </Col>
              <Col xs={2} className={classes.btnAmountGroup}>
                <p>
                  <button
                    className={classes.btnAmount}
                    onClick={() => {
                      increase(item.id);
                    }}
                  >
                    +
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btnAmount}
                    onClick={() => {
                      decrease(item.id);
                    }}
                  >
                    -
                  </button>
                </p>
              </Col>
              <Col xs={2}>
                <p>ر.س{item.totalPrice}</p>
              </Col>
              <Col xs={2}>
                <p
                  onClick={() => {
                    handleShow(item);
                  }}
                >
                  <FaEdit
                    size={15}
                    color="green"
                    style={{ cursor: "pointer" }}
                  />
                </p>
              </Col>
              <Col xs={1}>
                <p
                  onClick={() => {
                    DeleteItemFromSelectedList(item.id);
                  }}
                >
                  <AiFillDelete
                    size={15}
                    color="red"
                    style={{ cursor: "pointer" }}
                  />
                </p>
              </Col>
              {item.size == "1" ? (
                <></>
              ) : item.size == "2" ? (
                <Col xs={12} className={classes.lastCol}>
                  <div className={classes.size}>
                    <div>الحجم</div>
                    <div>
                      <p className={classes.addionsTitle}>دبل</p>
                    </div>
                  </div>
                </Col>
              ) : item.size == "3" ? (
                <Col xs={12} className={classes.lastCol}>
                  <div className={classes.size}>
                    <div>الحجم</div>
                    <div>
                      <p className={classes.addionsTitle}> كبير</p>
                    </div>
                  </div>
                </Col>
              ) : (
                <p></p>
              )}
              <Col xs={12} className={classes.lastCol}>
                {(item.addion1.content.id ||
                  item.addion2.content.id ||
                  item.addion3.content.id ||
                  item.addion4.content.id) && (
                  <p className={classes.addionsTitle}>إضافات:</p>
                )}

                {item.addion1.content.id && (
                  <div>
                    <div>
                      <p
                        onClick={() => {
                          removeaddion(item.id, "addion1");
                        }}
                      >
                        <FiDelete color="red" />
                      </p>
                    </div>
                    <div>
                      <p>
                        {item.addion1.content.title} -
                        {item.addion1.content.price}ر.س
                      </p>
                    </div>
                  </div>
                )}
                {item.addion2.content.id && (
                  <div>
                    <div>
                      <p
                        onClick={() => {
                          removeaddion(item.id, "addion2");
                        }}
                      >
                        <FiDelete color="red" />
                      </p>
                    </div>
                    <div>
                      <p>
                        {item.addion2.content.title} -
                        {item.addion2.content.price}ر.س
                      </p>
                    </div>
                  </div>
                )}
                {item.addion3.content.id && (
                  <div>
                    <div>
                      <p
                        onClick={() => {
                          removeaddion(item.id, "addion3");
                        }}
                      >
                        <FiDelete color="red" />
                      </p>
                    </div>
                    <div>
                      <p>
                        {item.addion3.content.title} -
                        {item.addion3.content.price}ر.س
                      </p>
                    </div>
                  </div>
                )}
                {item.addion4.content.id && (
                  <div>
                    <div>
                      <p
                        onClick={() => {
                          removeaddion(item.id, "addion4");
                        }}
                      >
                        <FiDelete color="red" />
                      </p>
                    </div>
                    <div>
                      <p>
                        {item.addion4.content.title} -
                        {item.addion4.content.price}ر.س
                      </p>
                    </div>
                  </div>
                )}
              </Col>
              <Col xs={12}>
                {item.comment && (
                  <div className={classes.comment}>
                    <div>
                      <p>تعليقك :</p>
                    </div>
                    <div>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          ))}
      </div>
      <div className={classes.Bill}>
        <div>
          <div>
            <div>المجموع الفرعي </div>
            <div>{TotalPrice} ر.س </div>
          </div>
          <div>
            <div>خصم </div>
            <div>0 ر.س</div>
          </div>
          <div>
            <div>الضرائب </div>
            <div>0 ر.س</div>
          </div>
        </div>
        <div>
          <div className={classes.allPrices}>
            <div>الإجمالي </div>
            <div>{TotalPrice}ر.س</div>
          </div>
        </div>
        <div>
          <div className={classes.billBTNs}>
            <div>
              <button onClick={() => setModalShow(true)}>دفع</button>
              {/* medel of pay */}
              <Modal
                show={ModalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header
                  className=" d-block"
                  style={{ backgroundColor: "#4646FF", color: "#fff" }}
                >
                  <Modal.Title id="contained-modal-title-vcenter">
                    <div className="row">
                      <div className="col">إجمالي القيمه </div>
                      <div className="col">{TotalPrice}ر.س</div>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="col-6">
                      <h6 className="mb-3">يرجى إختيار طريقه الدفع</h6>
                      <div className="row">
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio1" name="pay" />
                          <label htmlFor="radio1">كاش</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio2" name="pay" />
                          <label htmlFor="radio2">فيزا</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio3" name="pay" />
                          <label htmlFor="radio3">ماستر كارد</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio4" name="pay" />
                          <label htmlFor="radio4">مرسول</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-4">
                          <input type="radio" id="radio5" name="pay" />
                          <label htmlFor="radio5">مدى</label>
                        </div>
                        <div className="col-7 mb-4">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-5 mb-2">
                          <label>المدفوع</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <label>المتبقي</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalShow(false)}>تراجع</Button>
                  <Button>دفع</Button>
                </Modal.Footer>
              </Modal>
              <button onClick={() => setModalCommentShow(true)}>
                ملاحظه على الفاتوره
              </button>
              <Modal
                show={ModalCommentShow}
                onHide={() => setModalCommentShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header
                  className=" d-block"
                  style={{ backgroundColor: "#4646FF", color: "#fff" }}
                >
                  <Modal.Title id="contained-modal-title-vcenter">
                    <div className="col">ملاحظتك على الفاتورةه </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <textarea
                    placeholder="أكتب تعليقك هنا ..."
                    style={{ width: "100%", margin: "20px 0", height: "120px" }}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalCommentShow(false)}>
                    إرسال
                  </Button>
                  <Button onClick={() => setModalCommentShow(false)}>
                    تراجع
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div>
              <button>الغاء</button>
              <button>معلق</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
