/*
 * @Author: 李佳修
 * @Date: 2022-05-21 13:07:23
 * @LastEditTime: 2022-05-30 15:48:06
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/ArticlePublish/components/AddTags.tsx
 */
import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import { Tag } from '../ArticlePublish';

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
  tags: Tag[]
}

const AddTags: React.FC<AddTagProps> = ({
  addTag, removeTag, tags
}) => {
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
      <Box
        width='100%'
        display='flex'
      >
        <Input
          fullWidth
          value={tagInput}
          placeholder="添加标签"
          style={{ marginRight: 16 }}
          onKeyDown={(e) => handleTagInputKeyDown(e)}
          onChange={(e) => handleTagInputChange(e)}
        />
        <IconButton
          color="primary"
          component="span"
          onClick={addTagInner}
        >
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
          padding: '12px 8px'
        }}
      >
        {tags.map((data) => {
          return (
            <ListItem key={data.tagID}>
              <Chip
                color='primary'
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