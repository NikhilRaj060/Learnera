import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    redirectTo: "/profile"
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    redirectTo: "/profile/edit"
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    redirectTo: "/inbox"
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    redirectTo: "/contact"
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

// profile navListMenuItems component
const navListMenuItems = [
    {
      title: "Courses",
      description: "Find the perfect solution for your needs.",
      icon: SquaresPlusIcon,
      redirectTo: "/courses/overview"
    },
    {
      title: "About Us",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
      redirectTo: "/about"
    },
    {
      title: "Blog",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
      redirectTo: "/blog"
    },
    {
      title: "My courses",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
      redirectTo: "/mycourses",
    },
    {
      title: "Carrers",
      description: "Reach out to us for assistance or inquiries",
      icon: GlobeAmericasIcon,
      redirectTo: "/carrers"
    },
    {
      title: "Contact",
      description: "Find the perfect solution for your needs.",
      icon: PhoneIcon,
      redirectTo: "/contact"
    },
    {
      title: "Special Offers",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
    },
  ];

export { profileMenuItems , navListMenuItems }