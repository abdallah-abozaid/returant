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

  //handle with offansive model of Print
  const [ModalPrint, setModalPrint] = useState(false);

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
          <Offcanvas.Title>?????????????? ??????????</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offansive Item={offansiveItem} handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
      <div className={classes.table}>
        <Row xs={5} className={classes.row}>
          <Col xs={3}>
            <p>?????? ????????????</p>
          </Col>
          <Col xs={2}>
            <p>?????? ????????????</p>
          </Col>
          <Col xs={2}>
            <p>????????????</p>
          </Col>
          <Col xs={2}>
            <p>??????????????</p>
          </Col>
          <Col xs={2}>
            <p>????????????</p>
          </Col>
          <Col xs={1}>
            <p>??????</p>
          </Col>
        </Row>
        {!Items.length && (
          <h6 className="text-center py-2">???? ?????????? ???????????? ?????? ???????? !</h6>
        )}
        {Items &&
          Items.map((item) => (
            <Row key={item.id} xs={5} className={classes.row2}>
              <Col xs={3}>
                <p>{item.title}</p>
              </Col>
              <Col xs={2}>
                <p>??.??{item.price}</p>
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
                <p>??.??{item.totalPrice}</p>
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
                    <div>??????????</div>
                    <div>
                      <p className={classes.addionsTitle}>??????</p>
                    </div>
                  </div>
                </Col>
              ) : item.size == "3" ? (
                <Col xs={12} className={classes.lastCol}>
                  <div className={classes.size}>
                    <div>??????????</div>
                    <div>
                      <p className={classes.addionsTitle}> ????????</p>
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
                  <p className={classes.addionsTitle}>????????????:</p>
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
                        {item.addion1.content.price}??.??
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
                        {item.addion2.content.price}??.??
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
                        {item.addion3.content.price}??.??
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
                        {item.addion4.content.price}??.??
                      </p>
                    </div>
                  </div>
                )}
              </Col>
              <Col xs={12}>
                {item.comment && (
                  <div className={classes.comment}>
                    <div>
                      <p>???????????? :</p>
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
            <div>?????????????? ???????????? </div>
            <div>{TotalPrice} ??.?? </div>
          </div>
          <div>
            <div>?????? </div>
            <div>0 ??.??</div>
          </div>
          <div>
            <div>?????????????? </div>
            <div>0 ??.??</div>
          </div>
        </div>
        <div>
          <div className={classes.allPrices}>
            <div>???????????????? </div>
            <div>{TotalPrice}??.??</div>
          </div>
        </div>
        <div>
          <div className={classes.billBTNs}>
            <div>
              <button onClick={() => setModalShow(true)}>??????</button>
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
                      <div className="col">???????????? ???????????? </div>
                      <div className="col">{TotalPrice}??.??</div>
                    </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="col-6">
                      <h6 className="mb-3">???????? ???????????? ?????????? ??????????</h6>
                      <div className="row">
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio1" name="pay" />
                          <label htmlFor="radio1">??????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio2" name="pay" />
                          <label htmlFor="radio2">????????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio3" name="pay" />
                          <label htmlFor="radio3">?????????? ????????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <input type="radio" id="radio4" name="pay" />
                          <label htmlFor="radio4">??????????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-4">
                          <input type="radio" id="radio5" name="pay" />
                          <label htmlFor="radio5">??????</label>
                        </div>
                        <div className="col-7 mb-4">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-5 mb-2">
                          <label>??????????????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                        <div className="col-5 mb-2">
                          <label>??????????????</label>
                        </div>
                        <div className="col-7 mb-2">
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={() => {
                      setModalShow(false);
                    }}
                  >
                    ??????????
                  </Button>
                  <Button
                    onClick={() => {
                      setModalShow(false);
                      setModalPrint(true);
                    }}
                  >
                    ??????
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* medel of Print */}
              <Modal
                show={ModalPrint}
                onHide={() => setModalPrint(false)}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Body>
                  <div className={classes.PrintBill}>
                    <div className="row ">
                      <div className="col-6">Logo</div>
                      <div className="col-6">Scanner</div>
                    </div>
                    <div>
                      <h5>???????????? ?????????? ?????????? ????????????</h5>
                      <div className={classes.flexing}>
                        <div>
                          <p>?????? ?????????????? ??????????????</p>
                          <p>12345678965358</p>
                        </div>
                        <div>
                          <p> ?????????????? ??????????????</p>
                          <p>123965358</p>
                        </div>
                      </div>
                      <div>
                        <p>?????????? ???? ????????????????</p>
                        <p>34567829</p>
                      </div>
                      <div>
                        <p>???????????? ???????????? </p>
                        <p>?????????? ????????????</p>
                      </div>
                      <div className={classes.flexing}>
                        <div>
                          <p>???????????? ??????????????</p>
                          <p>12345678965358</p>
                        </div>
                        <div>
                          <p> ???????? ??????????????</p>
                          <p>123965358</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5>???????????? ????????????</h5>
                      <p>2021-12-22 22:09</p>
                      <p>Invoice id=32</p>
                      <div>
                        <p>?????? ??????????</p>
                        <div>
                          <p>????????????</p>
                          <p>?????? 15%</p>
                          <p>??????</p>
                          <p>?????? ?????????????? </p>
                          <p>????????????</p>
                        </div>
                      </div>
                      <div>
                        {Items &&
                          Items.map((item) => (
                            <div key={item.id}>
                              <p
                                style={{ fontWeight: "700", marginTop: "5px" }}
                              >
                                {item.title}:
                              </p>
                              <div>
                                <p>{item.totalPrice}</p>
                                <p>6.6 </p>
                                <p>12%</p>
                                <p>
                                  {item.totalPrice -
                                    item.totalPrice * (12 / 100)}
                                </p>
                                <p>{item.amount}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div>
                        <div>
                          <p>???????????? ?????? ??????????????</p>
                          <p>{TotalPrice}</p>
                        </div>
                        <div>
                          <p> ???????? ?????????????? ??????????????</p>
                          <p>55.6</p>
                        </div>
                      </div>
                      <div>
                        <p>???????????? ???????????? ?????????? ??????????????</p>
                        <p>{TotalPrice + 55.6}</p>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="px-4">??????????</Button>
                </Modal.Footer>
              </Modal>
              <button onClick={() => setModalCommentShow(true)}>
                ???????????? ?????? ????????????????
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
                    <div className="col">?????????????? ?????? ?????????????????? </div>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <textarea
                    placeholder="???????? ???????????? ?????? ..."
                    style={{ width: "100%", margin: "20px 0", height: "120px" }}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setModalCommentShow(false)}>
                    ??????????
                  </Button>
                  <Button onClick={() => setModalCommentShow(false)}>
                    ??????????
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div>
              <button>??????????</button>
              <button>????????</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;
