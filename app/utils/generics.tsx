function generics<T>(arg: T): T[] {
  return [arg];
}

generics('hellow');
generics(5);
