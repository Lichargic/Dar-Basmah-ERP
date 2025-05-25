const translations = {
  en: {
    title: "Dar Basmah Medical Center",
    bookNowBtn: "Book Now!",
    bookAppointmentTab: "Book Appointment",
    servicesTab: "Services",
    classesTab: "Classes",
    dentalCheckupTitle: "Need a Dental Check-up?",
    dentalCheckupDesc: "Experiencing tooth pain, gum issues, or just due for a routine check-up? Book a dental consultation today and keep your smile healthy.",
    medicalAssistanceTitle: "Need Medical Assistance?",
    medicalAssistanceDesc: "A fun, hands-on class where kids learn how to brush, floss, and care for their teeth to build lifelong healthy habits.",
    serviceDentalConsult: "Dental Consultation",
    serviceUnani: "Unani Herbal Consultation/Hijama Services",
    serviceLadyDentist: "Lady Dentist for Ladies and Children",
    serviceGP: "General Practitioner Physician",
    servicePediatrician: "Pediatrician",
    serviceGeneralDental: "General Dental Consultation",
    classTitle: "Oral Hygiene Class for Kids",
    classDesc: "Feeling unwell or have health concerns? Consult with a general practitioner for expert medical advice and personalized care.",
    aboutUsTitle: "About Us",
    aboutUsText: "At Dar Bashmah Medical Center, we are committed to providing compassionate and high-quality healthcare. Our team of experienced professionals ensures that every patient receives personalized and expert medical attention.",
    teamTitle: "Meet The Team",
    dentist: "Dentist",
    gp: "General Practitioner Physician",
    pediatrician: "Pediatrician",
    whyChooseUsTitle: "Why Choose Us?",
    why1Title: "Comprehensive Patient Care",
    why1Desc: "We provide personalized and high-quality medical services...",
    why2Title: "Experienced Specialists",
    why2Desc: "Our team includes highly qualified doctors in various medical fields.",
    why3Title: "Modern Equipment",
    why3Desc: "We use advanced technology to ensure accurate diagnosis and effective treatment.",
    why4Title: "Family-Friendly Atmosphere",
    why4Desc: "Our clinic is designed to be welcoming for patients of all ages.",
    why5Title: "Affordable Healthcare",
    why5Desc: "We believe in making quality care accessible and affordable.",
    why6Title: "Culturally Respectful",
    why6Desc: "We respect your values and provide care in a culturally sensitive way.",
    company: "Company",
    copyright: "© Dar Bashmah Medical Center. All Rights Reserved."
  },
  ar: {
    title: "مركز دار بسمة الطبي",
    bookNowBtn: "احجز الآن!",
    bookAppointmentTab: "احجز موعد",
    servicesTab: "الخدمات",
    classesTab: "الدروس",
    dentalCheckupTitle: "هل تحتاج إلى فحص أسنان؟",
    dentalCheckupDesc: "تعاني من ألم الأسنان أو مشاكل في اللثة أو تحتاج فقط إلى فحص روتيني؟ احجز استشارة أسنان اليوم للحفاظ على ابتسامتك.",
    medicalAssistanceTitle: "هل تحتاج إلى مساعدة طبية؟",
    medicalAssistanceDesc: "درس ممتع وتفاعلي حيث يتعلم الأطفال كيفية تنظيف الأسنان بالخيط والفرشاة لبناء عادات صحية دائمة.",
    serviceDentalConsult: "استشارة طب الأسنان",
    serviceUnani: "استشارة الأعشاب (يوناني)/خدمات الحجامة",
    serviceLadyDentist: "طبيبة أسنان للنساء والأطفال",
    serviceGP: "طبيب عام",
    servicePediatrician: "طبيب أطفال",
    serviceGeneralDental: "استشارة طب الأسنان العامة",
    classTitle: "درس العناية بالفم للأطفال",
    classDesc: "تشعر بالتوعك أو لديك مخاوف صحية؟ استشر طبيبًا عامًا للحصول على نصيحة طبية وخطة علاج مخصصة.",
    aboutUsTitle: "من نحن",
    aboutUsText: "في مركز دار بسمة الطبي، نحن ملتزمون بتقديم رعاية صحية عالية الجودة ومبنية على التعاطف. فريقنا من المهنيين المتمرسين يضمن حصول كل مريض على رعاية طبية شخصية وخبيرة.",
    teamTitle: "قابل الفريق",
    dentist: "طبيب أسنان",
    gp: "طبيب عام",
    pediatrician: "طبيب أطفال",
    whyChooseUsTitle: "لماذا نحن؟",
    why1Title: "رعاية شاملة للمرضى",
    why1Desc: "نحن نقدم خدمات طبية مخصصة وعالية الجودة...",
    why2Title: "أطباء متخصصون وذوو خبرة",
    why2Desc: "يضم فريقنا أطباء مؤهلين تأهيلاً عالياً في مختلف المجالات الطبية.",
    why3Title: "أجهزة حديثة",
    why3Desc: "نستخدم أحدث التقنيات لضمان تشخيص دقيق وعلاج فعال.",
    why4Title: "أجواء مناسبة للعائلة",
    why4Desc: "عيادتنا مصممة لتكون مريحة للمرضى من جميع الأعمار.",
    why5Title: "رعاية صحية ميسورة التكلفة",
    why5Desc: "نؤمن بجعل الرعاية الصحية الجيدة في متناول الجميع وبأسعار مناسبة.",
    why6Title: "احترام الثقافة والعادات",
    why6Desc: "نحترم قيمكم ونقدم رعاية تراعي العادات والثقافة.",
    company: "الشركة",
    copyright: "© مركز دار بسمة الطبي. جميع الحقوق محفوظة."
  }
};

const radios = document.querySelectorAll('input[name="translateLanguage"]');

radios.forEach(radio => {
  radio.addEventListener("change", () => {
    const lang = document.getElementById("arabic").checked ? "ar" : "en";
    updateLanguage(lang);
  });
});

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];
    if (translation) {
      if (el.children.length > 0) {
        el.childNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = translation;
          }
        });
      } else {
        el.textContent = translation;
      }
    }
  });

  document.documentElement.setAttribute("lang", lang);
}
