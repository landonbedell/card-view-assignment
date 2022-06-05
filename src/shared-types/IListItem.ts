import React from "react";

interface IListItem {
  id: number | string;
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  href: string;
  controls?: React.ReactNode[];
}

export default IListItem;