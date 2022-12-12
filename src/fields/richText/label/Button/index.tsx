import React from "react";
import { ElementButton } from "payload/components/rich-text";

import "./index.scss"

const baseClass = "rich-text-label-button"

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton format="label">
    <div className={baseClass}>label</div>
  </ElementButton>
)

export default ToolbarButton
