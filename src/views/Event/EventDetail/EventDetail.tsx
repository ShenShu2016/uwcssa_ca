/*
 * @Author: Shen Shu
 * @Date: 2022-06-18 17:26:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-18 17:48:54
 * @FilePath: /uwcssa_ca/src/views/Event/EventDetail/EventDetail.tsx
 * @Description:
 *
 */

import React, { useEffect } from 'react';
import { fetchEvent, selectEventById } from 'redux/event/eventSlice';
import { getAuthState, getOwnerUserName } from 'redux/auth/authSlice';
import {
  insertAllComments,
  removeAllComments,
} from 'redux/comment/commentSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function EventDetail() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);
  const { eventId } = useParams();
  const event = useAppSelector((state) => selectEventById(state, eventId));
  const ownerUsername = useAppSelector(getOwnerUserName);

  useEffect(() => {
    const getEvent = async () => {
      if (eventId !== null) {
        const response = await dispatch(
          fetchEvent({
            eventId,
            isAuth,
            ownerUsername,
          }),
        );
        dispatch(insertAllComments(response.payload.comments.items)); //这种方法不太好
      }
    };
    getEvent();
    return () => {
      dispatch(removeAllComments());
    };
  }, [eventId]);

  return <div>EventDetail</div>;
}

export default EventDetail;
