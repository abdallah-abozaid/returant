import React from "react";
import "./LeftSide.css";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiEdit3 } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { BsPrinterFill } from "react-icons/bs";
const LeftSide = () => {
  return (
    <div className="LeftSide">
      <div className="orders">
        <div className="orderBtns">
          <button>
            التفاصيل
            <BiMessageAltDetail />
          </button>
          {/* <button>
            <FiEdit3 /> تعديل
          </button>
          <button>
            <AiFillEye /> مراجعه
          </button>
          <button>
            <BsPrinterFill /> طباعه
          </button> */}
        </div>
        <div className="orderContent">
          <div className="content">
            <div className=" row">
              <div className="col-5">
                <p>دجاج ستيك</p>
              </div>
              <div className="col-7">
                <p>28ر.س 1x </p>
              </div>
            </div>
            <div className="addions">
              <p>عنصر اضافي رقم 1</p>
              <p>عنصر اضافي رقم 2</p>
              <p>عنصر اضافي رقم 3</p>
              <p>عنصر اضافي رقم 4</p>
            </div>
          </div>
          <div className="content">
            <div className=" row">
              <div className="col-5">
                <p> ستيك</p>
              </div>
              <div className="col-7">
                <p>28ر.س 1x </p>
              </div>
            </div>
            <div className="addions">
              <p>عنصر اضافي رقم 1</p>
              <p>عنصر اضافي رقم 2</p>
            </div>
          </div>
          <div className="content">
            <div className=" row">
              <div className="col-5">
                <p>برجر بيف</p>
              </div>
              <div className="col-7">
                <p>28ر.س 1x </p>
              </div>
            </div>
            <div className="addions">
              <p>عنصر اضافي رقم 1</p>
              <p>عنصر اضافي رقم 2</p>
            </div>
          </div>
          {/* <div className="content lastContent1 row">
            <div className="col-5">
              <p>عدد الطلبات</p>
            </div>
            <div className="col-7">
              <p>4 طلبات</p>
            </div>
          </div>
          <div className="content lastContent2 row">
            <div className="col-5">
              <p>أجمالي المبلغ</p>
            </div>
            <div className="col-7">
              <p>111 ر.س</p>
            </div>
          </div> */}
        </div>
        <div className="customerContent">
          {/* <div className="content  row">
            <div className="col-3">
              <p>أسم العميل</p>
            </div>
            <div className="col-9">
              <p>محمد احمد</p>
            </div>
          </div>
          <div className="content  row">
            <div className="col-3">
              <p>رقم التلفون</p>
            </div>
            <div className="col-9">
              <p>123456789</p>
            </div>
          </div> */}
          {/* <div className="content  row">
            <div className="col-3">
              <p>نوع الفاتوره</p>
            </div>
            <div className="col-3 state">
              <p>غرفه</p>
            </div>
            <div className="col-6">
              <p>"AM", "02:30", "22/22/2022"</p>
            </div>
          </div>
          <div className="content  row">
            <div className="col-3">
              <p>حاله الفاتوره</p>
            </div>
            <div className="col-3 state">
              <p>تحت التجهز</p>
            </div>
            <div className="col-6">
              <p> تم الارسال للمطبخ "AM", "02:30"</p>
            </div>
          </div> */}
          <div className="content  row">
            <div className="col-3">
              <p>وقت التجهيز</p>
            </div>
            <div className="col-3 state">
              <p>30 الدقيقه</p>
            </div>
            <div className="col-3">
              <p> المتبقي</p>
            </div>
            <div className="col-3 state">
              <p> 20 دقيقه</p>
            </div>
          </div>
        </div>
        <div className="gridlines">
          <p className="title">
            تعليمات <BiMessageAltDetail />
          </p>
          <p className="content">- البرجر غير ماينويز</p>
          <p className="content">- عدم وضع طماطم على البيتزا</p>
          <p className="content ">- جميع الطلبات ملح خفيف</p>
          <div className="lastContent">
            <div className="row ">
              <div className="col-4">
                <p>منشئ الفاتورة:</p>
              </div>
              <div className="col-4 ">
                <p>ياسير عبدالرحمن</p>
              </div>
              <div className="col-4 state">
                <p> كاشير</p>
              </div>
            </div>
          </div>
        </div>
        <button className="doneBtn">تسليم</button>
      </div>
    </div>
  );
};

export default LeftSide;
