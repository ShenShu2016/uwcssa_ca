/*
 * @Author: 李佳修
 * @Date: 2022-05-21 13:07:23
 * @LastEditTime: 2022-06-25 23:59:23
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Article/ArticlePublish/components/AddTags.tsx
 */

import { Box, Card, Chip, Input } from '@mui/material';

import DoneIcon from '@mui/icons-material/Done';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Tag } from '../ArticlePublish';
import { styled } from '@mui/material/styles';

const ListItem = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(),
  marginBottom: theme.spacing(),
}));
interface Chip {
  tagID: string;
  label: string;
}

interface AddTagProps {
  addTag: (tag: string) => void;
  removeTag: (tag: string) => void;
  tags: Tag[];
}

const AddTags: React.FC<AddTagProps> = ({ addTag, removeTag, tags }) => {
  const [tagInput, setTagInput] = React.useState<string>('');

  const handleDelete = (chipToDelete) => {
    removeTag(chipToDelete.tagID);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.code === 'Enter') {
      addTagInner();
    }
  };

  const addTagInner = () => {
    addTag(tagInput);
    setTagInput('');
  };

  return (
    <Card
      sx={{
        margin: 0,
        p: '12px',
        height: '25vh',
      }}
      component="ul"
    >
      <Box width="100%" display="flex">
        <Input
          fullWidth
          value={tagInput}
          placeholder="添加标签"
          style={{ marginRight: 16 }}
          onKeyDown={(e) => handleTagInputKeyDown(e)}
          onChange={(e) => handleTagInputChange(e)}
        />
        <IconButton color="primary" component="span" onClick={addTagInner}>
          <DoneIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          height: '85%',
          overflow: 'auto',
          padding: '12px 8px',
        }}
      >
        {tags.map((data, index) => {
          return (
            <ListItem key={data.tagID + index}>
              <Chip
                color="primary"
                label={data.tagID}
                onDelete={() => handleDelete(data)}
              />
            </ListItem>
          );
        })}
      </Box>
    </Card>
  );
};

export default AddTags;
