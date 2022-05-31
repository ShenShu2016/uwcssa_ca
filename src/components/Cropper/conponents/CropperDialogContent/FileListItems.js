export function FileListItems(files) {
  var b = new ClipboardEvent('').clipboardData || new DataTransfer();
  for (var i = 0, len = files.length; i < len; i++) b.items.add(files[i]);
  return b.files;
}
