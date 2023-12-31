import { navbar } from 'vuepress-theme-hope'

export const ruNavbar = navbar([
  '/ru/',
  {
    text: 'Управление',
    icon: 'gamepad',
    link: '/ru/mechanics/controls.md',
  },
  '/ru/mechanics/',
  {
    text: 'Предметы',
    icon: 'book',
    link: 'https://cdda-guide.nornagon.net/?v=0.G&lang=ru',
  },
])
