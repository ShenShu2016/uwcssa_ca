import React from "react";

export default class ArticleSideBarAD extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5074016115265751"
        data-ad-slot="1069962606"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    );
  }
}
