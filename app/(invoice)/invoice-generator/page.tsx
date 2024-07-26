"use client";
import React, { useRef, useState } from "react";
import Modal from "./components/Modal";
import CompanyForm from "./components/CompanyForm";
import CustomerForm from "./components/CustomerForm";
import ImageUpload from "./components/ImageUpload";
import Accordion from "./components/Accordion";
import InfoForm from "./components/InfoForm";
import TermForm from "./components/TermForm";
import DownloadButton from "./components/DownloadButton";
import Navbar from "@/components/Navbar";

const initInput = {
  id: 0,
  description: "",
  quantity: 1,
  price: 0,
};

const initialData = {
  company: {
    name: "Sample Name",
    address: "Sample Address",
    tel: "012345678",
    tax: "ab1234567890",
  },
  customer: {
    name: "Customer Name",
    address: "Sample Address",
    tel: "012345678",
    tax: "ab1234567890",
  },
  info: {
    number: "number",
    date: "date",
    dueDate: "due date",
    ref: "ref",
  },
  term: "Term",
};

const sumAmount = (_qty: any, _price: any) => {
  const q = parseFloat(_qty);
  const p = parseFloat(_price);

  const res = q * p;

  if (!isNaN(res)) {
    return res;
  } else {
    return 0;
  }
};

const pctFormat = (num: any) => {
  return Number(parseFloat(num) / 100);
};

