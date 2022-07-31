/*
 * @Author: Shen Shu
 * @Date: 2022-06-01 00:31:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-26 16:15:03
 * @FilePath: /uwcssa_ca/src/admin/Event/EventParticipant/components/EventParticipantTable.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useState } from "react";

import stringAvatar from "components/Avatar/AvatarFunction";
import { EventParticipant } from "redux/eventParticipant/eventParticipantSlice";
import { FormItem } from "redux/form/formSlice";

function EventParticipantTable({
  eventParticipantList,
  formItemList,
  ...rest
}: {
  eventParticipantList: Array<EventParticipant>;
  formItemList: Array<FormItem>;
}) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const formItemListByOrder = formItemList.sort((a, b) => {
    return a.order - b.order;
  });

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <Box sx={{ width: "100%", overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              {formItemListByOrder.map((item) => (
                <TableCell key={item.id}>{item.question}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {eventParticipantList
              .slice(page * limit, page * limit + limit)
              .map((participant) => (
                <TableRow hover key={participant.id}>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar
                        src={participant.user.avatarURL?.objectCompressedURL}
                        {...stringAvatar(participant.user.name, { mr: 2 })}
                      />

                      <Typography color="textPrimary" variant="body1">
                        {participant.user.name}
                        {participant.user.id.slice(0, 6) === "google" && (
                          <Box
                            component={LazyLoadImage}
                            effect="blur"
                            src="/assets/images/icons/google-1.svg"
                            sx={{ mx: "0.5rem" }}
                          />
                        )}
                        {participant.user.email.includes("@uwindsor.ca") && (
                          <Box
                            component={LazyLoadImage}
                            effect="blur"
                            src="/assets/images/icons/uwindsor_shield.svg"
                            sx={{ mx: "0.5rem", height: "20px" }}
                          />
                        )}
                      </Typography>
                    </Box>
                  </TableCell>
                  {participant.content1 && (
                    <TableCell>{participant.content1}</TableCell>
                  )}
                  {participant.content2 && (
                    <TableCell>{participant.content2}</TableCell>
                  )}
                  {participant.content3 && (
                    <TableCell>{participant.content3}</TableCell>
                  )}
                  {participant.content4 && (
                    <TableCell>{participant.content4}</TableCell>
                  )}
                  {participant.content5 && (
                    <TableCell>{participant.content5}</TableCell>
                  )}
                  {participant.content6 && (
                    <TableCell>{participant.content6}</TableCell>
                  )}
                  {participant.content7 && (
                    <TableCell>{participant.content7}</TableCell>
                  )}
                  {participant.content8 && (
                    <TableCell>{participant.content8}</TableCell>
                  )}
                  {participant.content9 && (
                    <TableCell>{participant.content9}</TableCell>
                  )}
                  {participant.content10 && (
                    <TableCell>{participant.content10}</TableCell>
                  )}
                  {participant.content11 && (
                    <TableCell>{participant.content11}</TableCell>
                  )}
                  {participant.content12 && (
                    <TableCell>{participant.content12}</TableCell>
                  )}
                  {participant.content13 && (
                    <TableCell>{participant.content13}</TableCell>
                  )}
                  {participant.content14 && (
                    <TableCell>{participant.content14}</TableCell>
                  )}
                  {participant.content15 && (
                    <TableCell>{participant.content15}</TableCell>
                  )}
                  {participant.content16 && (
                    <TableCell>{participant.content16}</TableCell>
                  )}
                  {participant.content17 && (
                    <TableCell>{participant.content17}</TableCell>
                  )}
                  {participant.content18 && (
                    <TableCell>{participant.content18}</TableCell>
                  )}
                  {participant.content19 && (
                    <TableCell>{participant.content19}</TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
      {formItemList.forEach((item) => (
        <div key={item.id}>{item.question}</div>
      ))}
      <TablePagination
        component="div"
        count={eventParticipantList.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

export default EventParticipantTable;
