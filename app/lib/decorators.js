export function bind(target, propertyKey) {
  const fn = target[propertyKey];
  if (typeof fn !== 'function') {
    throw new TypeError(
      `Only methods can be decorated with @bind. <${propertyKey}> is not a method!`,
    );
  }

  return {
    configurable: true,
    get() {
      const bound = fn.bind(this);
      Object.defineProperty(this, propertyKey, {
        value: bound,
        configurable: true,
        writable: true,
      });
      return bound;
    },
  };
}

// побочный эфект - биндит this
// eslint-disable-next-line camelcase
export function no_multicall(target, propertyKey, descriptor) {
  const fn = descriptor.value;
  if (typeof fn !== 'function') {
    throw new TypeError(
      `Only methods can be decorated with @bind. <${propertyKey}> is not a method!`,
    );
  }
  return {
    configurable: true,
    get() {
      const wrappedFn = async () => {
        const loadingKey = `isBusy___${propertyKey}`;
        if (!this[loadingKey]) {
          this[loadingKey] = true;
          await fn.bind(this)();
          this[loadingKey] = false;
        }
      };
      Object.defineProperty(this, propertyKey, {
        value: wrappedFn,
        configurable: true,
        writable: true,
      });
      return wrappedFn;
    },
  };
}
