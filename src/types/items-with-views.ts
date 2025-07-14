export type VideoItemWithViews = {
  type: `video`
  url: string
  views: number
}

export type ArticleItem = {
  type: `article`
  title: string
  views: number
}
