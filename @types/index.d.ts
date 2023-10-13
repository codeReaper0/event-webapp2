export interface MainLayoutProps {
  children?: React.ReactNode;
  title?: string;
  //   className?: React.ComponentProps<"div">["className"];
}

export interface HeaderProps {
  title: string;
  info: string;
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
  id: string;
  creator: string;
  title: string;
  description: string;
  location: string;
  start_date: Date;
  group: string;
  end_date: Date;
  start_time: string;
  end_time: string;
  image: string;
}
export interface TimelineCardProps {
  id: string;
  bg: string;
  image: string;
  event_name: string;
  event_end: string;
  event_start: string;
  date: string;
  time: string;
  stadium: string;
  updated_at: string;
  created_at: string;
  event_description: string;
  location: string;
  event_for: string;
  event_duration: string;
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
