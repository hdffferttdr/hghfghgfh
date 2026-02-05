import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle,
  ExternalLink
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">آموزشگاه سبزوار</span>
                <span className="text-xs opacity-70">کامپیوتر و برنامه‌نویسی</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              مرکز تخصصی آموزش کامپیوتر و برنامه‌نویسی در سبزوار با بیش از ۱۰ سال تجربه در آموزش حرفه‌ای
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              {[
                { title: "دوره‌های حضوری", href: "/courses/onsite" },
                { title: "مینی دوره‌های رایگان", href: "/courses/online" },
                { title: "آزمون آنلاین", href: "/exams" },
                { title: "سیستم امتیازدهی", href: "/rewards" },
                { title: "سوالات متداول", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 text-primary" />
                <span>۰۵۱-۴۴۲۲۳۳۴۴</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 text-secondary" />
                <span>۰۹۱۵-۱۲۳۴۵۶۷</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@sabzevar-academy.ir</span>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>سبزوار، خیابان اسرار، پلاک ۱۲۳</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-background/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm opacity-70">
              ما را در اینستاگرام دنبال کنید و از آخرین اخبار و تخفیف‌ها باخبر شوید
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © ۱۴۰۳ آموزشگاه کامپیوتر سبزوار. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6 text-sm opacity-60">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">
              حریم خصوصی
            </Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">
              قوانین و مقررات
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
