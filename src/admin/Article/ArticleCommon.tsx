/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Card,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FullScreenLoading from "components/FullScreenLoading";
import LoadingButton from "@mui/lab/LoadingButton";
import PageTitle from "admin/components/pageTitle";
import RichTextEditor from "components/RichTextEditor";
import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";
import MyImageList from "./ArticlePublish/components/MyImageList";
import AddTags from "./ArticlePublish/components/AddTags";
import AddCoverPic from "./ArticlePublish/components/AddCoverPic";

export interface Tag {
  tagID: string;
}

interface ArticleCommonProp {
  pageTitle: string;
  fullScreenLoading: {
    loading: boolean;
    message: string;
  };
  initData?: {
    title: string;
    content: string;
    coverPageDescription: string;
    tags: Tag[];
    isPublish: boolean;
    imgFile: string;
  };
  onCommit: (data: any) => void;
}

const ArticleCommon: React.FC<ArticleCommonProp> = ({
  pageTitle,
  fullScreenLoading,
  initData = null,
  onCommit,
}) => {
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  // 获取url中的文章id参数 如果有说明是编辑文章 没有说明是新建
  const [isPublish, setIsPublish] = useState(false); // 必须一直是false
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [coverPageDescription, setCoverPageDescription] = useState<string>("");
  const [tags, setTags] = useState<Array<Tag>>([]);
  const [imgFile, setImgFile] = useState("");
  const [inputStatus, setInputStatus] = useState({
    title: false,
    desc: false,
  });

  // 如果是编辑文章的状态下 会传入文章信息作为初始状态
  useEffect(() => {
    if (initData) {
      setTitle(initData.title);
      setContent(initData.content);
      setCoverPageDescription(initData.coverPageDescription);
      setTags(() => initData.tags);
      setImgFile(initData.imgFile);
    }
  }, [initData]);

  const handleFocus = (key) => {
    setInputStatus((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const useImgFromRecent = (item) => {
    setImgFile(item.objectCompressedURL || item.objectURL);
  };

  const addTag = (tag: string) => {
    // 判断当前的tag列表里是否有这个tag
    const find = tags.findIndex((item) => item.tagID === tag);
    if (find !== -1) {
      enqueueSnackbar(`标签【${tag}】已存在`, { variant: "warning" });
      return;
    }
    // 如果没有
    setTags((prev) => {
      const current = [...prev];
      current.push({
        tagID: tag,
      });
      return current;
    });
  };

  const removeTag = (tag: string) => {
    setTags((chips) => chips.filter((chip) => chip.tagID !== tag));
  };

  const handleArticleChange = async () => {
    if (isPublish) {
      await confirm({
        description: "此行为会将文章发布到订阅者邮箱，是否继续？",
      });
    }
    // 校验
    if (!title || !coverPageDescription || !content) {
      setInputStatus(() => ({
        title: !title,
        desc: !coverPageDescription,
      }));
      enqueueSnackbar(!content ? "请填写文章内容" : "文章信息不全，无法发布", {
        variant: "error",
      });
      return;
    }
    const data = {
      title,
      content,
      coverPageDescription,
      tags,
      isPublish,
      imgFile,
    };
    onCommit(data);
  };

  return (
    <>
      <FullScreenLoading
        message={fullScreenLoading.message}
        loading={fullScreenLoading.loading}
      />
      <PageTitle title={pageTitle}>
        <Box display="flex" paddingX="5%" pb={4}>
          <Card sx={{ width: "70%", p: 2 }}>
            <TextField
              error={inputStatus.title}
              id="standard-textarea"
              fullWidth
              label="Title"
              multiline
              value={title}
              variant="standard"
              inputProps={{
                style: {
                  fontSize: 20,
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 18,
                },
              }}
              sx={{
                paddingBottom: 2,
              }}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => handleFocus("title")}
            />
            <TextField
              error={inputStatus.desc}
              id="standard-textarea"
              fullWidth
              label="description & preview"
              multiline
              rows={3}
              value={coverPageDescription}
              inputProps={{
                style: {
                  fontSize: 14,
                  color: "#616161",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: 16,
                },
              }}
              sx={{
                paddingBottom: 2,
              }}
              onChange={(e) => setCoverPageDescription(e.target.value)}
              onFocus={() => handleFocus("desc")}
            />
            <RichTextEditor
              content={content}
              setContent={setContent}
              height="calc(100% - 180px)"
            />
          </Card>
          <Box
            width="30%"
            ml="30px"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <AddTags addTag={addTag} tags={tags} removeTag={removeTag} />
            <MyImageList useImgFromRecent={useImgFromRecent} />
            <Box>
              <AddCoverPic setImgFile={setImgFile} imgFile={imgFile} />
              <FormControlLabel
                name="isPublish"
                value={isPublish}
                onChange={(e: any) => setIsPublish(e.target.checked)}
                control={<Checkbox size="medium" />}
                label="将文章发送至订阅者邮箱？"
              />
              <LoadingButton
                fullWidth
                variant="contained"
                sx={{
                  marginTop: "8px",
                }}
                onClick={handleArticleChange}
              >
                {pageTitle}
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </PageTitle>
    </>
  );
};

export default ArticleCommon;
