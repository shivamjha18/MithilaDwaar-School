import Toppers from './Toppers'
import NewsAnnouncements from './NewsAnnouncements'

export default function ChampionsAndNews() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
        <Toppers />
        <NewsAnnouncements />
      </div>
    </section>
  )
}
