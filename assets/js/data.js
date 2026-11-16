/* Content data. Every visible string is a {bn, en} pair. Add a service by adding one object. */
(function () {
  "use strict";
  function P(bn, en) { return { bn: bn, en: en }; }

  var services = [
    {
      id: "pm", cat: "collect", icon: "file", mode: "online", visit: "collect",
      name: P("সাময়িক সনদ ও নম্বরপত্র", "Provisional Certificate & Marksheet"),
      term: "Provisional Certificate & Marksheet",
      summary: P("কোর্স শেষে কলেজ থেকে পাওয়া সাময়িক সনদ ও নম্বরপত্র। দেশের কিছু কাজে চলে, Main Certificate ও Transcript-এর আগের ধাপ।",
        "The provisional certificate and marksheet issued through your college after your course. They work for some uses in Bangladesh and are the step before the Main Certificate and Transcript."),
      docs: [
        { t: P("Registration Card", "Registration Card") },
        { t: P("Final Year Admit Card", "Final Year Admit Card") },
        { t: P("Online Result Sheet (Consolidated)", "Online Result Sheet (Consolidated)") },
        { t: P("অধ্যক্ষের সুপারিশসহ আবেদনপত্র", "Application with the principal's recommendation"), s: P("কলেজ থেকে সত্যায়িত", "Attested by the college") }
      ],
      steps: [
        P("আবেদন ফর্ম পূরণ করে কলেজ থেকে অধ্যক্ষের সত্যায়ন", "Fill in the application form and get it attested by the college principal"),
        P("কাগজ স্ক্যান করে PDF, প্রতিটি ২ MB-র নিচে", "Scan the documents to PDF, each under 2 MB"),
        P("NU Student Portal-এ account খুলে Provisional আবেদন", "Create an account on the NU Student Portal and apply for the Provisional"),
        P("Fee জমা", "Pay the fee"),
        P("Status Printed হলে NU মেইন ক্যাম্পাস, গাজীপুর থেকে সংগ্রহ", "Collect it from the NU main campus in Gazipur once the status shows Printed")
      ],
      notes: [
        P("শেষ বর্ষ পাসের পরও আগের কোনো বর্ষে fail থাকলে সাধারণত Provisional কলেজে আসে না।", "If you passed the final year but failed an earlier year, the Provisional is usually not sent to the college."),
        P("পুরনো ব্যাচ বা হাতে লেখা সনদে বেশি সময় লাগতে পারে।", "Older batches or handwritten certificates can take longer.")
      ]
    },
    {
      id: "main", cat: "collect", icon: "award", mode: "online", visit: "collect",
      name: P("মূল সনদ (Main Certificate)", "Main (Original) Certificate"),
      term: "Main / Original Certificate",
      summary: P("NU থেকে সরাসরি ইস্যু হওয়া চূড়ান্ত সনদ। বিদেশে ও অনেক চাকরিতে প্রয়োজন হয়।",
        "The final certificate issued directly by NU. Needed abroad and for many jobs."),
      docs: [
        { t: P("Registration Card", "Registration Card") },
        { t: P("Final Year Admit Card", "Final Year Admit Card") },
        { t: P("Provisional Certificate", "Provisional Certificate"), s: P("মূল কপি জমা দিতে হয়", "The original must be surrendered"),
          miss: P("Provisional ছাড়া Main Certificate-এর আবেদন হয় না। আগে কলেজ বা NU থেকে তুলতে হবে।", "You cannot apply for the Main Certificate without the Provisional. Obtain it first from your college or NU.") },
        { t: P("Marksheet", "Marksheet"),
          miss: P("Online Result Sheet আর Marksheet এক জিনিস নয়। আগে Marksheet তুলতে হবে।", "An Online Result Sheet is not the same as a Marksheet. Obtain the Marksheet first.") },
        { t: P("অধ্যক্ষের সুপারিশসহ আবেদনপত্র", "Application with the principal's recommendation") }
      ],
      steps: [
        P("আবেদন ফর্মে অধ্যক্ষের সত্যায়ন", "Get the application form attested by the principal"),
        P("কাগজ স্ক্যান করে PDF", "Scan the documents to PDF"),
        P("Student Portal-এ Main Certificate আবেদন", "Apply for the Main Certificate on the Student Portal"),
        P("Fee জমা", "Pay the fee"),
        P("Status Signatured হলে গাজীপুর থেকে সংগ্রহ", "Collect it in Gazipur once the status shows Signatured")
      ],
      notes: [
        P("Honours ও Masters-এর জন্য আলাদা Student Portal account লাগে।", "Honours and Masters each need a separate Student Portal account."),
        P("অন্য কেউ সংগ্রহ করলে আপনার Authorization Letter ও NID-র কপি লাগে।", "If someone else collects it, they need your Authorization Letter and a copy of your NID."),
        P("মূল সনদ হারালে Duplicate আবেদন করতে হয়।", "If the original is lost, apply for a Duplicate.")
      ]
    },
    {
      id: "transcript", cat: "collect", icon: "book", mode: "online", visit: "collect",
      name: P("একাডেমিক ট্রান্সক্রিপ্ট", "Academic Transcript"),
      term: "Academic Transcript",
      summary: P("বিষয়ের নামসহ বিশেষ ধরনের মার্কশীট। বিদেশে আবেদনে সাধারণত Marksheet-এর বদলে এটি চাওয়া হয়।",
        "A special marksheet that lists subject names. Applications abroad usually ask for this instead of the Marksheet."),
      docs: [
        { t: P("Registration Card", "Registration Card") },
        { t: P("Admit Card (সকল বর্ষের)", "Admit Cards (all years)") },
        { t: P("Provisional Certificate", "Provisional Certificate") },
        { t: P("Marksheet", "Marksheet"), miss: P("আগে Marksheet তুলতে হবে।", "Obtain the Marksheet first.") },
        { t: P("HSC সনদ", "HSC certificate"), s: P("ডিগ্রি বা অনার্সের ট্রান্সক্রিপ্টের জন্য", "For a Degree or Honours transcript"), opt: true },
        { t: P("অনার্স বা ডিগ্রি সনদ", "Honours or Degree certificate"), s: P("মাস্টার্সের ট্রান্সক্রিপ্টের জন্য", "For a Masters transcript"), opt: true },
        { t: P("অধ্যক্ষের সুপারিশসহ আবেদনপত্র", "Application with the principal's recommendation") }
      ],
      steps: [
        P("আবেদন ফর্মে অধ্যক্ষের সত্যায়ন", "Get the application form attested by the principal"),
        P("কাগজ স্ক্যান করে PDF", "Scan the documents to PDF"),
        P("Student Portal-এ Academic Transcript আবেদন", "Apply for the Academic Transcript on the Student Portal"),
        P("Fee জমা", "Pay the fee"),
        P("Status Printed হলে গাজীপুর থেকে সংগ্রহ", "Collect it in Gazipur once the status shows Printed")
      ],
      notes: [
        P("চলমান শিক্ষার্থী ১ম বা ২য় বর্ষ শেষ করলে সেই বর্ষ বেছে নিয়ে আবেদন করা যায়।", "A current student who has completed year 1 or 2 can apply by selecting that year."),
        P("প্রতিটি বর্ষের আলাদা ট্রান্সক্রিপ্টের জন্য আলাদা fee লাগে।", "Each year's separate transcript needs a separate fee.")
      ]
    },
    {
      id: "duplicate", cat: "collect", icon: "copy", mode: "online", visit: "collect",
      name: P("দ্বি-নকল সনদ, মার্কশীট ও Admit Card", "Duplicate Certificate, Marksheet & Admit Card"),
      term: "Duplicate Certificate / Marksheet / Admit Card",
      summary: P("মূল কাগজ প্রকৃতই হারিয়ে বা নষ্ট হলে দ্বিতীয় কপি। এটি জাল নয়, কিন্তু প্রক্রিয়া কড়া।",
        "A second copy when the original is genuinely lost or destroyed. It is not a fake, but the process is strict."),
      docs: [
        { t: P("অধ্যক্ষের সুপারিশসহ আবেদনপত্র", "Application with the principal's recommendation") },
        { t: P("Registration Card", "Registration Card"),
          miss: P("না থাকলে আগে Registration Card-এর দ্বি-নকল তুলতে হবে।", "If you do not have it, first obtain a duplicate Registration Card.") },
        { t: P("Final Year Admit Card", "Final Year Admit Card"),
          miss: P("না থাকলে আগে Admit Card-এর দ্বি-নকল তুলতে হবে।", "If you do not have it, first obtain a duplicate Admit Card.") },
        { t: P("Online Result Sheet", "Online Result Sheet"), opt: true },
        { t: P("থানার GD (সাধারণ ডায়েরি)", "Police GD (General Diary)"),
          miss: P("প্রকৃত হারানো বা নষ্ট হলে থানায় GD করতে হয়।", "If the document is genuinely lost or destroyed, a GD must be filed at the police station.") },
        { t: P("পত্রিকায় বিজ্ঞপ্তির কপি", "Newspaper notice copy"),
          miss: P("পত্রিকায় বিজ্ঞপ্তি দিতে হয়। সনদ নেওয়ার সময় মূল কপি জমা দিতে হয়।", "A notice must be published in a newspaper. The original copy is submitted when you collect the certificate.") }
      ],
      steps: [
        P("থানায় GD ও পত্রিকায় বিজ্ঞপ্তি, দুটিতেই নাম, Registration নম্বর, Roll ও Session উল্লেখ", "File a GD and publish a newspaper notice, each stating your name, registration number, roll and session"),
        P("আবেদনপত্রে অধ্যক্ষের সুপারিশ", "Get the principal's recommendation on the application"),
        P("Student Portal-এ আবেদন ও fee", "Apply on the Student Portal and pay the fee"),
        P("সংগ্রহের সময় GD ও পত্রিকার মূল কপি জমা", "Submit the original GD and newspaper copy when you collect")
      ],
      notes: [
        P("মিথ্যা GD বা বিজ্ঞপ্তি আমরা করি না। শুধু প্রকৃত ক্ষেত্রে সহায়তা করি।", "We never take part in false GDs or notices. We help only in genuine cases.")
      ]
    },
    {
      id: "name", cat: "correct", icon: "pen", mode: "mixed", visit: "correction",
      name: P("নাম সংশোধন", "Name Correction"),
      term: "Name Correction",
      summary: P("Registration, Admit Card, Provisional, Marksheet বা Transcript-এ নামের ভুল ঠিক করা। ধাপে ধাপে করতে হয়, তাই সময় লাগে।",
        "Fixing a wrong name on your Registration, Admit Card, Provisional, Marksheet or Transcript. It must be done in sequence, so it takes time."),
      docs: [
        { t: P("SSC ও HSC সনদে নাম সঠিক", "Correct name on SSC and HSC certificates"), s: P("ভুল থাকলে আগে এগুলো সংশোধন", "If wrong, correct these first"),
          miss: P("আগে SSC ও HSC সনদ সংশোধন করতে হবে।", "Correct your SSC and HSC certificates first.") },
        { t: P("Registration Card সংশোধিত", "Registration Card corrected"),
          miss: P("Registration সংশোধন না হলে পরের কিছু সংশোধন করা যায় না।", "Later corrections cannot be made until the Registration is corrected.") },
        { t: P("Final Year Admit Card সংশোধিত", "Final Year Admit Card corrected"),
          miss: P("Admit Card সংশোধনের আবেদন Registration সংশোধনের পর।", "Apply to correct the Admit Card only after the Registration is corrected.") },
        { t: P("নাম সংশোধনের আবেদন ফরম", "Name correction application form"), s: P("সব কাগজের জন্য একটিই অফিসিয়াল ফরম", "One official form covers all documents") },
        { t: P("ম্যাজিস্ট্রেটের এফিডেভিট", "Magistrate's affidavit"), s: P("শুধু পুরো নাম বদলাতে চাইলে", "Only for a full name change"), opt: true }
      ],
      steps: [
        P("SSC ও HSC সনদ ঠিক আছে কি দেখা", "Check that your SSC and HSC certificates are correct"),
        P("Registration Card সংশোধন", "Correct the Registration Card"),
        P("Final Year Admit Card সংশোধন", "Correct the Final Year Admit Card"),
        P("Provisional ও Marksheet একসাথে সংশোধন (Transcript থাকলে Marksheet-এর বদলে সেটি)", "Correct the Provisional and Marksheet together (the Transcript instead of the Marksheet if you have one)"),
        P("সব সংশোধনের পর NU বোর্ডে Online Data সংশোধনের আবেদন", "After all corrections, apply at the NU board to correct the Online Data"),
        P("আগেই Main Certificate তোলা থাকলে সবশেষে সেটি সংশোধন", "If you already collected the Main Certificate, correct it last")
      ],
      notes: [
        P("Provisional সংশোধন না হওয়া পর্যন্ত Main Certificate বা Transcript আবেদন করলে ভুল নাম আসবে।", "If you apply for the Main Certificate or Transcript before the Provisional is corrected, the wrong name will appear."),
        P("সময় সাধারণত কয়েক মাস, নাম আমূল বদলালে আরও বেশি। নির্দিষ্ট দিনের প্রতিশ্রুতি দেওয়া হয় না।", "It usually takes several months, longer for a complete name change. We do not promise a fixed date."),
        P("শুধু বৈধ প্রমাণের ভিত্তিতে কাজ করা হয়।", "We work only on the basis of valid proof.")
      ]
    },
    {
      id: "moi", cat: "verify", icon: "languages", mode: "manual", visit: "both",
      name: P("MOI Certificate", "MOI Certificate"),
      term: "Medium of Instruction",
      summary: P("পড়াশোনা ইংরেজি মাধ্যমে হয়েছে তার প্রত্যয়ন। কিছু বিদেশি প্রতিষ্ঠান IELTS-এর বিকল্প হিসেবে নেয়, সবাই নেয় না।",
        "A certificate that your studies were in English. Some foreign institutions accept it as an alternative to IELTS; not all do."),
      docs: [
        { t: P("অধ্যক্ষের সুপারিশসহ আবেদনপত্র", "Application with the principal's recommendation") },
        { t: P("অধ্যক্ষের Recommendation Letter", "Recommendation Letter from the principal") },
        { t: P("Registration Card", "Registration Card") },
        { t: P("Final Year Admit Card", "Final Year Admit Card") },
        { t: P("Provisional Certificate", "Provisional Certificate"), miss: P("Provisional ছাড়া MOI-র আবেদন হয় না।", "You cannot apply for MOI without the Provisional.") },
        { t: P("Marksheet", "Marksheet"), miss: P("Marksheet ছাড়া MOI-র আবেদন হয় না।", "You cannot apply for MOI without the Marksheet.") }
      ],
      steps: [
        P("কলেজ থেকে Recommendation Letter", "Get a Recommendation Letter from your college"),
        P("সব কাগজসহ NU গাজীপুরের MOI দপ্তরে আবেদন, যোগ্য হলে অনুমোদন", "Apply at the NU MOI office in Gazipur with all documents; if eligible you receive approval"),
        P("One Stop Service থেকে pay-slip নিয়ে ব্যাংকে fee জমা", "Collect a pay-slip from the One Stop Service and pay the fee at the bank"),
        P("রশিদসহ কাগজ আবার MOI দপ্তরে জমা", "Submit the documents with the receipt to the MOI office again"),
        P("সনদ সংগ্রহ", "Collect the certificate")
      ],
      notes: [
        P("MOI অনলাইনে আবেদন করা যায় না।", "MOI cannot be applied for online."),
        P("যে প্রতিষ্ঠানে আবেদন করবেন, তারা MOI নেয় কি না আগে তাদের নিয়মে দেখে নিন।", "Check whether the institution you are applying to accepts MOI.")
      ]
    },
    {
      id: "verify", cat: "verify", icon: "badge", mode: "manual", visit: "gaz",
      name: P("যাচাই ও সত্যায়ন", "Verification & Attestation"),
      term: "Verify & Attestation",
      summary: P("NU কর্তৃক সনদ বা ট্রান্সক্রিপ্টের সত্যায়িত কপি, অথবা NU-র অফিসিয়াল email থেকে সরাসরি কোনো প্রতিষ্ঠানে যাচাই পাঠানো।",
        "NU-attested copies of certificates or transcripts, or verification sent directly to an institution from NU's official email."),
      docs: [
        { t: P("পরীক্ষা নিয়ন্ত্রক বরাবর দরখাস্ত", "Application addressed to the Controller of Examinations"), s: P("কী কী সত্যায়ন করতে চান তার তালিকাসহ", "Listing what you want attested") },
        { t: P("মূল সনদ বা ট্রান্সক্রিপ্ট", "Original certificate or transcript") },
        { t: P("প্রতিটি কাগজের একটি অতিরিক্ত ফটোকপি", "One extra photocopy of each document") }
      ],
      steps: [
        P("পরীক্ষা নিয়ন্ত্রক বরাবর দরখাস্ত লেখা", "Write an application to the Controller of Examinations"),
        P("সকাল ১১টার মধ্যে NU মেইন ক্যাম্পাসের One Stop Service-এ জমা", "Submit it at the One Stop Service at the NU main campus before 11:00 am"),
        P("pay-slip নিয়ে ব্যাংকে fee জমা, রশিদ ফেরত দিয়ে token নেওয়া", "Pay the fee at the bank with the pay-slip, return the receipt and take a token"),
        P("সত্যায়িত কাগজ সংগ্রহ", "Collect the attested documents")
      ],
      notes: [
        P("সনদ লেমিনেটিং করা থাকলে খুলতে হয়। কাগজ নষ্ট হওয়ার ঝুঁকি আছে, তাই আপনার লিখিত সম্মতি ছাড়া আমরা খুলি না।", "A laminated certificate has to be opened. There is a risk of damage, so we do not do it without your written consent."),
        P("Fee ব্যাংকে জমা দিতে হয়, অনলাইনে নয়।", "The fee is paid at the bank, not online.")
      ]
    },
    {
      id: "apostille", cat: "verify", icon: "globe", mode: "mygov", visit: "none",
      name: P("Apostille (myGov.bd)", "Apostille (myGov.bd)"),
      term: "E-Apostille",
      summary: P("বিদেশে ব্যবহারের জন্য NU, শিক্ষা মন্ত্রণালয় ও পররাষ্ট্র মন্ত্রণালয় কর্তৃক ডিজিটাল সত্যায়ন। ইউরোপ ও আমেরিকার অনেক জায়গায় চাওয়া হয়।",
        "Digital attestation by NU, the Ministry of Education and the Ministry of Foreign Affairs, for use abroad. Often required in Europe and America."),
      docs: [
        { t: P("myGov.bd-তে account", "A myGov.bd account"),
          miss: P("আগে myGov.bd-তে account খুলে profile সম্পূর্ণ করতে হবে।", "First create a myGov.bd account and complete your profile.") },
        { t: P("Mobile banking-এ fee দেওয়ার ব্যবস্থা", "A mobile banking account to pay the fee") }
      ],
      steps: [
        P("myGov.bd-তে account ও profile সম্পূর্ণ", "Create an account on myGov.bd and complete your profile"),
        P("নতুন আবেদন ফরম পূরণ", "Fill in a new application"),
        P("Mobile banking-এ fee জমা", "Pay the fee through mobile banking"),
        P("আবেদন প্রথমে NU-র পরীক্ষা নিয়ন্ত্রক দপ্তরে যায়, তারপর মন্ত্রণালয়ে", "The application goes first to the NU Controller of Examinations office, then to the ministries")
      ],
      notes: [
        P("এই প্রক্রিয়ার বড় অংশ সরকারি দপ্তরের হাতে। সময় সাধারণত কয়েক সপ্তাহ, তবে বেশিও লাগতে পারে।", "Most of this process is in the hands of government offices. It usually takes several weeks, sometimes longer."),
        P("জরুরি Apostille বা দ্রুত করার কোনো প্রতিশ্রুতি আমরা দিই না।", "We do not promise urgent or faster Apostille."),
        P("Apostille ডিজিটাল কপি, myGov.bd-তে সংরক্ষিত থাকে। হার্ডকপি পাওয়া যায় না।", "The Apostille is a digital copy stored on myGov.bd. No hard copy is issued.")
      ]
    }
  ];

  /* MOI eligibility, from the NU rules summarised on the source pages. Names are strings or {bn,en}. */
  function S(n, ok, type, note) { return { n: n, ok: ok, type: type || null, note: note || null }; }
  var EV = "English Version MOI";
  var noArts = P("কলা বিভাগে শুধু English বিষয়ের শিক্ষার্থীরা MOI পান।", "In the arts faculty only English students get MOI.");
  var noSoc = P("এই বিষয়ে সাধারণত MOI দেওয়া হয় না।", "MOI is usually not issued for this subject.");
  var moi = [
    { g: P("ব্যবসায় শিক্ষা (BBA, BBS, BCom, MBA, MBS, MCom)", "Business studies (BBA, BBS, BCom, MBA, MBS, MCom)"),
      items: [S("Marketing", true, EV), S("Finance", true, EV), S("Accounting", true, EV), S("Management", true, EV)] },
    { g: P("বিজ্ঞান (BSc, MSc)", "Science (BSc, MSc)"),
      items: ["Physics", "Chemistry", "Bio-Chemistry", "Botany", "Zoology", "Psychology", "Soil Science", "Statistics", "Mathematics", "Environment Science", "Geography and Environment"].map(function (x) { return S(x, true, EV); }) },
    { g: P("কলা (BA, MA)", "Arts (BA, MA)"),
      items: [S("English", true, "Main MOI")].concat(["Bangla", "Philosophy", "History", "Islamic History and Culture", "Islamic Studies", "Home Economics", "Arabic", "Sanskrit", "Music"].map(function (x) { return S(x, false, null, noArts); })) },
    { g: P("সামাজিক বিজ্ঞান (BSS, MSS)", "Social sciences (BSS, MSS)"),
      items: [S("Economics", true, EV), S("Social Work", true, EV), S("Sociology", true, EV),
        S("Political Science", false, null, noSoc), S("Anthropology", false, null, noSoc), S("Library and Information Science", false, null, noSoc)] },
    { g: P("Bachelor Professional", "Bachelor Professional"),
      items: [S("BBA Professional (Marketing, Finance, Accounting, Management)", true), S("CSE, ECE, BEd, AMT, KMT, FDT", true)] },
    { g: P("এক বছরের Professional কোর্স", "One-year professional courses"),
      items: [S("LLB, BEd, BPEd, BSEd", true)] },
    { g: P("অন্যান্য", "Other"),
      items: [
        S(P("ডিগ্রি (পাস) কোর্স", "Degree (Pass) course"), false, null, P("ডিগ্রি (পাস) কোর্সে MOI হয় না। প্রত্যয়নপত্র পাওয়া যেতে পারে।", "MOI is not issued for Degree (Pass) courses. A testimonial may be available instead.")),
        S(P("মাস্টার্স পার্ট-১ (প্রিলিমিনারি)", "Masters Part-1 (Preliminary)"), false, null, P("প্রিলিমিনারিতে MOI হয় না।", "MOI is not issued for the Preliminary year."))
      ] }
  ];

  var faq = [
    { q: P("Provisional আর Main Certificate-এর পার্থক্য কী?", "What is the difference between a Provisional and a Main Certificate?"),
      a: P("Provisional কলেজ থেকে পাওয়া সাময়িক সনদ। Main Certificate NU থেকে সরাসরি ইস্যু হয় এবং বিদেশে সাধারণত এটিই চাওয়া হয়। Main Certificate নেওয়ার সময় Provisional-এর মূল কপি জমা দিতে হয়।",
        "The Provisional is a temporary certificate issued through your college. The Main Certificate is issued directly by NU and is usually what is asked for abroad. You surrender the original Provisional when you collect the Main Certificate.") },
    { q: P("Marksheet আর Transcript কি এক?", "Are a Marksheet and a Transcript the same?"),
      a: P("না। Transcript-এ বিষয় কোডের পাশাপাশি বিষয়ের নামও থাকে। বিদেশে আবেদনে সাধারণত Transcript চাওয়া হয়। আগে Marksheet তুলতে হয়, তারপর Transcript।",
        "No. A Transcript lists subject names as well as subject codes. Applications abroad usually ask for a Transcript. You obtain the Marksheet first, then the Transcript.") },
    { q: P("Online Result Sheet দিয়ে কি Marksheet-এর কাজ হয়?", "Can an Online Result Sheet replace the Marksheet?"),
      a: P("না। Online Result Sheet আর Marksheet আলাদা জিনিস। Main Certificate বা Transcript-এর আবেদনে Marksheet লাগে।",
        "No. They are different documents. Applications for the Main Certificate or Transcript need the Marksheet.") },
    { q: P("আমার বদলে অন্য কেউ কি সনদ সংগ্রহ করতে পারবে?", "Can someone else collect my certificate for me?"),
      a: P("পারবে। তার জন্য আপনার Authorization Letter (সম্মতিপত্র) ও আপনার NID-র কপি লাগে।",
        "Yes. They need your Authorization Letter and a copy of your NID.") },
    { q: P("Honours ও Masters-এর জন্য কি আলাদা account লাগে?", "Do Honours and Masters need separate accounts?"),
      a: P("হ্যাঁ। প্রতিটি কোর্সের জন্য Student Portal-এ আলাদা account খুলতে হয়।",
        "Yes. Each course needs its own account on the Student Portal.") },
    { q: P("আপনাদের fee কত?", "What are your fees?"),
      a: P("Official fee NU বা সংশ্লিষ্ট দপ্তর নির্ধারণ করে। আমরা আবেদনের আগে official fee আর আমাদের service fee আলাদা করে লিখিতভাবে জানাই।",
        "The official fee is set by NU or the office concerned. Before you apply, we give you the official fee and our own service fee separately, in writing.") },
    { q: P("কত দিনে পাব?", "How long will it take?"),
      a: P("সময় NU ও সংশ্লিষ্ট দপ্তরের কাজের চাপের ওপর নির্ভর করে, তাই নির্দিষ্ট দিনের গ্যারান্টি দিই না। কাজ শুরুর আগে সম্ভাব্য সময়ের ধারণা দেওয়া হয়।",
        "It depends on the workload of NU and the office concerned, so we do not guarantee a fixed date. We give you an indication of the likely time before work starts.") },
    { q: P("কোনো বর্ষে fail থাকলে কী হবে?", "What if I failed a year?"),
      a: P("শেষ বর্ষ পাস করলেও আগের কোনো বর্ষে fail থাকলে সাধারণত Provisional কলেজে আসে না। সেই বর্ষে পরীক্ষা দিয়ে পাস করার পর আবেদন করতে হয়।",
        "If you passed the final year but failed an earlier one, the Provisional is usually not sent to the college. You must pass that year first, then apply.") }
  ];

  var chains = {
    normal: [
      P("Registration Card", "Registration Card"),
      P("Final Year Admit Card", "Final Year Admit Card"),
      P("Provisional ও Marksheet", "Provisional & Marksheet"),
      P("Main Certificate বা Transcript", "Main Certificate or Transcript"),
      P("MOI, Verify, Apostille", "MOI, Verify, Apostille")
    ],
    name: [
      P("SSC ও HSC সনদ", "SSC & HSC certificates"),
      P("Registration Card", "Registration Card"),
      P("Final Year Admit Card", "Final Year Admit Card"),
      P("Provisional ও Marksheet", "Provisional & Marksheet"),
      P("Online Data সংশোধন", "Online Data correction"),
      P("Main Certificate (আগে তোলা থাকলে)", "Main Certificate (if already collected)")
    ]
  };

  window.DATA = { services: services, moi: moi, faq: faq, chains: chains };
})();