const Home = () => {
  const [template, setTemplate] = useState<any>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [innerModal, setInnerModal] = useState<any>("");
  const [items, setItems] = useState<any[]>([initInput]);
  const [data, setData] = useState<any>(initialData);
  const [inputsList, setInputsList] = useState<any[]>([initInput]);
  const [sumInputs, setSumInputs] = useState<any>({});
  const [sumOption, setSumOption] = useState<any>({
    hasTax: false,
    hasDiscount: false,
    isTaxPct: true,
    isDiscountPct: true,
  });

  const a4Ref = useRef(null);

  const subtotal = inputsList.reduce(
    (prev: any, content: any) => prev + content.amount,
    0,
  );

  const discount = sumOption?.isDiscountPct
    ? subtotal * pctFormat(sumInputs.discount)
    : Number(sumInputs.discount);

  const totalDiscount = subtotal - discount;

  const tax = sumOption?.isTaxPct
    ? totalDiscount * pctFormat(sumInputs.tax)
    : Number(sumInputs.tax);

  const total =
    sumOption.hasDiscount && !sumOption.hasTax
      ? totalDiscount
      : sumOption.hasTax && !sumOption.hasDiscount
        ? subtotal + tax
        : sumOption.hasDiscount && sumOption.hasTax
          ? totalDiscount + tax
          : subtotal;

  const finalTotal = !isNaN(total)
    ? total
    : isNaN(total) && sumOption.hasTax && !sumOption.hasDiscount
      ? "enter tax first"
      : isNaN(total) && sumOption.hasDiscount && !sumOption.hasTax
        ? "enter discount first"
        : isNaN(total) && sumOption.hasDiscount && sumOption.hasTax
          ? "enter dis and tax"
          : null;

  const handleTemplateChange = (e: any) => {
    setTemplate((prev: any) => ({ ...prev }));
  };

  const handleChange = (e: any, index: any) => {
    const { name, value } = e.target;
    const newValue = !isNaN(value) ? parseFloat(value) : value;
    const list = [...inputsList];

    list[index] = { ...list[index], [name]: newValue };
    list[index].amount = list[index].quantity * list[index].price;
    setInputsList(list);
    setItems(list);
  };

  const handleRemoveInput = (index: any) => {
    setInputsList((prev) => prev.filter((item) => item.id !== index));
    setItems((prev) => prev.filter((item) => item.id !== index));
  };

  const handleSummaryChange = (e: any) => {
    const { name, value } = e.target;
    setSumInputs((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleModalOpen = (field: any) => {
    setOpenModal(true);
    setInnerModal(field);
  };

  const handleValue = (e: any, type: any) => {
    setData((prevData: any) => ({
      ...prevData,
      [type]: e,
    }));
  };

  const modalComponents: any = {
    company: (
      <CompanyForm
        value={(e: any) => handleValue(e, "company")}
        onClose={() => setOpenModal(false)}
      />
    ),
    customer: (
      <CustomerForm
        value={(e: any) => handleValue(e, "customer")}
        onClose={() => setOpenModal(false)}
      />
    ),
    info: (
      <InfoForm
        value={(e: any) => handleValue(e, "info")}
        onClose={() => setOpenModal(false)}
      />
    ),
    term: (
      <TermForm
        value={(e: any) => handleValue(e, "term")}
        onClose={() => setOpenModal(false)}
      />
    ),
  };

  return (
    <article className="mx-auto max-w-screen-xl">
          <Navbar />
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        {modalComponents[innerModal] || null}
      </Modal>

      <div className="mx-auto mt-10 flex flex-1 flex-col gap-2 lg:flex-row">
        <section
          ref={a4Ref}
          className="order-2 mx-auto h-[842px] min-w-[595px] max-w-[595px] space-y-4 divide-black/40 bg-white p-6 lg:order-1"
        >
          <section className="w-full flex-1">
            <div className="mb-4 flex flex-1 items-start justify-between gap-4">
              <div className="max-h-16 min-h-16 min-w-16 max-w-16 select-none">
                <ImageUpload />
              </div>

              <div className="group/company relative h-full flex-1 text-pretty break-words">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  onClick={() => handleModalOpen("company")}
                  className="absolute right-1 top-1 size-5 scale-100 cursor-pointer text-black/50 opacity-0 transition-all hover:text-black group-hover/company:scale-125 group-hover/company:opacity-100"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
                <div>
                  <p className="text-lg font-medium">
                    {data?.company?.name || "Company Name"}
                  </p>
                  <p className="text-sm">
                    {data?.company?.address || "Sample Address"}
                  </p>
                  <p className="text-sm">
                    <span>Tel {data?.company?.tel} </span>
                    <span>Tax {data?.company?.tax}</span>
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="rounded border border-primary px-4 py-1">
                  <p className="text-2xl font-medium">Invoice</p>
                  <p className="font-medium">invoice th</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="group/customer relative w-[60%] text-pretty break-words">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  onClick={() => handleModalOpen("customer")}
                  className="absolute right-1 top-1 size-5 scale-100 cursor-pointer text-black/50 opacity-0 transition-all hover:text-black group-hover/customer:scale-125 group-hover/customer:opacity-100"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
                <div>
                  <p className="text-lg font-medium">{data?.customer?.name}</p>
                  <p className="text-sm">{data?.customer?.address}</p>
                  <p className="text-sm">tel {data?.customer?.tel}</p>
                  <p className="text-sm">tax no. {data?.customer?.tax}</p>
                </div>
              </div>

              <div className="group/info relative w-[40%] text-pretty break-words">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  onClick={() => handleModalOpen("info")}
                  className="absolute right-1 top-1 size-5 scale-100 cursor-pointer text-black/50 opacity-0 transition-all hover:text-black group-hover/info:scale-125 group-hover/info:opacity-100"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
                <div className="table w-full table-fixed">
                  <div className="table-row border-b">
                    <div className="max-w-1/2 table-cell">
                      <p>Number</p>
                    </div>
                    <div className="table-cell w-1/2 text-left">
                      <p>{data?.info?.number}</p>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <p>Date</p>
                    </div>
                    <div className="table-cell text-left">
                      <p>
                        {new Date(data?.info?.date).toLocaleDateString("th-TH")}
                      </p>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <p>Due Date</p>
                    </div>
                    <div className="table-cell text-left">
                      <p>
                        {new Date(data?.info?.dueDate).toLocaleDateString(
                          "th-TH",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">
                      <p>Ref.</p>
                    </div>
                    <div className="table-cell text-left">
                      <p>{data?.info?.ref}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr />

          <section className="space-y-4">
            <div>
              <div className="mb-2 flex items-center divide-x divide-black/40 font-medium">
                <span className="w-6/12 px-2 text-left">Description</span>
                <span className="w-2/12 px-2 text-center">Quantity</span>
                <span className="w-2/12 px-2 text-center">Unit Price</span>
                <span className="w-2/12 px-2 text-center">Amount</span>
              </div>

              <ul role="list" className="divide-y divide-black/10">
                {items.length
                  ? items.map((item, index) => (
                      <li key={index}>
                        <div className="group/item relative flex gap-1">
                          <p className="w-6/12 px-2">{item.description}</p>
                          <p className="w-2/12 px-2 text-center">
                            {item.quantity || 1}
                          </p>
                          <p className="w-2/12 px-2 text-center">
                            {item.price}
                          </p>
                          <p className="w-2/12 px-2 text-right">
                            {sumAmount(item.quantity, item.price)}
                          </p>

                          {inputsList.length !== 1 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              onClick={() => handleRemoveInput(item.id)}
                              className="absolute -right-5 hidden size-5 cursor-pointer text-red group-hover/item:block peer-focus-visible:block"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          )}
                        </div>
                      </li>
                    ))
                  : null}
              </ul>
            </div>

            <div className="ml-auto table w-1/2 px-2">
              <div className="table-row bg-grey">
                <p className="table-cell">Subtotal</p>
                <p className="table-cell text-right font-medium">
                  {!isNaN(subtotal) ? subtotal.toFixed(2) : null}
                </p>
              </div>

              {sumOption.hasDiscount && (
                <div className="group/discount relative table-row">
                  <div className="flex">
                    <div className="flex-1">
                      <p>Discount</p>
                    </div>
                    {sumOption?.isDiscountPct ? (
                      <div className="flex-1 text-right">
                        <span>{sumInputs.discount}</span>
                        <span>%</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="table-cell text-right font-medium">
                    <p>{!isNaN(discount) ? discount.toFixed(2) : 0}</p>
                  </div>
                  <button
                    onClick={() =>
                      setSumOption((prev: any) => ({
                        ...prev,
                        hasDiscount: false,
                      }))
                    }
                    className="invisible absolute -right-6 top-0 group-hover/discount:visible"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {sumOption.hasTax && (
                <div className="group/discount relative table-row">
                  <div className="flex">
                    <div className="flex-1">
                      <p>Tax</p>
                    </div>
                    {sumOption.isTaxPct ? (
                      <div className="flex-1 text-right">
                        <span>{sumInputs.tax}</span>
                        <span>%</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="table-cell text-right font-medium">
                    <p>{!isNaN(tax) ? tax.toFixed(2) : 0}</p>
                  </div>
                  <button
                    onClick={() =>
                      setSumOption((prev: any) => ({
                        ...prev,
                        hasTax: false,
                      }))
                    }
                    className="invisible absolute -right-6 top-0 group-hover/discount:visible"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-red"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}

              <div className="table-row bg-base">
                <div className="table-cell">
                  <p className="text-lg font-medium">Total</p>
                </div>
                <div className="table-cell text-right">
                  <p className="text-lg font-medium">{finalTotal}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <p className="text-lg font-medium">Term & Condition</p>
            <span className="whitespace-pre-line text-sm">{data?.term}</span>
          </section>

          <section className="mt-8 flex text-center">
            <div className="flex-1">
              <p>____________________</p>
              <p>client</p>
            </div>
            <div className="flex-1">
              <p>____________________</p>
              <p>seller</p>
            </div>
          </section>
        </section>

        <section className="order-1 mx-auto w-[595px] flex-1 space-y-4 bg-white p-6 lg:order-2 lg:w-[501px]">
          <div>
            <Accordion title="Information">
              <div className="space-x-4">
                <button
                  onClick={() => handleModalOpen("company")}
                  className="w-fit rounded bg-accent p-2"
                >
                  Seller
                </button>
                <button
                  onClick={() => handleModalOpen("customer")}
                  className="w-fit rounded bg-accent p-2"
                >
                  Buyer
                </button>
                <button
                  onClick={() => handleModalOpen("info")}
                  className="w-fit rounded bg-accent p-2"
                >
                  info
                </button>
                <button
                  onClick={() => handleModalOpen("term")}
                  className="w-fit rounded bg-accent p-2"
                >
                  terms
                </button>
              </div>
            </Accordion>
          </div>

          <div>
            <Accordion title="Item list">
              <div className="mb-2 flex items-center">
                <div className="w-6/12 px-2 text-left text-sm">Description</div>
                <div className="w-2/12 px-2 text-center text-sm">Quantity</div>
                <div className="w-2/12 px-2 text-center text-sm">Price</div>
                <div className="w-2/12 px-2 text-center text-sm">Delete</div>
              </div>

              <ul role="list">
                {inputsList.length
                  ? inputsList.map((list, index) => (
                      <li key={index}>
                        <div className="group/item flex gap-1">
                          <input
                            name="description"
                            placeholder="description of item/service"
                            type="text"
                            autoComplete="off"
                            value={list.description}
                            onChange={(e) => handleChange(e, index)}
                            className="mb-1 w-6/12 rounded border border-base px-2 outline-none transition-all focus-visible:drop-shadow-lg"
                          />
                          <input
                            name="quantity"
                            placeholder="quantity"
                            type="number"
                            autoComplete="off"
                            value={list.quantity || 1}
                            onChange={(e) => handleChange(e, index)}
                            className="mb-1 w-2/12 rounded border border-base px-2 text-center outline-none transition-all focus-visible:drop-shadow-lg"
                          />
                          <input
                            name="price"
                            placeholder="price"
                            type="number"
                            autoComplete="off"
                            value={list.price}
                            onFocus={(e) => e.target.select()}
                            onChange={(e) => handleChange(e, index)}
                            className="mb-1 w-2/12 rounded border border-base px-2 text-center outline-none transition-all focus-visible:drop-shadow-lg"
                          />

                          {inputsList.length !== 1 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              onClick={() => handleRemoveInput(list.id)}
                              className="my-auto size-5 w-2/12 cursor-pointer text-red"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                              />
                            </svg>
                          )}
                        </div>

                        {inputsList.length - 1 === index && (
                          <button
                            onClick={() =>
                              setInputsList((prev) => [
                                ...prev,
                                {
                                  ...initInput,
                                  id: inputsList.slice(-1)[0].id + 1,
                                },
                              ])
                            }
                            className="mt-2 flex select-none items-center gap-1 rounded bg-green p-1 text-white transition-all hover:shadow-md"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                              />
                            </svg>
                            <span>Item</span>
                          </button>
                        )}
                      </li>
                    ))
                  : null}
              </ul>
            </Accordion>
          </div>

          <div>
            <Accordion title="Discount and Tax">
              <div className="mb-4 flex gap-4">
                <button
                  onClick={() =>
                    setSumOption((prev: any) => ({
                      ...prev,
                      hasDiscount: !sumOption.hasDiscount,
                    }))
                  }
                  className={`flex w-fit flex-1 items-center justify-between rounded border px-4 py-2 transition-all ${
                    sumOption.hasDiscount
                      ? "border-accent bg-accent/10 text-black"
                      : "border-black/20 bg-white text-black/50"
                  }`}
                >
                  <span>Discount</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6 ${
                      sumOption.hasDiscount
                        ? "visible text-accent"
                        : "invisible"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  onClick={() =>
                    setSumOption((prev: any) => ({
                      ...prev,
                      hasTax: !sumOption.hasTax,
                    }))
                  }
                  className={`flex w-fit flex-1 items-center justify-between rounded border px-4 py-2 transition-all ${
                    sumOption.hasTax
                      ? "border-yellow bg-yellow/20 text-black"
                      : "border-black/20 bg-white text-black/50"
                  }`}
                >
                  <span>Tax</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-6 ${
                      sumOption.hasTax ? "visible text-yellow" : "invisible"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {sumOption.hasDiscount && (
                <div className="relative mb-4 flex w-full overflow-hidden rounded-lg border border-accent">
                  <span className="pointer-events-none absolute right-14 top-2 select-none font-medium">
                    {sumOption?.isDiscountPct ? "%" : "฿"}
                  </span>
                  <input
                    name="discount"
                    type="number"
                    placeholder="Ex. 20"
                    value={sumInputs.discount}
                    className="h-10 w-full pl-2 pr-7 outline-none"
                    onChange={handleSummaryChange}
                  />
                  <button
                    onClick={() =>
                      setSumOption((prev: any) => ({
                        ...prev,
                        isDiscountPct: !sumOption.isDiscountPct,
                      }))
                    }
                    className="bg-white px-2 text-black/70 ring-2 ring-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                  </button>
                </div>
              )}

              {sumOption.hasTax && (
                <div className="relative flex w-full overflow-hidden rounded-lg border border-yellow">
                  <span className="pointer-events-none absolute right-14 top-2 select-none font-medium">
                    {sumOption?.isTaxPct ? "%" : "฿"}
                  </span>
                  <input
                    name="tax"
                    type="text"
                    placeholder="Ex. 7"
                    value={sumInputs.tax}
                    className="h-10 w-full pl-2 pr-7 outline-none"
                    onChange={handleSummaryChange}
                  />
                  <button
                    onClick={() =>
                      setSumOption((prev: any) => ({
                        ...prev,
                        isTaxPct: !sumOption.isTaxPct,
                      }))
                    }
                    className="bg-white px-2 text-black/70 ring-2 ring-yellow transition-all hover:bg-yellow hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </Accordion>
          </div>

          <div>
            <DownloadButton />
          </div>
        </section>
      </div>
    </article>
  );
};

export default Home;
