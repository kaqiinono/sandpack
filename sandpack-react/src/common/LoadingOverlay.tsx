import {useClasser} from '@code-hike/classer';
import * as React from 'react';

import {useLoadingOverlayState} from '../hooks/useLoadingOverlayState';

import {OpenInCodeSandboxButton} from './OpenInCodeSandboxButton';
import type {SandpackFiles} from "../types";

export interface LoadingOverlayProps {
    clientId?: string;
    openInCondeSandboxTrigger?: (files: SandpackFiles) => void;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = (
    {
        clientId,
        openInCondeSandboxTrigger,
    }) => {
    const loadingOverlayState = useLoadingOverlayState(clientId);
    const c = useClasser('sp');

    if (loadingOverlayState === 'hidden') {
        return null;
    }

    if (loadingOverlayState === 'timeout') {
        return (
            <div className={c('overlay', 'error')}>
                <div className={c('error-message')}>
                    Unable to establish connection with the sandpack bundler. Make sure you are
                    online or try again later. If the problem persists, please report it via{' '}
                    <a
                        className={c('error-message')}
                        href='mailto:songmeinuo@jd.com?subject=Sandpack Timeout Error'
                    >
                        email
                    </a>{' '}
                    {/*or submit an issue on{' '}*/}
                    {/*<a*/}
                    {/*    className={c('error-message')}*/}
                    {/*    href='https://github.com/codesandbox/sandpack/issues'*/}
                    {/*    rel='noreferrer noopener'*/}
                    {/*    target='_blank'*/}
                    {/*>*/}
                    {/*    GitHub.*/}
                    {/*</a>*/}
                </div>
            </div>
        );
    }

    return (
        <div
            className={c('overlay', 'loading')}
            style={{
                opacity: loadingOverlayState === 'visible' ? 1 : 0,
                transition: 'opacity 0.5s ease-out',
            }}
        >
            <div className='sp-cube-wrapper' title='Open in CodeSandbox'>
                <OpenInCodeSandboxButton openInCondeSandboxTrigger={openInCondeSandboxTrigger} />
                <div className='sp-cube'>
                    <div className='sp-sides'>
                        <div className='sp-top' />
                        <div className='sp-right' />
                        <div className='sp-bottom' />
                        <div className='sp-left' />
                        <div className='sp-front' />
                        <div className='sp-back' />
                    </div>
                </div>
            </div>
        </div>
    );
};
