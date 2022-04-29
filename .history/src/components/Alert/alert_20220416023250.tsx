import React from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
    //Alert的类型
    type?: AlertType;
    //是否显示关闭按钮的属性
    closable?: boolean;
    //标题内容
    title?: string;
    //描述内容
    message: string;
    //背景颜色
    backgroundColor?: string;
}

const Alert: React.FC<AlertProps> = (props) => {
    const { type = 'default', closable, title, message, backgroundColor } = props;
    const [show, setShow] = React.useState(true);
    const classes = classNames("alert", {
        [`alert-${type}`]: type,
        "alert-closable": closable,
    });
    return (
        show &&{<div className={classes} style={{ backgroundColor }}>

            <div className="left">
                {title && <h4 className="alert-title">{title}</h4>}
                <span className="alert-message">{message}</span>
            </div>
            <div className="right">
                {closable && (
                    <span
                        className="alert-close"
                        onClick={() => {
                                console.log("关闭了");
                            }
                        }
                    >
                        x
                    </span>
                )}
            </div>
        </div>
    )

}
Alert.defaultProps = {
    type: "default",
    closable: true,
}

export default Alert;