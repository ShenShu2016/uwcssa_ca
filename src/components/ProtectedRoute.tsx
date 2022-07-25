/*
 * @Author: Shen Shu
 * @Date: 2022-05-22 12:27:06
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 12:52:39
 * @FilePath: /uwcssa_ca/frontend/src/components/ProtectedRoute.tsx
 * @Description:
 *
 */

import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  isAllowed: boolean | void;
  redirectPath: string | undefined;
  children: JSX.Element;
}

function ProtectedRoute({
  isAllowed = false,
  redirectPath = "/404",
  children,
}: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}

export default ProtectedRoute;
