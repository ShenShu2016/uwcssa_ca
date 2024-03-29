/*
 * @Author: Shen Shu
 * @Date: 2022-06-01 00:31:43
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-30 23:40:04
 * @FilePath: /uwcssa_ca/src/admin/UserProfile/components/CustomerListResults.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Card,
  Fade,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";

import { AvatarURL } from "redux/userProfile/userProfileSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useState } from "react";
import moment from "moment";
import stringAvatar from "components/Avatar/AvatarFunction";

type UserProfileType = {
  id: string;
  name: string;
  email?: string | null;
  fullName?: string | null;
  contactEmail?: string | null;
  title?: string | null;
  about?: string | null;
  avatarURL?: AvatarURL | null;
  website?: string | null;
  createdAt: string;
  updatedAt: string;
  owner: string;
};

const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
  },
});

function CustomerListResults({
  userProfileList,
  ...rest
}: {
  userProfileList: Array<UserProfileType>;
}) {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

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
              <TableCell>Email</TableCell>
              <TableCell>Registration date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userProfileList
              .slice(page * limit, page * limit + limit)
              .map((customer) => (
                <TableRow hover key={customer.id}>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <NoMaxWidthTooltip
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }}
                        disableInteractive
                        title={
                          <Typography
                            color="inherit"
                            variant="body2"
                            sx={{ whiteSpace: "pre" }}
                          >
                            {JSON.stringify(customer, null, "\t")}
                          </Typography>
                        }
                      >
                        <Avatar
                          src={customer.avatarURL?.objectCompressedURL}
                          {...stringAvatar(customer.name, { mr: 2 })}
                        />
                      </NoMaxWidthTooltip>
                      <Typography color="textPrimary" variant="body1">
                        {customer.name}
                        {customer.id.slice(0, 6) === "google" && (
                          <Box
                            component={LazyLoadImage}
                            effect="blur"
                            src="/assets/images/icons/google-1.svg"
                            sx={{ mx: "0.5rem" }}
                          />
                        )}
                        {customer.email.includes("@uwindsor.ca") && (
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
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex" }}>
                      {moment(customer.createdAt).format("YYYY/MM/DD")}
                      <Typography
                        fontSize={10}
                        variant="subtitle2"
                        sx={{ ml: "4px" }}
                      >
                        ({moment(customer.createdAt).fromNow()})
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>

      <TablePagination
        component="div"
        count={userProfileList.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}

export default CustomerListResults;
