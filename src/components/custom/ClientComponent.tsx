"use client";

import React, { FC } from 'react';
import {Button} from "@/components/ui/button";

const ClientComponent: FC = () => {
  return <Button onClick={() => console.log("clicked")}>Client Component button</Button>;
};

export default ClientComponent;
