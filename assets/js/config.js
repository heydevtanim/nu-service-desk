/* ============================================================
   CONFIG: আপনার তথ্য শুধু এই ফাইলে বসান / Edit your details here only.
   ============================================================ */
window.CONFIG = {
  brand: "Tanim Computer & Digital Service Center",
  whatsapp: "",   // দেশ কোডসহ ডিজিটে, যেমন 8801XXXXXXXXX / digits with country code
  phone: "",      // যেমন 01XXXXXXXXX
  email: "",
  hours: { bn: "", en: "" },     // যেমন: শনি-বৃহস্পতি, সকাল ১০টা থেকে সন্ধ্যা ৬টা
  address: { bn: "", en: "" }
};

/* Official fees: NU Student Portal ও myGov.bd-তে নিজে যাচাই করার পর বসান।
   null থাকলে সাইটে "আবেদনের আগে নিশ্চিত করে জানানো হবে" দেখায়।
   Fill after verifying on the NU Student Portal and myGov.bd. null = "confirmed before you apply". */
window.FEES = {
  pm: null, main: null, transcript: null, duplicate: null,
  name: null, moi: null, verify: null, apostille: null
};
