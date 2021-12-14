import React, { useEffect, useState } from "react";
import { getImage, selectImageById } from "../../redux/slice/imageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function S3Image({ S3Key, style }) {
  // const [imageURL, setImageURL] = useState(null);
  //console.log("S3Key", S3Key);
  const id = S3Key;
  const imgKeys = useSelector((state) => selectImageById(state, id));
  const dispatch = useDispatch();
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await dispatch(getImage({ url: [S3Key], id: S3Key }));
        setImageURL(response.payload.imgUrl);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (S3Key && imgKeys === undefined) {
      getImages();
    } else if (S3Key && imgKeys !== undefined) {
      setImageURL(Object.values(imgKeys.images)[0]);
    } else if (S3Key === null) {
      return;
    }
  }, [S3Key, imgKeys, dispatch]);

  return <img src={imageURL} alt={S3Key} style={style} />;
}
