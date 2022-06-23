import React from 'react';
import moment from 'moment';
import { Card, Typography, Box } from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';
import { getOwnerUserName } from 'redux/auth/authSlice';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JoinedEvent: React.FC = () => {

  const eventList = useAppSelector((state) => state.event);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const navigate = useNavigate();

  const filteredEvent = eventList && eventList.ids ?
    eventList.ids.filter(id => 
      eventList.entities[id].eventParticipants?.items.findIndex((item => item.owner === ownerUsername)) !== -1) : [];
  
  return (
    <Box
      sx={{
        maxHeight: '50vh',
        overflow: 'auto'
      }}
    >
      {
        filteredEvent.map(id => (
          <Card
            sx={{
              p: 1,
              display: 'flex',
              mt: 1,
              justifyContent: 'space-between',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#eeeeee'
              }
            }}
            //   to={`/event/${info.id}`}
            onClick={() => navigate(`/event/${id}`)}       
            key={id}
          >
            <Box>
              <Typography fontSize={18} fontWeight={600}>
                {eventList.entities[id].title}
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <AccessTimeIcon sx={{ mr: 1 }} />
                {`${moment(eventList.entities[id].startDate).format('dddd, MMMM Do')} - ${moment(
                  eventList.entities[id].endDate,
                ).format('dddd, MMMM Do')}`}
              </Box>
              <Box
                sx={{
                  mt: 1,
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <LocationOnIcon sx={{ mr: 1 }} />
                {'没有存地点？'}
              </Box>
            </Box>
            <Box
              sx={{
                width: '40%',
                '& img': {
                  width: '100%',
                  height: '130px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }
              }}
            >
              <img src={eventList.entities[id].coverPageImgURL} alt={'event poster'} />
            </Box>
          </Card>
        ))
      }
    </Box>
  );
};

export default JoinedEvent;