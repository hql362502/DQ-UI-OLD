import React from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
    //Alert的类型
    type?: AlertType;
    //是否显示关闭按钮的属性
    closable?: boolean;
    //标题内容
    title: string;
    //描述内容
    message: string;
    
}