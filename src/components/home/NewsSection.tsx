import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock, User } from "lucide-react";

const news = [
  {
    id: 1,
    title: "شروع ثبت‌نام ترم بهار ۱۴۰۴",
    excerpt: "ثبت‌نام دوره‌های برنامه‌نویسی و طراحی وب با تخفیف ویژه آغاز شد...",
    date: "۱۵ بهمن ۱۴۰۳",
    category: "اخبار",
    readTime: "۳ دقیقه",
    author: "تیم آموزشگاه",
    image: "📢",
  },
  {
    id: 2,
    title: "برگزاری مسابقه برنامه‌نویسی",
    excerpt: "مسابقه کدنویسی با جوایز ویژه برای دانشجویان آموزشگاه برگزار می‌شود...",
    date: "۱۰ بهمن ۱۴۰۳",
    category: "رویداد",
    readTime: "۵ دقیقه",
    author: "مدیریت",
    image: "🏆",
  },
  {
    id: 3,
    title: "اضافه شدن دوره هوش مصنوعی",
    excerpt: "دوره جامع هوش مصنوعی و یادگیری ماشین به لیست دوره‌ها اضافه شد...",
    date: "۵ بهمن ۱۴۰۳",
    category: "دوره جدید",
    readTime: "۴ دقیقه",
    author: "تیم آموزشی",
    image: "🤖",
  },
];

export function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-4">
            <Badge variant="outline">
              <Calendar className="h-3 w-3 ml-1" />
              آخرین اخبار
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              اخبار و <span className="text-gradient-primary">رویدادها</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              از آخرین اخبار، رویدادها و دوره‌های جدید آموزشگاه باخبر شوید
            </p>
          </div>
          <Button variant="outline" className="gap-2 shrink-0">
            همه اخبار
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card 
              key={item.id}
              className={`group border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className={`bg-muted flex items-center justify-center ${
                  index === 0 ? "aspect-[16/9] md:aspect-[2/1]" : "aspect-video"
                }`}>
                  <span className={`${index === 0 ? "text-8xl" : "text-5xl"} group-hover:scale-110 transition-transform`}>
                    {item.image}
                  </span>
                </div>

                {/* Content */}
                <div className={`p-6 space-y-4 ${index === 0 ? "md:p-8" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="secondary"
                      className={
                        item.category === "اخبار" ? "text-primary" :
                        item.category === "رویداد" ? "text-accent" :
                        "text-secondary"
                      }
                    >
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors ${
                    index === 0 ? "text-2xl" : "text-lg"
                  }`}>
                    {item.title}
                  </h3>

                  <p className={`text-muted-foreground ${
                    index === 0 ? "text-base" : "text-sm line-clamp-2"
                  }`}>
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {item.author}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
