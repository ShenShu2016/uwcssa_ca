/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-01 15:44:37
 * @FilePath: /uwcssa_ca/src/components/Avatar/AvatarFunction.tsx
 * @Description:
 *
 */
function stringToColorAvatar(string: string) {
  let hash = 0;
  let i: number;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

const getInitialsAvatar = (name = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function stringAvatar(name: string, sx: any = undefined) {
  return {
    sx: { ...sx, bgcolor: stringToColorAvatar(name) },
    children: `${getInitialsAvatar(name)}`,
  };
}
