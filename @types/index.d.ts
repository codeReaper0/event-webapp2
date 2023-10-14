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
  creator: string,
  description: string,
  end_date: string,
  end_time: string,
  group: number,
  id: string,
  image: string,
  location: string,
  start_date: string,
  start_time: string,
  title: string,
}

export interface cardItem {
  bg: string;
  imgSrc: any;
  name: string;
  events: number;
}

export interface MyPeopleProps {
  id: number,
  bgColor: string;
  imgSrc: any;
  name: string;
  events: number;
}

type AuthContextType = {
  user: any;
  logout: () => void;
};

export interface Group {
  pk: number,
  admin: string,
  created_at: string,
  updated_at: string,
  image: string,
  group_name: string,
  friends: number[]
}

export type FormValues = {
  title: string;
  description: string;
  location: string;
  start_date: string;
  group: number;
  end_date: string;
  start_time: string;
  end_time: string;
  image: string | null;
}
