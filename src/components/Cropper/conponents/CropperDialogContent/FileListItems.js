export function FileListItems(files) {
  const b = new ClipboardEvent("").clipboardData || new DataTransfer();
  for (let i = 0, len = files.length; i < len; i++) b.items.add(files[i]);
  return b.files;
}
