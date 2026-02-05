import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Users, BookOpen, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-primary py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container relative px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              ثبت‌نام ترم جدید آغاز شد!
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              آینده‌ات را با
              <span className="block text-accent">برنامه‌نویسی</span>
              بساز!
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
              در آموزشگاه تخصصی کامپیوتر سبزوار، با اساتید مجرب و دوره‌های به‌روز، 
              مهارت‌های حرفه‌ای کسب کنید
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-background text-primary hover:bg-background/90 gap-2 font-semibold"
              >
                مشاهده دوره‌ها
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              >
                <Play className="h-4 w-4" />
                ویدیو معرفی
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/20 backdrop-blur">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">۵۰۰۰+</p>
                  <p className="text-sm opacity-80">دانشجو</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/20 backdrop-blur">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">۵۰+</p>
                  <p className="text-sm opacity-80">دوره آموزشی</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background/20 backdrop-blur">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">۱۰+</p>
                  <p className="text-sm opacity-80">سال تجربه</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden card-shadow">
              <div className="aspect-[4/3] bg-background/10 backdrop-blur flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary-foreground" />
                  </div>
                  <p className="text-primary-foreground/80 text-lg">
                    آموزش حرفه‌ای برنامه‌نویسی
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-2xl animate-float flex items-center justify-center card-shadow">
              <span className="text-3xl">🎯</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-secondary rounded-2xl animate-float flex items-center justify-center card-shadow" style={{ animationDelay: "2s" }}>
              <span className="text-2xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
