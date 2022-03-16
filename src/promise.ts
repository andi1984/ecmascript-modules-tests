import { setTimeout } from 'timers';

export const makePromise = (onResolve: Function) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve('done');
            onResolve();
    }, 2000);
  });
};
