import { useForm } from "react-hook-form";
import React, { useState } from "react";
import getCroppedImg from "../Account/Profile/Info/canvasUtils";
import { useDispatch } from "react-redux";
import { dataURLtoFile } from "../Account/Profile/Info/dataURLtoFile";
import { postSingleImage } from "../../redux/slice/generalSlice";
import { useRef } from "react";
import { v4 as uuid } from "uuid";
import readFile from "./readFile";
import FileListItems from "./FileListItems";
import AvatarCropper from "./AvatarCropper";
import { updateFoundingMemberDetail } from "../../redux/slice/foundingMemberSlice";
import { updateUwcssaMemberDetail } from "../../redux/slice/uwcssaMemberSlice";
import { putUserProfile } from "../../redux/slice/profileSlice";

export default function EditAvatar({
  editAvatarOpen,
  handleEditAvatarClose,
  item,
  user,
  type,
}) {
  const dispatch = useDispatch();
  //   const isPermit = usePermit(null, "admin");

  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState(
    type === "Profile" ? user.avatarImgURL : item.imgURL
  );

  const [imageSrc, setImageSrc] = useState(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [finish, setFinish] = useState(false);
  const inputRef = useRef();

  const triggerFileSelectPopup = () => {
    inputRef.current.click();
  };

  const { handleSubmit } = useForm({
    defaultValues: {},
  });

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onImgFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setFinish(false);
    }
  };

  const noChange = () => {
    setImageSrc(null);
    setImgURL(type === "Profile" ? user.avatarImgURL : item.imgURL);
    setFinish(false);
    setZoom(1);

    handleEditAvatarClose();
  };

  const uploadImg = async (e) => {
    setLoading(true);

    const canvas = await getCroppedImg(imageSrc, croppedArea);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      `croppedImg${uuid()}.jpeg`
    );
    const files = [convertedUrlToFile];
    const fileInputFiles = new FileListItems(files);
    const imageData = fileInputFiles;
    if (type === "Profile") {
      const imageLocation = "user/Avatar";
      const maxPixel = 300;
      const response = await dispatch(
        postSingleImage({ imageData, imageLocation, maxPixel })
      );
      if (response.meta.requestStatus === "fulfilled") {
        console.log("response", response);
        setImgURL(response.payload);
        setLoading(false);
        setZoom(1);
        setImageSrc(null);
        setFinish(true);
      }
    } else {
      const imageLocation =
        type === "uwcssaMember" ? "uwcssaMember" : "foundingMember";
      const response = await dispatch(
        postSingleImage({ imageData, imageLocation })
      );
      if (response.meta.requestStatus === "fulfilled") {
        console.log("response", response);
        setImgURL(response.payload);
        setLoading(false);
        setZoom(1);
        setImageSrc(null);
        setFinish(true);
      }
    }
  };

  const onSubmit = async (data) => {
    if (type === "Profile") {
      const updateUserInput = {
        ...data,
        avatarImgURL: imgURL,
      };
      setLoading(true);
      const response = await dispatch(putUserProfile({ updateUserInput }));
      handleEditAvatarClose();
      if (response) {
        setLoading(false);
      }
    } else if (type === "uwcssaMember") {
      const updateUwcssaMemberInput = {
        ...data,
        id: item.id,
        imgURL: imgURL,
      };
      setLoading(true);
      const response = await dispatch(
        updateUwcssaMemberDetail({ updateUwcssaMemberInput })
      );
      handleEditAvatarClose();
      if (response) {
        //console.log(response);
        setLoading(false);
      }
    } else {
      const updateFoundingMemberInput = {
        ...data,
        id: item.id,
        imgURL: imgURL,
      };
      setLoading(true);
      const response = await dispatch(
        updateFoundingMemberDetail({ updateFoundingMemberInput })
      );
      handleEditAvatarClose();
      if (response) {
        console.log(response);
        setLoading(false);
      }
    }
  };

  return (
    <AvatarCropper
      editAvatarOpen={editAvatarOpen}
      handleEditAvatarClose={handleEditAvatarClose}
      imageSrc={imageSrc}
      imgURL={imgURL}
      crop={crop}
      zoom={zoom}
      setCrop={setCrop}
      onCropComplete={onCropComplete}
      setZoom={setZoom}
      inputRef={inputRef}
      onImgFileChange={onImgFileChange}
      triggerFileSelectPopup={triggerFileSelectPopup}
      loading={loading}
      uploadImg={uploadImg}
      noChange={noChange}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      finish={finish}
      item={item}
      user={user}
      aspect={type === "Profile" ? 1 : 125 / 125}
      cropShape={type === "Profile" ? "round" : ""}
      showGrid={type === "Profile" ? false : true}
      type={type}
    />
  );
}
