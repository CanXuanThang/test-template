interface MenuItem {
  title: string;
  path: string;
  isReload?: boolean;
}

interface TMenu extends MenuItem {
  menuItem?: MenuItem[];
}

export const MENU: TMenu[] = [
  {
    title: "Trang chủ",
    path: "/",
    isReload: true
  },
  {
    title: "Tiện ích",
    path: "/",
    menuItem: [
      {
        title: "Câu hỏi thường gặp",
        path: "/questions",
      },
      {
        title: "Phương thức thanh toán",
        path: "/payment-options",
      },
    ],
  },
  {
    title: "Tin tức",
    path: "/news",
  },
  {
    title: "Giới thiệu",
    path: "/introduce",
  },
  {
    title: "Liên hệ",
    path: "/contact",
  },
];
