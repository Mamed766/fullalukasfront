"use client";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { mutate } from "swr";

export default function PostModal({
  collection,
  onClose,
  isEdit = false,
  initialData = null,
}: {
  collection: any;
  onClose: () => void;
  isEdit?: boolean;
  initialData?: {
    id?: string | Number;
    title?: string;
    desc?: string;
    image?: string;
    price?: number;
    subscription?: string;
    percent?: number;
    new?: string;
    hot?: string;
  } | null;
}) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const initialValues = {
    title: initialData?.title || "",
    desc: initialData?.desc || "",
    image: initialData?.image || "",
    price: initialData?.price || 0,
    subscription: initialData?.subscription || "false",
    percent: initialData?.percent || 0,
    new: initialData?.new || "false",
    hot: initialData?.hot || "false",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    desc: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .min(0, "Price cannot be negative"),
    percent: Yup.number().min(0).max(100, "Percent must be between 0 and 100"),
  });

  const collectionid = collection?._id;

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("desc", values.desc);
    formData.append("price", values.price.toString());
    formData.append("subscription", values.subscription);
    formData.append("percent", values.percent.toString());
    formData.append("new", values.new);
    formData.append("hot", values.hot);

    if (!imageFile) {
      setImageError("Image is required");
      return;
    }

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/collections${
          isEdit ? `/${collectionid}` : ""
        }`,
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong while uploading");
      }

      const result = await response.json();
      console.log("Successfully uploaded:", result);
      mutate("collections");

      onClose();
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded w-[400px]">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit Collection" : "Create New Collection"}
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Title Field */}
            <div className="mb-2">
              <Field
                type="text"
                name="title"
                placeholder="Title"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Description Field */}
            <div className="mb-2">
              <Field
                as="textarea"
                name="desc"
                placeholder="Description"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="desc"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Price Field */}
            <div className="mb-2">
              <Field
                type="number"
                name="price"
                placeholder="Price"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Subscription, New, Hot - Select Options */}
            <div className="mb-2">
              <label>Subscription</label>
              <Field
                as="select"
                name="subscription"
                className="border p-2 rounded w-full"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Field>
            </div>

            <div className="mb-2">
              <label>New</label>
              <Field
                as="select"
                name="new"
                className="border p-2 rounded w-full"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Field>
            </div>

            <div className="mb-2">
              <label>Hot</label>
              <Field
                as="select"
                name="hot"
                className="border p-2 rounded w-full"
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Field>
            </div>

            {/* Percent Field */}
            <div className="mb-2">
              <Field
                type="number"
                name="percent"
                placeholder="Percent"
                className="border p-2 rounded w-full"
              />
              <ErrorMessage
                name="percent"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Image Upload Field */}
            <div className="mb-2">
              <input
                type="file"
                name="image"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files && event.target.files[0]) {
                    setImageFile(event.target.files[0]);
                  }
                }}
                className="border p-2 rounded w-full"
              />
              {imageError && (
                <div className="text-red-500 text-sm">{imageError}</div>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <button
              type="submit"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {isEdit ? "Update Collection" : "Create Collection"}
            </button>
            <button
              onClick={onClose}
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="button"
            >
              Cancel
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
