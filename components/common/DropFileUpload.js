import UploadIcon from "../../public/Icons/UploadIcon";
import Dropzone from "react-dropzone";

function DropFileUpload(props) {
  return (
    <div className="flex justify-center mb-2">
      <Dropzone
        onDrop={(accepted, rejected) =>
          props.uploadFiles(accepted, rejected, props.num)
        }
        accept="image/jpeg, image/png"
        multiple={true}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className={`
              text-tertiaryBlue-600 block w-full text-center cursor-pointer 
              border-2 border-tertiary-375 hover:border-tertiary-400 
              border-dashed p-7 rounded-md transition-all`}
          >
            <input {...getInputProps()} />
            <div className="flex space-x-2 w-full justify-center">
            <p className="flex justify-center">
              <UploadIcon />
            </p>
            <p
              className="text-sm font-semibold text-tertiary-650"
            >
              {props.msg}
            </p>
            <p className="text-sm font-semibold text-pink-500">
              {props.extension}
            </p>
            </div>
            
          </div>
        )}
      </Dropzone>
    </div>
  )
}

export default DropFileUpload;