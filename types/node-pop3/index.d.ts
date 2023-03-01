// Type definitions for node-pop3 0.8
// Project: https://github.com/lianxh/node-pop3#readme
// Definitions by: yuumillar <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'node:stream';
import { type TlsOptions } from 'node:tls';

export type Pop3Options = {
    user: string;
    password: string;
    host: string;
    port?: number | undefined;
    servername?: string | undefined;
    tls?: boolean | undefined;
    timeout?: number | undefined;
    tlsOptions?: TlsOptions | undefined;
};

declare class Pop3Command {
    private user: string;

    private password: string;

    private host: string;

    private port?: number;

    private servername?: string;

    private tls: boolean | undefined;

    private timeout: number | undefined;

    private tlsOptions: TlsOptions | undefined;

    constructor(options: Pop3Options);
    connect(): Promise<void>;

    /* param example command("RETR", 1)  */
    command(...param: any): [string, Stream];
    UIDL(msgNum?: string | number): Promise<string[][]>;
    LIST(msgNum?: string | number): Promise<string[][]>;
    RETR(msgNum: string | number): Promise<string>;
    TOP(msgNum: number, line?: number): Promise<string>;
    QUIT(): Promise<string>;
    STAT(): Promise<string>;
    DELE(msgNum: string | number): Promise<string>;
    RSET(): Promise<string>;
    NOOP(): void;
}

export default Pop3Command;
