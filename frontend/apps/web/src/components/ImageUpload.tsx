import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface ImageUploadProps {
  handleUploadEvent: (imagePreviewUrl: string | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ handleUploadEvent }) => {

  const avatar = useSelector((state: RootState) => state.auth.avatar);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(avatar);
  const fileInput = useRef<HTMLInputElement>(null);
  

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log("Upload response data:", data);

      setImagePreviewUrl(data.image); // Backend should return the uploaded image URL
      setFile(selectedFile);
    } catch (err) {
      console.error("Error uploading image:", err);
      setImagePreviewUrl(null); // Reset on error
    }
  };

  const handleClick = () => {
    fileInput.current?.click();
  };

  const resetFileInput = () => {
    if (fileInput.current) {
      fileInput.current.value = ""; // Reset file input to allow re-upload
    }
    setFile(null);
    setImagePreviewUrl(null);
  };

  console.log("============", `${import.meta.env.VITE_BACKEND_URL}${imagePreviewUrl}`)

  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md">
      {/* File Input (hidden) */}
      <input
        type="file"
        onChange={handleImageChange}
        ref={fileInput}
        accept="image/*"
        className="hidden"
      />

      {/* Thumbnail Preview */}
      <div className="mb-4 w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        {imagePreviewUrl ? (
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${imagePreviewUrl}`}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        ) : (
          <p className="text-gray-400 text-sm">No image uploaded</p>
        )}
      </div>

      {/* Instruction Text */}
      <p className="text-center text-gray-500 mb-4">
        Please upload an image (e.g., <strong>256x256</strong>).
      </p>

      {/* Buttons */}
      {file === null ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          onClick={handleClick}
        >
          Click Here To Upload
        </button>
      ) : (
        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            onClick={handleClick}
          >
            Change
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition"
            onClick={() => {
              handleUploadEvent(imagePreviewUrl);
              resetFileInput(); // Reset file input after submission
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
