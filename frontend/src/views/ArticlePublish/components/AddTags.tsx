import React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TagFacesIcon from '@mui/icons-material/TagFaces';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const AddTags = () => {

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'jQuery' },
    { key: 7, label: 'Polymer' },
    { key: 8, label: 'React' },
    { key: 9, label: 'Vue.js' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
    
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        // mt: '54px',
        minHeight: '128px'
      }}
      component="ul"
    >
      <Box p='12px' width='100%'>
        <TextField
          id="standard-textarea"
          fullWidth
          label="添加标签"
          multiline
          variant="standard"
          sx={{
            paddingBottom: 2,
          }}
        />
      </Box>
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Card>
  );
};

export default AddTags;