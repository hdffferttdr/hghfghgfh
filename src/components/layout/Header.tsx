import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  GraduationCap, 
  Home, 
  BookOpen, 
  Monitor, 
  FileText, 
  Users, 
  HelpCircle, 
  Phone, 
  LogIn 
} from "lucide-react";

const menuItems = [
  { title: "صفحه اصلی", href: "/", icon: Home },
  { title: "دوره‌های حضوری", href: "/courses/onsite", icon: BookOpen },
  { title: "دوره‌های آنلاین", href: "/courses/online", icon: Monitor },
  { title: "آزمون آنلاین", href: "/exams", icon: FileText },
  { title: "درباره ما", href: "/about", icon: Users },
  { title: "سوالات متداول", href: "/faq", icon: HelpCircle },
  { title: "تماس با ما", href: "/contact", icon: Phone },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="gradient-primary flex h-10 w-10 items-center justify-center rounded-xl">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">آموزشگاه سبزوار</span>
            <span className="text-xs text-muted-foreground">کامپیوتر و برنامه‌نویسی</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            ورود
          </Button>
          <Button size="sm" className="gradient-primary border-0">
            ثبت‌نام رایگان
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border animate-slide-up">
          <nav className="container flex flex-col gap-1 p-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              <Button variant="outline" className="gap-2 justify-center">
                <LogIn className="h-4 w-4" />
                ورود
              </Button>
              <Button className="gradient-primary border-0 justify-center">
                ثبت‌نام رایگان
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
