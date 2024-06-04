import { Provider, Scope } from '@nestjs/common';

export const factoryProvider = (options: {
  provide: string | symbol;
  useFactory: (...args: any[]) => any;
  inject: any[];
  scope?: Scope;
}): Provider => {
  return {
    provide: options.provide,
    useFactory: options.useFactory,
    inject: options.inject,
    scope: options.scope || Scope.TRANSIENT,
  };
};
