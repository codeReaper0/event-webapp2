export interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  //   className?: React.ComponentProps<"div">["className"];
}

export interface HeaderProps {
  title: string;
  info: string;
  show?: boolean;
}

export interface EventProps {
  photoMobile: string;
  title: string;
  date: string;
  day: string;
  time: string;
  location: string;
}

export interface EventCardProps {
  bgColor: string;
  textColor?: string;
  btnColor?: string;
  comments?: boolean;
  img?: string;
}

export interface UserProfs {
  name: string;
  profilePhoto: string;
}
export interface EventData {
  created_at: string;
  created_by: string;
  event_description: string;
  event_end: Date;
  event_name: string;
  event_start: Date;
  id: number;
  image?: string;
  location: string;
  updated_at: string;
}
export interface TimelineCardProps {
  bg: string;
  imgSrc: any;
  name: string;
  date: string;
  time: string;
  stadium: string;
}

export interface cardItem {
  bg: string;
  imgSrc: any;
  name: string;
  events: number;
}

export interface MyPeopleProps {
  bgColor: string;
  imgSrc: string;
  name: string;
  events: number;
}
