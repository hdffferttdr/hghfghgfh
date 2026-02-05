import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Star, 
  Gift, 
  Zap, 
  Target, 
  Medal,
  ArrowLeft,
  Crown
} from "lucide-react";

const rewardLevels = [
  {
    level: "برنزی",
    icon: Medal,
    points: "۰ - ۵۰۰",
    color: "from-amber-600 to-amber-700",
    benefits: ["تخفیف ۵٪ دوره‌ها", "دسترسی به محتوای ویژه"],
  },
  {
    level: "نقره‌ای",
    icon: Star,
    points: "۵۰۱ - ۱۵۰۰",
    color: "from-gray-400 to-gray-500",
    benefits: ["تخفیف ۱۰٪ دوره‌ها", "مشاوره رایگان", "هدیه تولد"],
  },
  {
    level: "طلایی",
    icon: Trophy,
    points: "۱۵۰۱ - ۳۰۰۰",
    color: "from-yellow-500 to-amber-500",
    benefits: ["تخفیف ۲۰٪ دوره‌ها", "دوره رایگان ماهانه", "اولویت ثبت‌نام"],
  },
  {
    level: "الماسی",
    icon: Crown,
    points: "۳۰۰۰+",
    color: "from-blue-400 to-purple-500",
    benefits: ["تخفیف ۳۰٪ دوره‌ها", "دسترسی VIP", "هدایای ویژه"],
  },
];

const earnMethods = [
  { icon: Target, text: "تکمیل دوره‌ها", points: "+۱۰۰" },
  { icon: Star, text: "امتیاز آزمون بالای ۹۰", points: "+۵۰" },
  { icon: Gift, text: "معرفی دوستان", points: "+۲۰۰" },
  { icon: Zap, text: "فعالیت روزانه", points: "+۱۰" },
];

export function RewardsSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge className="gradient-accent border-0 text-accent-foreground">
            <Trophy className="h-3 w-3 ml-1" />
            سیستم امتیازدهی
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            امتیاز بگیر، <span className="text-accent">جایزه</span> ببر!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            با فعالیت در آموزشگاه امتیاز کسب کنید و از تخفیف‌ها و جوایز ویژه بهره‌مند شوید
          </p>
        </div>

        {/* Reward Levels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewardLevels.map((reward, index) => (
            <Card 
              key={reward.level}
              className="border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${reward.color} p-6 text-center`}>
                  <reward.icon className="h-12 w-12 mx-auto mb-3 text-white" />
                  <h3 className="text-xl font-bold text-white">{reward.level}</h3>
                  <p className="text-white/80 text-sm mt-1">{reward.points} امتیاز</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {reward.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How to Earn */}
        <Card className="border-border/50 card-shadow overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Info Side */}
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  چطور امتیاز بگیریم؟
                </h3>
                <div className="space-y-4">
                  {earnMethods.map((method, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                          <method.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground">{method.text}</span>
                      </div>
                      <Badge variant="secondary" className="text-accent font-bold">
                        {method.points}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button className="gradient-accent border-0 text-accent-foreground gap-2 w-full md:w-auto">
                  مشاهده جوایز
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>

              {/* Visual Side */}
              <div className="gradient-primary p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center animate-float">
                    <Gift className="h-16 w-16" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">همین حالا شروع کن!</h4>
                  <p className="opacity-80 max-w-xs">
                    با ثبت‌نام رایگان ۱۰۰ امتیاز هدیه بگیرید
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
