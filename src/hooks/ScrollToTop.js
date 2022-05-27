/*
 * @Author: Shen Shu
 * @Date: 2022-05-27 00:17:15
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-27 00:21:10
 * @FilePath: /uwcssa_ca/src/hooks/ScrollToTop.js
 * @Description:
 *
 */

import React, { useEffect } from 'react';

import { useLocation } from 'react-router';

const ScrollToTop = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
