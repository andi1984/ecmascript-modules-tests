#! /usr/bin/env node

import { makePromise } from './dist/promise.js';
makePromise(() => {
        console.log('resolve callback');
        import ('./dist/foo.js').then((module) => {
                console.log(module.myDynamicEcho('Hello'));
        });
});
console.log('BAR');
