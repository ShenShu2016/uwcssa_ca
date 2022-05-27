/*
 * @Author: Shen Shu
 * @Date: 2022-05-19 17:44:58
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-27 13:09:30
 * @FilePath: /uwcssa_ca/src/components/Avatar/AvatarFunction.tsx
 * @Description:
 *
 */
export function stringToColorAvatar(string: string) {
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

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColorAvatar(name.toLocaleUpperCase()),
    },
    children: `${name.slice(0, 1)}`,
  };
}
