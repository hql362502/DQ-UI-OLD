import React from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
    //是否显示关闭按钮的属性
    closable?: boolean;