function generics<T>(arg: T): T[] {
  return [arg];
}

generics('hellow');
generics(5);

function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}
