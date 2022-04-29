import React from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
    //显示是否关闭