import { cn } from "@/lib/utils";
import { CloudUpload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function PhotoUploadWidget() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 ml-2">
      <div className="grid-cols-1">
        <h4>Step 1 - Add photo</h4>
        <div
          {...getRootProps()}
          className={cn(
            "flex flex-col text-center items-center justify-center border-dashed border-[3px] border-[#eee] rounded-[5px] pt-[30px] align-text-top h-[280px]",
            isDragActive ? "border-green-700" : "border-[#eee]"
          )}
        >
          <input {...getInputProps()} />
          <CloudUpload size={100} />
          <h5>Drop image here</h5>
        </div>
      </div>
      <div className="grid-cols-1">
        <h4>Step 2 - Resize image</h4>
      </div>
      <div className="grid-cols-1">
        <h4>Step 3 - Preview & upload</h4>
      </div>
    </div>
  );
}

export default PhotoUploadWidget;
