function siblings(element, cb) {
  if (!(element instanceof HTMLElement))
    throw new Error('element must be an html element');
  let current = element.previousElementSibling;
  while (current) {
    cb(current);
    current = current.previousElementSibling;
  }
  current = element.nextElementSibling;
  while (current) {
    cb(current);
    current = current.nextElementSibling;
  }
}
