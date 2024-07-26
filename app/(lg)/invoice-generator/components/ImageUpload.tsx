"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState<any>();
  const [preview, setPreview] = useState<any>();

  const inputRef = useRef<any>(null);

  const handleChange = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFile(undefined);
      return;
    }
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) {
      setPreview(undefined);
      return;
    }
    console.log(file);
    const imgUrl = URL.createObjectURL(file);
    setPreview(imgUrl);
    return () => URL.revokeObjectURL(imgUrl);
  }, [file]);

  return (
    <>
      {!preview ? (
        <div
          onClick={() => inputRef.current.click()}
          className="relative max-h-16 min-h-16 min-w-16 max-w-16 cursor-pointer rounded-lg border border-dashed border-primary bg-grey/50 hover:bg-grey"
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            hidden
            onChange={handleChange}
            className="h-full w-full"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mx-auto size-5"
            >
              <path
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>

            <p>Logo</p>
          </div>
        </div>
      ) : (
        <div className="group relative flex items-center justify-center">
          <Image
            src={preview}
            alt="preview"
            height={0}
            width={0}
            className="h-auto max-h-16 w-auto max-w-16 group-hover:grayscale"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            onClick={() => setFile(undefined)}
            className="invisible absolute -right-1 -top-1 size-6 cursor-pointer text-red group-hover:visible"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
