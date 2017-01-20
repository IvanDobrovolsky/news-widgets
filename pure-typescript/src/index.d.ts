//Reference to the typings definitions
/// <reference path="../typings/globals/es6-promise/index.d.ts" />

declare interface Post {
    id: number | string;
    title: string;
    img: string;
    description: string;
    link: string;
    date: Date;
}

declare type Response = any;

declare type PostFromResponse = any;

declare interface IApiService <T> {
    getData(): Promise<T[]>;
}
