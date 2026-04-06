"use client";
import React, { useRef, useState, forwardRef, useEffect } from "react";
import CloseIcon from "@/icons/CloseIcon";
import UploadIcon from "@/icons/UploadIcon";
import ViewIcon from "@/icons/ViewIcon";
import IdentityIcon from "@/icons/IdentityIcon";
import ModalPopup from "@/app/modalPopup/page";
import DeleteIcon from "@/icons/DeleteIcon";

export interface UploadProps {
  label?: string;
  onFileChange: (files: File[] | null) => void;
  acceptedTypes?: string;
  maxSizeInKB?: number;
  className?: string;
  name?: string;
  multiple?: boolean;
  uploadingFile?: number;
  requiredFilesCount?: number;
  files?: File[];
}

const UploadDocuments = forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      label,
      onFileChange,
      acceptedTypes = ".jpg,.png,.pdf",
      maxSizeInKB = 500,
      className = "text-xs mb-1",
      multiple = false,
      uploadingFile = -1,
      requiredFilesCount,
      files = [],
    },
    ref
  ) => {
    const [filestate, setfilestate] = useState<File[]>([]);
    const internalRef = useRef<HTMLInputElement>(null);
    const [isModalDrawerOpen, setIsModalDrawerOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const [fileURL, setFileURL] = useState<string | null>(null);

    useEffect(() => {
      if (files && files.length > 0) {
        const same =
          files.length === filestate.length &&
          files.every(
            (f, i) =>
              f.name === filestate[i]?.name && f.size === filestate[i]?.size
          );

        if (!same) {
          setfilestate(files);
        }
      } else if (filestate.length > 0) {
        setfilestate([]);
      }
    }, [files]);

    useEffect(() => {
      if (!selectedFile) {
        setFileURL(null);
        return;
      }
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
      return () => {
        URL.revokeObjectURL(url);
        setFileURL(null);
      };
    }, [selectedFile]);

    const handleDivClick = () => {
      if (requiredFilesCount && filestate.length >= requiredFilesCount) return;
      inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files ? Array.from(e.target.files) : [];
      const validFiles = files.filter(
        (file) => file.size / 1024 <= maxSizeInKB
      );

      if (validFiles.length !== files.length) {
        alert(
          `Some files exceeded the ${maxSizeInKB} KB limit and were skipped.`
        );
      }

      let updatedFiles: File[] = [...filestate, ...validFiles];
      if (requiredFilesCount) {
        updatedFiles = updatedFiles.slice(0, requiredFilesCount);
      } else if (!multiple) {
        updatedFiles = validFiles.slice(0, 1);
      }

      setfilestate(updatedFiles);
      onFileChange(updatedFiles.length > 0 ? updatedFiles : null);
    };

    const handleViewFile = (file: File) => {
      setSelectedFile(file);
      setIsModalDrawerOpen(true);
    };

    const handleRemoveFile = (index: number) => {
      const updated = filestate.filter((_, i) => i !== index);
      setfilestate(updated);
      onFileChange(updated.length > 0 ? updated : null);

      //  input reset so that same file can be uploaded again
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    };

    const isImage = !!selectedFile && selectedFile.type.startsWith("image/");
    const isPdf = !!selectedFile && selectedFile.type === "application/pdf";

    return (
      <div className={`mt-1 ${className}`}>
        <input
          type="file"
          accept={acceptedTypes}
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
          multiple={multiple}
        />

        {/* Upload box stays until requiredFilesCount is reached */}
        {filestate.length <
          (requiredFilesCount ?? (multiple ? Infinity : 1)) && (
          <div
            onClick={handleDivClick}
            className="flex items-center  gap-4 border border-dashed border-orange-300 rounded-lg px-2 py-2 bg-[#FFF7F3] cursor-pointer"
          >
            <div className="bg-[#FBD4BD] p-2 rounded-md">
              <UploadIcon size={15} className="h-8 w-8 md:h-auto md:w-auto" />
            </div>
            <div>
              <div className="md:text-xs text-md text-black font-semibold">
                {label ? (
                  <label className={className}>{label}</label>
                ) : (
                  <label>
                    Drag & Drop or{" "}
                    <span className="text-[#E46019]">choose file</span> to
                    upload
                  </label>
                )}
              </div>
              <div className="text-[10px] mt-1 text-gray-600 flex">
                
                <span className="md:block hidden">Supported formats:</span><span className="md:hidden bloack">Only:</span> {acceptedTypes}. Max file size: {maxSizeInKB}{" "}
                KB. 
              </div>
            </div>
          </div>
        )}

        {filestate.length > 0 &&
          filestate.map((file, index) => (
            <div
              key={index}
              onClick={handleDivClick}
              className={`flex items-start mt-2 gap-4 rounded-lg py-2 ${
                uploadingFile === -1
                  ? "bg-[#FFF7F3] border border-dashed border-orange-300"
                  : "bg-white"
              } cursor-pointer`}
            >
              <div className="flex items-center gap-2 p-2 rounded-md justify-between w-full">
                <div className="flex items-center gap-2">
                  {uploadingFile > -1 && (
                    <div className="p-3 rounded-md bg-[#FEE1D2] ">
                      <IdentityIcon className="bg-[#FEE1D2]" color="black" />
                    </div>
                  )}
                  <div className="w-2xs break-words">
                    <p className="text-xs font-semibold text-[#F76B1C]">
                      {file.name}
                    </p>
                    <p className="text-xs font-medium text-gray-400">
                      {uploadingFile === -1
                        ? `${Math.round(file.size / 1024)} KB`
                        : uploadingFile < 100
                        ? `${uploadingFile}%`
                        : `${Math.round(file.size / 1024)} KB`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`cursor-pointer ${
                      uploadingFile > -1 && uploadingFile < 100 ? "hidden" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewFile(file);
                    }}
                  >
                    <ViewIcon size={15} />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFile(index);
                    }}
                  >
                    {uploadingFile > -1 ? (
                      <CloseIcon size={15} className="hover:text-red-500" />
                    ) : (
                      <DeleteIcon size={15} className="hover:text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

        {isModalDrawerOpen && selectedFile && (
          <ModalPopup
            onClose={() => {
              setIsModalDrawerOpen(false);
              setSelectedFile(null);
            }}
            title={selectedFile.name}
            size="lg"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              {isImage && fileURL && (
                <img
                  src={fileURL}
                  alt={selectedFile.name}
                  className="max-h-full max-w-full"
                />
              )}

              {isPdf && fileURL && (
                <iframe
                  src={fileURL}
                  title={selectedFile.name}
                  className="w-full h-full border rounded"
                />
              )}

              {!isImage && !isPdf && (
                <div className="flex flex-col items-center gap-3">
                  <p className="text-gray-600">Preview not supported.</p>
                  {fileURL && (
                    <a
                      href={fileURL}
                      download={selectedFile.name}
                      className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                    >
                      Download File
                    </a>
                  )}
                </div>
              )}
            </div>
          </ModalPopup>
        )}
      </div>
    );
  }
);

UploadDocuments.displayName = "UploadDocuments";

export default UploadDocuments;
