/* @flow */

import { TYPE } from './constants';

// eslint-disable-next-line flowtype/require-exact-type
export type Thenable = {
    then : (onSuccess? : (val? : mixed) => mixed, onError? : (err? : mixed) => mixed) => Thenable,
    catch : (onError? : (err? : mixed) => mixed) => Thenable
};

// eslint-disable-next-line flowtype/require-exact-type
export type NativeSerializedType<T : $Values<typeof TYPE>, V : mixed> = {
    __type__ : T,
    __val__ : V
};

export type CustomSerializedType<T : string, V : mixed> = {|
    __type__ : T,
    __val__ : V
|};
