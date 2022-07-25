/*
 * @Author: 李佳修
 * @Date: 2022-06-26 15:41:46
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-26 19:44:26
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticleEdit/ArticleEdit.tsx
 * @Description:
 *
 */

import {
  Article,
  fetchArticle,
  updateArticleDetail,
} from "redux/article/articleSlice";
import React, { useEffect, useState } from "react";
import { postTag, postUpdateArticleTags } from "redux/tag/tagSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { useNavigate, useParams } from "react-router-dom";

import { ActiveType } from "API";
import { getOwnerUserName } from "redux/auth/authSlice";
import { useSnackbar } from "notistack";
import ArticleCommon from "../ArticleCommon";

const ArticleEdit: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { id: editArticleId } = useParams();
  const navigate = useNavigate();
  const [fullScreenLoading, setFullScreenLoading] = useState({
    loading: false,
    message: "",
  });
  const [initData, setInitData] = useState(null);
  const [originOwner, setOriginOwner] = useState<string>("");
  const dispatch = useAppDispatch();
  const username = useAppSelector(getOwnerUserName);

  useEffect(() => {
    const getCurrentArticle = async () => {
      setFullScreenLoading({
        loading: true,
        message: "正在获取文章信息",
      });
      const res = await dispatch(
        fetchArticle({
          articleId: editArticleId,
          isAuth: true,
          ownerUsername: username,
        }),
      );
      if (res.meta.requestStatus === "fulfilled") {
        const articleInfo = res.payload;
        setInitData({
          title: articleInfo.title,
          content: articleInfo.content,
          coverPageDescription: articleInfo.coverPageDescription,
          tags: articleInfo.tags.items,
          imgFile: articleInfo.coverPageImgURL,
        });

        setOriginOwner(articleInfo.owner);
      } else {
        enqueueSnackbar("获取文章失败", { variant: "error" });
      }
      setFullScreenLoading({
        loading: false,
        message: "",
      });
      console.log(res);
    };
    if (editArticleId) {
      getCurrentArticle();
    }
  }, [editArticleId]);

  const handleSubmitArticle = async (data) => {
    setFullScreenLoading({
      loading: true,
      message: "正在更新标签和文章",
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
    if (tagCreate.status && articleCommit.status) {
      const isConnected = await connectTagsAndArticle(
        editArticleId,
        tagCreate.tags,
      );
      if (isConnected) {
        enqueueSnackbar("更新完成", { variant: "success" });
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
    const params: Article = {
      id: editArticleId,
      title: data.title,
      content: data.content,
      active: ActiveType.T,
      isPublish: data.isPublish,
      coverPageImgURL: data.imgFile || undefined,
      coverPageDescription: data.coverPageDescription,
      owner: originOwner,
    };
    console.log(params.owner, username, 888);
    const articlePostRes = await dispatch(
      updateArticleDetail({ updateArticleInput: params }),
    );
    const isPosted = articlePostRes.meta.requestStatus === "fulfilled";
    if (isPosted) {
      enqueueSnackbar("文章已更新", { variant: "success" });
    } else {
      enqueueSnackbar("文章更新错误", { variant: "error" });
    }
    return {
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
    // console.log(tagUploadRes);
    const isAllTagCreated = tagUploadRes.every(
      (res) =>
        res.meta.requestStatus === "fulfilled" ||
        res.payload[0].errorType === "DynamoDB:ConditionalCheckFailedException",
    );
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
      pageTitle="编辑文章"
      fullScreenLoading={fullScreenLoading}
      initData={initData}
      onCommit={handleSubmitArticle}
    />
  );
};

export default ArticleEdit;
