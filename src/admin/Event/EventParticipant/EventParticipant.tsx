/*
 * @Author: Shen Shu
 * @Date: 2022-07-26 13:26:50
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 16:14:13
 * @FilePath: /uwcssa_ca/src/admin/Event/EventParticipant/EventParticipant.tsx
 * @Description:
 *
 */
import { Box } from "@mui/material";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchEventParticipantList,
  removeAllEventParticipants,
  selectAllEventParticipants,
} from "redux/eventParticipant/eventParticipantSlice";
import {
  fetchFormItemList,
  removeAllFormItems,
  selectAllFormItems,
} from "redux/form/formSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import EventParticipantTable from "./components/EventParticipantTable";

function EventParticipant() {
  const { eventId, formFormItemsId } = useParams();

  const dispatch = useAppDispatch();
  const eventParticipantList = useAppSelector(selectAllEventParticipants);
  const formItemList = useAppSelector(selectAllFormItems);
  useEffect(() => {
    dispatch(fetchEventParticipantList({ eventId }));
    dispatch(
      fetchFormItemList({
        isAuth: true,
        filter: { formFormItemsId: { eq: formFormItemsId } },
      }),
    );

    return () => {
      dispatch(removeAllEventParticipants());
      dispatch(removeAllFormItems());
    };
  }, []);

  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          mx: "4px",
        }}
      >
        <EventParticipantTable
          eventParticipantList={eventParticipantList}
          formItemList={formItemList}
        />
      </Box>
    </div>
  );
}

export default EventParticipant;
