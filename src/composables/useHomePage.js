import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import emailjs from "@emailjs/browser";
import Paintsandrollers from "@/assets/imgs/Paintsandrollerscanva.png";
import Bathroomfixtures from "@/assets/imgs/Bathroomfixturescanva.png";
import screwsandbolts from "@/assets/imgs/screwsandboltscanva.png";

const EMAILJS_SERVICE_ID = "service_5p5kt67";
const EMAILJS_TEMPLATE_ID = "template_24bcuwg";
const EMAILJS_PUBLIC_KEY = "xhIm1-XLs47f8fi-k";

export default function useHomePage() {
  const mobileMenuOpen = ref(false);
  const isNavElevated = ref(false);
  const showScrollTop = ref(false);
  const submitStatus = ref("idle");

  const navLinks = [
    { label: "عن المحل", href: "#about" },
    { label: "منتجاتنا", href: "#products" },
    { label: "المعرض", href: "#gallery" },
    { label: "لماذا نحن", href: "#why" },
    { label: "تواصل معنا", href: "#contact" },
  ];

  const heroStats = [
    { value: "+21", label: "سنة خبرة" },
    { value: "+1000", label: "عميل راض" },
    { value: "100%", label: "ضمان الجودة" },
  ];

  const showcaseProducts = [
    {
      icon: "mdi:palette-swatch",
      name: "بوهيا وطلاء",
      sub: "داخلي · خارجي · واجهات",
    },
    {
      icon: "mdi:shower-head",
      name: "أدوات صحية",
      sub: "مواسير · خلاطات · بالوعات",
    },
    {
      icon: "mdi:hammer-wrench",
      name: "مستلزمات بناء",
      sub: "مسامير · براغي · اكسسوار",
    },
  ];

  const aboutIconItems = [
    { icon: "mdi:factory", label: "هياكل معدنية" },
    { icon: "mdi:bolt", label: "تركيبات" },
    { icon: "mdi:format-paint", label: "بوهيا" },
    { icon: "mdi:shower-head", label: "صحي" },
    { icon: "mdi:package-variant-closed", label: "تنوع المنتجات" },
    { icon: "mdi:shield-check", label: "جودة مضمونة" },
  ];

  const aboutFeatures = [
    {
      icon: "mdi:warehouse",
      title: "تشكيلة متكاملة للبناء والتشطيب",
      description:
        "نوفر مجموعة واسعة من الحدايد والبويات والأدوات الصحية لتلبية احتياجات المنازل والمشاريع بمختلف أحجامها.",
    },
    {
      icon: "mdi:shield-check",
      title: "منتجات بجودة مضمونة",
      description:
        "نوفر أفضل أنواع الحدايد والبويات والأدوات الصحية من مصادر موثوقة لتضمن أفضل النتائج.",
    },
  ];

  const productCards = [
    {
      image: Paintsandrollers, // غير المسار للمسار الفعلي عندك
      tag: "PAINTS & COATINGS",
      title: "بوهيا وطلاء",
      description:
        "مجموعة واسعة من الدهانات والبوهيا للاستخدامات الداخلية والخارجية بألوان متنوعة ومواصفات عالية.",
      items: ["بوهيا داخلي", "بوهيا خارجي", "دهان معدني", "ورنيش", "برايمر"],
    },
    {
      image: Bathroomfixtures,
      tag: "PLUMBING",
      title: "أدوات صحية",
      description:
        "كل ما تحتاجه للأعمال الصحية من مواسير وخلاطات وبالوعات من أشهر الماركات المعتمدة.",
      items: ["مواسير PPR", "خلاطات", "بالوعات", "تركيبات", "عدادات"],
    },
    {
      image: screwsandbolts,
      tag: "FASTENERS",
      title: "براغي ومسامير",
      description:
        "تشكيلة ضخمة من عناصر التثبيت والربط للاستخدامات الإنشائية والمنزلية بجميع الأحجام.",
      items: ["براغي إنشائية", "مسامير", "صواميل", "دبابيس"],
    },
  ];
  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop", // صورة مستودع ومخزن منظم
      label: "المستودع الرئيسي",
      overlay: "مخزون ضخم لتلبية كافة الطلبات والجملة",
      gridClass: "tall-card",
    },
    {
      image:
        "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&auto=format&fit=crop",
      label: "قسم البويات والدهانات",
      overlay: "أحدث الدهانات والألوان من أفضل العلامات التجارية",
      gridClass: "tall-card",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop", // صورة أدوات صحية وخلاطات شغال 100%
      label: "قسم الأدوات الصحية",
      overlay: "مواسير، خلاطات، ومستلزمات سباكة متكاملة",
      gridClass: "short-card",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&auto=format&fit=crop", // صورة مسامير وحدايد بدقة عالية شغال 100%
      label: "قسم الحدايد والبراغي",
      overlay: "جميع أنواع المسامير، الكوالين، وأدوات التثبيت",
      gridClass: "short-card",
    },
  ];

  const whyUsCards = [
    {
      icon: "mdi:trophy",
      title: "جودة مضمونة ١٠٠٪",
      description:
        "كل منتجاتنا مفحوصة وتستوفي المواصفات القياسية المحلية والدولية.",
    },
    {
      icon: "mdi:cash-multiple",
      title: "أسعار تنافسية",
      description:
        "نشتري بكميات كبيرة مباشرة من المصانع لنمنحك أفضل سعر في السوق.",
    },
    {
      icon: "mdi:account-tie",
      title: "فريق متخصص",
      description:
        "خبراؤنا يساعدونك في اختيار المنتج الأنسب لمشروعك بكل احترافية.",
    },
  ];

  const trustItems = [
    "أكثر من 21 عاما من الخبرة الموثوقة",
    "خصومات خاصة للمقاولين وأصحاب المشاريع",
    "+1000 عميل سعيد في منطقتنا",
    "استشارات مجانية قبل الشراء",
  ];

  const contactCards = [
    { icon: "mdi:map-marker", label: "العنوان", value: "المنصوره — شربين" },
    {
      icon: "mdi:phone",
      label: "الهاتف",
      value: "+20 10 30873968",
      dir: "ltr",
    },
    {
      icon: "mdi:whatsapp",
      label: "واتساب",
      value: "+20 10 30873968",
      dir: "ltr",
    },
    {
      icon: "mdi:clock-time-four",
      label: "ساعات العمل",
      value: "السبت — الخميس: 9 ص — 11 م",
    },
  ];

  const whatsAppLink = computed(() => {
    const whatsappCard = contactCards.find(
      (card) =>
        card.icon === "mdi:whatsapp" ||
        card.label.toLowerCase().includes("واتساب"),
    );

    if (!whatsappCard) return "#";

    const phoneValue = whatsappCard.value.replace(/\D/g, "");

    return `https://wa.me/${phoneValue}`;
  });

  const socialMedia = [
    {
      icon: "mdi:facebook",
      href: "https://www.facebook.com/share/18ohywNYkN/",
    },
  ];

  const footerLinks = [
    {
      title: "روابط سريعة",
      items: [
        { label: "الرئيسية", href: "#home" },
        { label: "من نحن", href: "#about" },
        { label: "منتجاتنا", href: "#products" },
        { label: "المعرض", href: "#gallery" },
        { label: "تواصل معنا", href: "#contact" },
      ],
    },
    {
      title: "منتجاتنا",
      items: [
        { label: "بوهيا وطلاء", href: "#products" },
        { label: "أدوات صحية", href: "#products" },
        { label: "براغي ومسامير", href: "#products" },
        { label: "مستلزمات بناء", href: "#products" },
      ],
    },
    {
      title: "تواصل معنا",
      items: [
        { label: "المنصوره - شربين", href: "#" },
        { label: "+20 10 30873968", href: "#" },
        { label: "واتساب متاح", href: "#" },
        { label: "السبت — الخميس: 9 ص — 11 م", href: "#" },
      ],
    },
  ];

  const submitBtnText = computed(() => {
    if (submitStatus.value === "submitting") return "جاري الإرسال...";
    if (submitStatus.value === "success") return "✓ تم الإرسال بنجاح!";
    return "إرسال الطلب";
  });

  const isSubmitDisabled = computed(() => submitStatus.value !== "idle");

  const toggleMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };

  const closeMenu = () => {
    mobileMenuOpen.value = false;
  };

  const scrollToSection = (hash) => {
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
    mobileMenuOpen.value = false;
  };

  const submitForm = async (formData) => {
    if (submitStatus.value !== "idle") return;
    submitStatus.value = "submitting";

    const sentAt = new Date();
    const submittedAt = sentAt.toLocaleString("ar-EG", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const templateParams = {
      name: formData.name || "زبون",
      phone: formData.phone || "غير مسجل",
      request_type: formData.requestType || "غير محدد",
      message: formData.message || "",
      submitted_at: submittedAt,
      sent_at: submittedAt,
      time: submittedAt,
      submission_time: submittedAt,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      submitStatus.value = "success";
    } catch (error) {
      console.error("EmailJS error:", error);
      submitStatus.value = "idle";
      alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى لاحقاً.");
      return;
    }

    setTimeout(() => {
      submitStatus.value = "idle";
    }, 2500);
  };

  const handleScroll = () => {
    const position = window.scrollY;
    isNavElevated.value = position > 50;
    showScrollTop.value = position > 360;
  };

  onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    navLinks,
    heroStats,
    showcaseProducts,
    aboutIconItems,
    aboutFeatures,
    productCards,
    galleryItems,
    whyUsCards,
    trustItems,
    contactCards,
    socialMedia,
    footerLinks,
    mobileMenuOpen,
    toggleMenu,
    closeMenu,
    isNavElevated,
    showScrollTop,
    submitBtnText,
    isSubmitDisabled,
    submitForm,
    scrollToSection,
    whatsAppLink,
  };
}
