"use client";
import React, { useState } from "react";
import { useRequest, useRequestMutation } from "../_http/axiosFetcher";
import PostModal from "./_postmodal/PostModal";
import Image from "next/image";
import { mutate } from "swr";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const router = useRouter();

  const { data, isLoading, error } = useRequest("collections", {
    method: "GET",
    module: "collectionApi",
  });

  const handleEdit = (collection: any) => {
    setEditData(collection);
    setIsEdit(true);
    setIsPostModalOpen(true);
  };

  const handleAddNew = () => {
    setEditData(null);
    setIsEdit(false);
    setIsPostModalOpen(true);
  };

  const { trigger: deleteProject } = useRequestMutation("dataWithId", {
    method: "DELETE",
    module: "collectionApi",
  });

  const handleDelete = async (collection: any) => {
    try {
      await deleteProject({
        dynamicValue: collection._id,
      });
      mutate("collections");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="px-10 py-20">
      <button
        onClick={handleAddNew}
        className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add New
      </button>
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                product img
              </th>

              <th scope="col" className="px-6 py-3">
                Product title
              </th>

              <th scope="col" className="px-6 py-3">
                product desc
              </th>
              <th scope="col" className="px-6 py-3">
                product descbody
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.collections.map((collection: any, index: number) => {
                return (
                  <tr
                    key={index}
                    className="odd:bg-white  even:bg-gray-50  border-b "
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <Image
                        height={50}
                        width={50}
                        alt=""
                        src={`http://localhost:3001/${collection?.image}`}
                      />
                    </th>
                    <td className="px-6 py-4">{collection?.title}</td>
                    <td className="px-6 py-4">
                      {collection?.desc.slice(0, 20)}..
                    </td>
                    <td className="">
                      {" "}
                      {collection?.subscription && (
                        <p className="bg-orange-400 max-w-[100px] px-2">
                          Subscription
                        </p>
                      )}
                      {collection.percent && (
                        <p className="bg-red-500 px-2 text-white max-w-[50px]">
                          -{collection?.percent}%
                        </p>
                      )}
                      {collection?.new && (
                        <p className="bg-blue-500 px-2 text-white max-w-[50px]">
                          New
                        </p>
                      )}
                      {collection?.hot && (
                        <p className="bg-blue-600 px-2 text-white max-w-[50px]">
                          HOT
                        </p>
                      )}
                    </td>
                    <td className=" flex gap-2  py-4">
                      <button
                        onClick={() => handleEdit(collection)}
                        className="font-medium text-yellow-600  hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(collection)}
                        className="font-medium text-red-600  hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div
          onClick={() => {
            router.push("/");
          }}
          className="flex justify-center p-10 cursor-pointer hover:bg-black hover:text-white duration-300"
        >
          BACK TO HOME
        </div>
        {isPostModalOpen && (
          <PostModal
            onClose={() => setIsPostModalOpen(false)}
            isEdit={isEdit}
            initialData={editData}
            collection={editData}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
