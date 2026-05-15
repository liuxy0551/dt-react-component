import React, {
    CSSProperties,
    ReactNode,
    useCallback,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Tooltip } from 'antd';
import { AbstractTooltipProps, RenderFunction } from 'antd/lib/tooltip';
import classNames from 'classnames';

import Resize from '../resize';
import './style.scss';

export interface IEllipsisTextProps extends AbstractTooltipProps {
    /**
     * 文本内容
     */
    value: string | number | ReactNode | RenderFunction;
    /**
     * 提示内容
     * @default value
     */
    title?: string | ReactNode | RenderFunction;
    /**
     * 类名
     */
    className?: string;
    /**
     * 最大宽度
     */
    maxWidth?: string | number;
    /**
     * 是否监听父元素尺寸变化
     */
    watchParentSizeChange?: boolean;
    /**
     * antd Tooltip
     */
    [propName: string]: any;
}

const EllipsisText: React.FC<IEllipsisTextProps> = ({
    value,
    title = value,
    className,
    maxWidth,
    watchParentSizeChange = false,
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0,
    destroyTooltipOnHide = true,
    ...tooltipProps
}) => {
    const textRef = useRef<HTMLSpanElement>(null);
    const [isOverflow, setIsOverflow] = useState(false);
    const [cursor, setCursor] = useState<CSSProperties['cursor']>('default');

    /**
     * 执行函数型 value/title
     */
    const resolveNode = (node: string | number | ReactNode | RenderFunction | undefined) =>
        typeof node === 'function' ? node() : node;

    /**
     * 检测溢出
     */
    const checkOverflow = useCallback(() => {
        const ele = textRef.current;
        if (!ele) return;

        const overflow = ele.scrollWidth - ele.clientWidth > 1;
        setIsOverflow((prev) => (prev !== overflow ? overflow : prev));

        const parent = ele.parentElement;
        const parentCursor = parent && getComputedStyle(parent).cursor;
        const nextCursor = overflow ? parentCursor || 'pointer' : parentCursor;
        setCursor((prev) => (prev !== nextCursor ? nextCursor : prev));
    }, []);

    /**
     * 首次 & value/maxWidth 变化检测
     */
    useLayoutEffect(() => {
        checkOverflow();
    }, [value, maxWidth, checkOverflow]);

    const style: CSSProperties = {
        maxWidth,
        minWidth: 0,
        cursor,
    };
    const resolvedValue = useMemo(() => resolveNode(value), [value]);
    const resolvedTitle = useMemo(() => resolveNode(title ?? value), [title, value]);
    const tooltipTitle = isOverflow ? resolvedTitle : null;
    const content = (
        <span ref={textRef} className={classNames('dtc-ellipsis-text', className)} style={style}>
            {resolvedValue}
        </span>
    );
    const wrappedContent = isOverflow ? (
        <Tooltip
            title={tooltipTitle}
            mouseEnterDelay={mouseEnterDelay}
            mouseLeaveDelay={mouseLeaveDelay}
            destroyTooltipOnHide={destroyTooltipOnHide}
            {...tooltipProps}
        >
            {content}
        </Tooltip>
    ) : (
        content
    );

    const observerEle = watchParentSizeChange
        ? textRef.current?.parentElement ?? undefined
        : textRef.current ?? undefined;

    return (
        <Resize onResize={checkOverflow} observerEle={observerEle}>
            {wrappedContent}
        </Resize>
    );
};

export default EllipsisText;
