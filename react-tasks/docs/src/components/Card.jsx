import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({ data }) {
  return (
    <motion.div
      drag
      className=" relative  w-50 h-60 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center">
            {" "}
            {data.close ? (
              <FaRegWindowClose color="#000" />
            ) : (
              <FaDownload size=".8em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 bg-${data.tag.tagColor}-600 flex items-center justify-center`}
            // className={`tag w-full py-4 ${
            //   data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            // }-600 flex items-center justify-center`} conditionally renderning
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
