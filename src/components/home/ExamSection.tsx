import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  ArrowLeft, 
  Brain,
  BarChart3,
  Award
} from "lucide-react";

const examCategories = [
  {
    id: 1,
    title: "آزمون پایتون",
    questions: 30,
    duration: "۴۵ دقیقه",
    difficulty: "متوسط",
    participants: "۳۲۵",
    icon: "🐍",
  },
  {
    id: 2,
    title: "آزمون جاوااسکریپت",
    questions: 25,
    duration: "۳۵ دقیقه",
    difficulty: "مبتدی",
    participants: "۲۸۰",
    icon: "⚡",
  },
  {
    id: 3,
    title: "آزمون HTML/CSS",
    questions: 40,
    duration: "۵۰ دقیقه",
    difficulty: "مبتدی",
    participants: "۴۵۰",
    icon: "🎨",
  },
  {
    id: 4,
    title: "آزمون الگوریتم",
    questions: 20,
    duration: "۶۰ دقیقه",
    difficulty: "پیشرفته",
    participants: "۱۲۰",
    icon: "🧩",
  },
];

const features = [
  {
    icon: Brain,
    title: "سوالات استاندارد",
    description: "بر اساس سرفصل‌های به‌روز"
  },
  {
    icon: BarChart3,
    title: "تحلیل نتایج",
    description: "کارنامه کامل و آنالیز"
  },
  {
    icon: Award,
    title: "کسب امتیاز",
    description: "جایزه برای نمرات بالا"
  },
];

export function ExamSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="outline" className="border-primary text-primary">
            <FileText className="h-3 w-3 ml-1" />
            آزمون آنلاین
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            سطح خود را <span className="text-gradient-primary">بسنجید</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با شرکت در آزمون‌های آنلاین، سطح دانش خود را بسنجید و امتیاز کسب کنید
          </p>
        </div>

        {/* Features Row */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 card-shadow"
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exam Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {examCategories.map((exam) => (
            <Card 
              key={exam.id}
              className="group border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {exam.icon}
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {exam.title}
                  </h3>
                  <Badge 
                    variant="secondary" 
                    className={`mt-2 ${
                      exam.difficulty === "مبتدی" ? "text-secondary" :
                      exam.difficulty === "متوسط" ? "text-accent" :
                      "text-primary"
                    }`}
                  >
                    {exam.difficulty}
                  </Badge>
                </div>

                {/* Stats */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      {exam.questions} سوال
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {exam.duration}
                    </span>
                  </div>
                  <p className="text-xs">
                    {exam.participants} نفر شرکت کرده‌اند
                  </p>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full gradient-primary border-0 gap-2 group-hover:gap-3 transition-all"
                >
                  شروع آزمون
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="gap-2">
            مشاهده همه آزمون‌ها
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
