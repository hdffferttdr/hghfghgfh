import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowLeft, Play } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "دوره جامع پایتون",
    description: "از مقدماتی تا پیشرفته - یادگیری ماشین و هوش مصنوعی",
    image: "🐍",
    duration: "۶۰ ساعت",
    students: "۱۲۰",
    rating: "۴.۸",
    price: "۲,۵۰۰,۰۰۰",
    isPopular: true,
    type: "حضوری",
  },
  {
    id: 2,
    title: "طراحی وب مدرن",
    description: "HTML، CSS، JavaScript و React - ساخت وبسایت‌های حرفه‌ای",
    image: "🌐",
    duration: "۴۵ ساعت",
    students: "۸۵",
    rating: "۴.۹",
    price: "۱,۸۰۰,۰۰۰",
    isPopular: false,
    type: "حضوری",
  },
  {
    id: 3,
    title: "برنامه‌نویسی اندروید",
    description: "ساخت اپلیکیشن موبایل با Kotlin و Android Studio",
    image: "📱",
    duration: "۵۰ ساعت",
    students: "۶۵",
    rating: "۴.۷",
    price: "۲,۲۰۰,۰۰۰",
    isPopular: true,
    type: "حضوری",
  },
  {
    id: 4,
    title: "ICDL پیشرفته",
    description: "مهارت‌های کامپیوتری استاندارد بین‌المللی",
    image: "💼",
    duration: "۴۰ ساعت",
    students: "۲۰۰",
    rating: "۴.۶",
    price: "۱,۲۰۰,۰۰۰",
    isPopular: false,
    type: "حضوری",
  },
];

export function CoursesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="mb-2">
            دوره‌های حضوری
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            دوره‌های <span className="text-gradient-primary">آموزشی</span> ما
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با شرکت در دوره‌های حضوری ما، مهارت‌های لازم برای ورود به بازار کار را کسب کنید
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="group relative overflow-hidden border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.isPopular && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-accent text-accent-foreground border-0">
                    پرطرفدار
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-0">
                {/* Course Image */}
                <div className="aspect-video bg-muted flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                  {course.image}
                </div>
                
                {/* Course Info */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {course.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-accent">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-primary">
                    {course.price}
                  </span>
                  <span className="text-sm text-muted-foreground mr-1">تومان</span>
                </div>
                <Button size="sm" className="gradient-primary border-0 gap-1">
                  ثبت‌نام
                  <ArrowLeft className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2">
            مشاهده همه دوره‌ها
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
