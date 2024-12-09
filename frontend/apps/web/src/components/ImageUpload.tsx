import React, { useState, useRef } from "react";
import uploadIcon from "/upload-icon.png";

interface ImageUploadProps {
  handleUploadEvent: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ handleUploadEvent }) => {
  const [file, setFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>(uploadIcon);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(selectedFile);
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleClick = () => {
    fileInput.current?.click();
  };

  return (
    <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-md">
      {/* File Input (hidden) */}
      <input
        type="file"
        onChange={handleImageChange}
        ref={fileInput}
        className="hidden"
      />

      {/* Thumbnail Preview */}
      <div className="mb-4 w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={imagePreviewUrl}
          alt="Preview"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Instruction Text */}
      <p className="text-center text-gray-500 mb-4">
        Please upload a file with a <strong>256x256</strong> size for optimal display.
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
            onClick={() => handleUploadEvent(file)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
