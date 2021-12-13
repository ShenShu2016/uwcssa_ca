// import { getImage, selectImageById } from "../redux/reducers/imageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";

// import { updateImage } from "../redux/reducers/imageSlice";
// export default function useGetImages(item, id) {
//   const dispatch = useDispatch();
//   const [imgKeyFromServer, setImgKeyFromServer] = useState([]);
//   const imgKeys = useSelector((state) => selectImageById(state, id));

//   useEffect(() => {
//     const getImages = async (url) => {
//       const response = await dispatch(getImage({ url: url, id }));
//       setImgKeyFromServer((prev) => prev.concat(response.payload.imgUrl));
//     };
//     const updateImages = async (newUrl, oldUrl) => {
//       const response = await dispatch(
//         updateImage({ url: newUrl, id, prevUrl: oldUrl })
//       );
//       setImgKeyFromServer((prev) => prev.concat(response.payload.imgUrl));
//     };

//     if (imgKeys === undefined && !!item.imgS3Keys) {
//       //从来没见过的状态下
//       getImages(item.imgS3Keys);
//     } else if (imgKeys !== undefined && !!item.imgS3Keys) {
//       //见过的状态下，有可能只拿了第一个，所有要更新后面的
//       if (Object.keys(imgKeys.images).length < item.imgS3Keys.length) {
//         //当只拿到过一个并且还有的没拿
//         const loadedImages = imgKeys.images;
//         const unloadedImages = item.imgS3Keys.filter(
//           (key) => Object.keys(imgKeys.images).includes(key) === false
//         );
//         setImgKeyFromServer((prev) =>
//           prev.concat(Object.values(imgKeys.images))
//         );
//         updateImages(unloadedImages, loadedImages);
//       } else {
//         setImgKeyFromServer(Object.values(imgKeys.images));
//       }
//     }
//   }, [dispatch, item, imgKeys, id]);
//   return imgKeyFromServer;
// }
