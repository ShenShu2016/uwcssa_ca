import React, { useEffect, useState } from "react";

import Storage from "@aws-amplify/storage";

function S3Image({ S3Key, style }) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      try {
        const imageAccessURL = await Storage.get(S3Key, {
          level: "public",
          expires: 120,
          download: false,
        });
        setImageURL(imageAccessURL);
      } catch (error) {
        console.error("error accessing the Image from s3", error);
        setImageURL(null);
      }
    };
    if (S3Key) {
      getImage();
    }
  }, [S3Key]);

  return <img src={imageURL} alt={S3Key} style={style} />;
}

export default S3Image;
