
import { Component } from '@angular/core';
import { Articles } from '../../interface/articles';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {



  articlesList : Articles[] =[
    {
      "title": "إتقان تصوير الساعة الذهبية: دليل شامل",
      "excerpt": "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.",
      "category": "إضاءة",
      "name": "سالم أحمد",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      "role": "مصور محترف",
      "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&h=400&fit=crop",
      "date": "2026-01-15",
      "readTime": "8 دقائق للقراءة",
    },
    {
      "title": "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      "excerpt": "اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.",
      "category": "بورتريه",
      "name": "محمد علي",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      "role": "مصور بورتريه",
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      "date": "2026-01-12",
      "readTime": "6 دقائق للقراءة",
    },
    {
      "title": "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      "excerpt": "استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.",
      "category": "مناظر طبيعية",
      "name": "إبراهيم حسن",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      "role": "مصور طبيعة",
      "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop",
      "date": "2026-01-10",
      "readTime": "10 دقائق للقراءة",
    },
    {
      "title": "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
      "excerpt": "افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.",
      "category": "تقنيات",
      "name": "داود خالد",
      "avatar": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      "role": "مدرب تصوير",
      "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop",
      "date": "2026-01-08",
      "readTime": "7 دقائق للقراءة",
    },
    {
      "title": "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
      "excerpt": "تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.",
      "category": "تقنيات",
        "name": "ليث محمود",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
        "role": "فنان بصري",
      "image": "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=400&fit=crop",
      "date": "2026-01-05",
      "readTime": "9 دقائق للقراءة",
    },
    {
      "title": "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
      "excerpt": "اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.",
      "category": "معدات",
      "name": "جمال عبدالله",
      "avatar": "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
      "role": "مصور ومراجع تقني",
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      "date": "2026-01-03",
      "readTime": "8 دقائق للقراءة",
    },
  ]


}
