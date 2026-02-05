import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Clock,
  ArrowLeft
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "تماس تلفنی",
    value: "۰۵۱-۴۴۲۲۳۳۴۴",
    subValue: "۰۹۱۵-۱۲۳۴۵۶۷",
    action: "تماس",
    color: "primary",
  },
  {
    icon: MessageCircle,
    title: "تلگرام",
    value: "@SabzevarAcademy",
    subValue: "پاسخگویی ۲۴ ساعته",
    action: "پیام",
    color: "secondary",
  },
  {
    icon: Instagram,
    title: "اینستاگرام",
    value: "@sabzevar.academy",
    subValue: "آخرین اخبار و آموزش‌ها",
    action: "دنبال کردن",
    color: "accent",
  },
];

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 gradient-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              سوالی دارید؟
              <span className="block text-accent mt-2">با ما در تماس باشید</span>
            </h2>
            <p className="text-lg opacity-90 max-w-lg leading-relaxed">
              تیم پشتیبانی ما آماده پاسخگویی به سوالات شما درباره دوره‌ها، 
              ثبت‌نام و مشاوره تحصیلی است
            </p>

            {/* Location & Hours */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">آدرس آموزشگاه</p>
                  <p className="opacity-80">سبزوار، خیابان اسرار، نبش کوچه ۱۲، پلاک ۴۵</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">ساعات کاری</p>
                  <p className="opacity-80">شنبه تا چهارشنبه: ۸ صبح تا ۸ شب | پنجشنبه: ۸ صبح تا ۲ بعدازظهر</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 gap-2"
            >
              مشاوره رایگان
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-4">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur hover:bg-white/20 transition-colors"
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      method.color === "primary" ? "bg-white/20" :
                      method.color === "secondary" ? "gradient-secondary" :
                      "gradient-accent"
                    }`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-80">{method.title}</p>
                      <p className="font-semibold text-lg">{method.value}</p>
                      <p className="text-xs opacity-70">{method.subValue}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/20"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
