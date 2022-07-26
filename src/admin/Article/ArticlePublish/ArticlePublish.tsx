/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-05-20 09:30:58
 * @LastEditTime: 2022-07-25 22:27:55
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticlePublish/ArticlePublish.tsx
 */

import { Article, postArticle } from "redux/article/articleSlice";
import React, { useState } from "react";
import { postTag, postUpdateArticleTags } from "redux/tag/tagSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ActiveType } from "API";
import { getOwnerUserName } from "redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { v4 as uuid } from "uuid";
import ArticleCommon from "../ArticleCommon";

export interface Tag {
  tagID: string;
}
function ArticlePublish(): JSX.Element {
  const [fullScreenLoading, setFullScreenLoading] = useState({
    loading: false,
    message: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const username = useAppSelector(getOwnerUserName);

  const handleSubmitArticle = async (data) => {
    setFullScreenLoading({
      loading: true,
      message: "正在创建标签和文章",
    });
    // 创建tag 和 创建文章异步进行 因为此时tag和文章之间没有依赖关系
    const [tagCreate, articleCommit] = await Promise.all([
      createTags(data.tags),
      commitArticle(data),
    ]);
    setFullScreenLoading({
      loading: true,
      message: "正在关联文章和标签",
    });
    // 都完成后进行tag与文章的关联
    console.log(tagCreate, articleCommit);
    if (tagCreate.status && articleCommit.status) {
      const isConnected = await connectTagsAndArticle(
        articleCommit.articleID,
        tagCreate.tags,
      );
      if (isConnected) {
        enqueueSnackbar("发布完成", { variant: "success" });
        setFullScreenLoading({
          loading: true,
          message: "操作成功，即将跳转",
        });
        setTimeout(() => {
          setFullScreenLoading({
            loading: false,
            message: "",
          });
          navigate("/dashboard", { replace: true });
        }, 1000);
      } else {
        enqueueSnackbar("文章操作有误", { variant: "warning" });
      }
    } else {
      console.error("文章上传或标签上传出现错误");
      enqueueSnackbar("文章上传或标签上传出现错误", { variant: "error" });
      setFullScreenLoading({
        loading: false,
        message: "",
      });
    }
  };

  const commitArticle = async (data) => {
    const articleID = uuid();
    const params: Article = {
      id: articleID,
      title: data.title,
      content: data.content,
      active: ActiveType.T,
      isPublish: data.isPublish,
      coverPageImgURL: data.imgFile || undefined,
      coverPageDescription: data.coverPageDescription,
      owner: username,
    };
    console.log(params.owner, username, 888);
    const articlePostRes = await dispatch(
      postArticle({ createArticleInput: params }),
    );
    const isPosted = articlePostRes.meta.requestStatus === "fulfilled";
    if (isPosted) {
      enqueueSnackbar("文章已发布", { variant: "success" });
    } else {
      enqueueSnackbar("文章发布错误", { variant: "error" });
    }
    return {
      articleID,
      status: isPosted,
    };
  };

  const createTags = async (currentTags) => {
    const tagsPromises = currentTags.map((item) =>
      dispatch(
        postTag({
          createTagInput: {
            id: item.tagID,
            owner: username,
          },
        }),
      ),
    );
    const tagUploadRes = await Promise.all(tagsPromises);
    console.log(tagUploadRes, 999);
    const isAllTagCreated = tagUploadRes.every(
      (res) =>
        res.meta.requestStatus === "fulfilled" ||
        res.payload[0].errorType === "DynamoDB:ConditionalCheckFailedException",
    );
    console.log(isAllTagCreated); // 这里要改改
    if (isAllTagCreated) {
      enqueueSnackbar("标签已创建", { variant: "success" });
    } else {
      enqueueSnackbar("标签创建错误", { variant: "warning" });
    }
    return {
      tags: tagUploadRes.map((tag) => tag.meta.arg.createTagInput.id),
      status: isAllTagCreated,
    };
  };

  const connectTagsAndArticle = async (articleID, tags) => {
    const response = await dispatch(
      postUpdateArticleTags({ articleID, tagIDs: tags }),
    );
    console.log(response);

    return true;
  };

  return (
    <ArticleCommon
      pageTitle="发布文章"
      fullScreenLoading={fullScreenLoading}
      onCommit={handleSubmitArticle}
    />
  );
}

export default ArticlePublish;
