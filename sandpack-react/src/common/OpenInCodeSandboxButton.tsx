import {useClasser} from '@code-hike/classer';
import * as React from 'react';

import {useSandpackTheme} from '../hooks/useSandpackTheme';
import {CSBIcon} from '../icons';
import {isDarkColor} from '../utils/stringUtils';
import {useSandpack} from '../hooks/useSandpack';
import type {SandpackFiles} from "../types";

export interface OpenInCodeSandboxButtonProps {
    openInCondeSandboxTrigger?: (files: SandpackFiles) => void;
};

export const OpenInCodeSandboxButton: React.FC<OpenInCodeSandboxButtonProps> = ({
                                                                                    openInCondeSandboxTrigger,
                                                                                }) => {
    const {theme} = useSandpackTheme();
    const {sandpack} = useSandpack();
    const c = useClasser('sp');

    const csbIconClass = isDarkColor(theme.palette.defaultBackground)
        ? 'csb-icon-dark'
        : 'csb-icon-light';

    return (
        <a
            onClick={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                openInCondeSandboxTrigger && openInCondeSandboxTrigger(sandpack.files);
            }}
            className={c('button', 'icon-standalone', csbIconClass)}
            rel='noreferrer noopener'
            target='_blank'
            title='Open in CodeSandbox'
        >
            <CSBIcon />
        </a>
    );
};
