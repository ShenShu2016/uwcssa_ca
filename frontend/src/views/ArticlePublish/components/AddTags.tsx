/*
 * @Author: 李佳修
 * @Date: 2022-05-21 13:07:23
 * @LastEditTime: 2022-05-21 17:27:32
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticlePublish/components/AddTags.tsx
 */
import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import useMessage from 'hooks/useMessage';

const ListItem = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(),
  marginBottom: theme.spacing(),
}));

const AddTags = () => {
  const [tagInput, setTagInput] = React.useState<string>('');
  const [chipData, setChipData] = React.useState([]);
  const message = useMessage();

  const handleDelete = (chipToDelete) => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyDown = (e) => {
    if (e.code === 'Enter') {
      addTag();
    }
  };

  const addTag = () => {
    // 判断当前的tag列表里是否有这个tag
    const find = chipData.findIndex((item) => item.key === tagInput);
    if (find !== -1) {
      message.open({
        type: 'warning',
        message: `标签【${tagInput}】已存在`
      });
      return;
    }
    // 如果没有
    setChipData((prev) => {
      prev.push({
        key: tagInput,
        label: tagInput
      });
      return [...prev];
    });
    setTagInput('');
  };

  return (
    <Card
      sx={{
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
          onClick={addTag}
        >
          <DoneIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '85%',
          overflow: 'auto',
          padding: '12px 8px'
        }}
      >
        {chipData.map((data) => {
          return (
            <ListItem key={data.key}>
              <Chip
                label={data.label}
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