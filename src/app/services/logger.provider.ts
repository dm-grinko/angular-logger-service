import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { environment } from '../../environments/environment';

export let debugMode = environment.debugMode;

const noop = (): any => undefined;

@Injectable()
export class LoggerProvider implements Logger {

    get info() {
        if (debugMode) {
            return console.info.bind(console);
        } else {
            return noop;
        }
    }

    get warn() {
        if (debugMode) {
            return console.warn.bind(console);
        } else {
            return noop;
        }
    }

    get error() {
        if (debugMode) {
            return console.error.bind(console);
        } else {
            return noop;
        }
    }

    invokeConsoleMethod(type: string, args?: any): void {
        const logFn: Function = (console)[type] || console.log || noop;
        logFn.apply(console, [args]);
    }
}
