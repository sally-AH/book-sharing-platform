import {FavoriteBorder, Public, PersonOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"
import MoodIcon from '@mui/icons-material/Mood'

const home = [
  {
    hello: "HELLO THERE",
    welcom: "WELCOME TO INK HUB",
    share: "SHARE YOUR BOOKS",
    desc: "In Ink Hub, you can share your favorite books and get some suggestions from your friends",
  },
]

export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]

export const project = [
  {
    id: 1,
    icon: <MoodIcon />,
    num: "89",
    title: "HAPPY USERS",
  },
  {
    id: 2,
    icon: <Public />,
    num: "231",
    title: "BOOKS SHARED",
  },
  {
    id: 3,
    icon: <FavoriteBorder />,
    num: "108",
    title: "SUGGESTIONS LIKED",
  },
]
export default home

