import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Eye, ArrowLeft, Gift } from "lucide-react";

const miniCourses = [
  {
    id: 1,
    title: "آشنایی با برنامه‌نویسی",
    description: "اولین قدم برای ورود به دنیای کدنویسی",
    duration: "۳۰ دقیقه",
    views: "۲.۵K",
    lessons: 5,
    image: "🚀",
  },
  {
    id: 2,
    title: "مبانی HTML و CSS",
    description: "شروع طراحی وب با زبان‌های پایه",
    duration: "۴۵ دقیقه",
    views: "۱.۸K",
    lessons: 8,
    image: "🎨",
  },
  {
    id: 3,
    title: "Git برای مبتدیان",
    description: "مدیریت نسخه و کار تیمی",
    duration: "۲۵ دقیقه",
    views: "۱.۲K",
    lessons: 4,
    image: "📂",
  },
  {
    id: 4,
    title: "اصول الگوریتم",
    description: "تفکر الگوریتمی و حل مسئله",
    duration: "۴۰ دقیقه",
    views: "۹۵۰",
    lessons: 6,
    image: "🧩",
  },
];

export function FreeMiniCourses() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="gradient-secondary border-0 text-secondary-foreground">
            <Gift className="h-3 w-3 ml-1" />
            کاملاً رایگان
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            مینی دوره‌های <span className="text-gradient-secondary">آنلاین رایگان</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با مینی دوره‌های رایگان ما، مقدمات برنامه‌نویسی را یاد بگیرید و استعدادتان را کشف کنید
          </p>
        </div>

        {/* Mini Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {miniCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Course Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {course.image}
                  </span>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Play className="h-5 w-5 text-secondary-foreground fill-current mr-[-2px]" />
                    </div>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-secondary/90 text-secondary-foreground border-0">
                    رایگان
                  </Badge>
                </div>

                {/* Course Info */}
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {course.views}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {course.lessons} درس
                    </span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="gap-1 text-secondary hover:text-secondary hover:bg-secondary/10"
                    >
                      شروع یادگیری
                      <ArrowLeft className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button size="lg" className="gradient-secondary border-0 gap-2">
            مشاهده همه مینی دوره‌ها
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
