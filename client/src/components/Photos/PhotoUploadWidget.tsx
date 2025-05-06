import { cn } from "@/lib/utils";
import { CloudUpload, Upload } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "../ui/button";

type Props = {
  uploadPhoto: (file: Blob) => void;
  loading: boolean;
};

function PhotoUploadWidget({ uploadPhoto, loading }: Props) {
  const [files, setFiles] = useState<object & { preview: string }[]>([]);
  const cropperRef = useRef<ReactCropperElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file as Blob),
        })
      )
    );
  }, []);

  const onCrop = useCallback(() => {
    const cropper = cropperRef.current?.cropper;

    cropper?.getCroppedCanvas().toBlob((blob) => {
      uploadPhoto(blob as Blob);
    });
  }, [uploadPhoto]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="grid grid-cols-3 gap-4 mt-4 ml-2">
      <div className="grid-cols-1">
        <h4 className="mb-2 text-pink-700">Step 1 - Add photo</h4>
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
        <h4 className="mb-2 text-pink-600">Step 2 - Resize image</h4>
        {files[0]?.preview && (
          <Cropper
            src={files[0]?.preview}
            className="h-[300px] w-[90%]"
            initialAspectRatio={1}
            preview=".img-preview"
            guides={false}
            viewMode={1}
            background={false}
            ref={cropperRef}
          />
        )}
      </div>
      <div className="grid-cols-1">
        {files[0]?.preview && (
          <>
            <h4 className="mb-2 text-pink-600">Step 3 - Preview & upload</h4>
            <div className="img-preview w-[300px] h-[300px] overflow-hidden"></div>
            <Button
              className="mt-4 w-[300px]"
              onClick={onCrop}
              variant="secondary"
              disabled={loading}
            >
              <Upload /> Upload
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotoUploadWidget;
