"""Build the static PAR landing-page concept. Run: python3 prototype/build.py"""

from html import escape
from pathlib import Path

OUT = Path(__file__).resolve().parent

PAGES = {
    "refrigerator": {
        "nav": "Refrigerators", "eyebrow": "Refrigerator service", "title": "Keep the kitchen moving.",
        "lede": "When a refrigerator changes temperature, makes an unfamiliar sound, or stops making ice, the next step should feel clear.",
        "image": "../enhanced/par-built-in-refrigerator-service.jpg", "alt": "PAR technician working on an open built-in refrigerator in a kitchen",
        "badge": "PAR field photo · enhanced", "number": "01", "accent": "mint",
        "issues": ["Cooling concerns", "Leaks and moisture", "Ice maker issues", "Unusual sounds"],
        "section_title": "A close look at the details that matter.",
        "section_copy": "The service story starts with careful observation, a clear explanation, and a practical path forward. The image shows a real visit; the exact work shown should not be taken as a diagnosis for every appliance.",
        "secondary": "../concepts/chatgpt-refrigerator-diagnosis.png", "secondary_alt": "Illustration of a technician inspecting a refrigerator",
        "secondary_badge": "Illustrative concept image", "secondary_title": "A considered diagnostic experience",
        "faqs": [("What information helps before a visit?", "The appliance brand and model, the symptoms you have noticed, and when the issue began are useful starting points."),
                 ("Can you look at built-in refrigerators?", "This concept page includes built-in refrigerator service. Confirm current model coverage with PAR before publishing specific service promises.")],
    },
    "washer": {
        "nav": "Washers", "eyebrow": "Washer service", "title": "Get laundry back on track.",
        "lede": "A washer that will not drain, spin, or finish a cycle can interrupt the whole day. Make the next step simple.",
        "image": "../concepts/chatgpt-stacked-laundry.png", "alt": "Illustrative scene of a technician examining stacked laundry appliances",
        "badge": "Illustrative concept image", "number": "02", "accent": "sand",
        "issues": ["Drainage issues", "Spin and agitation", "Leaks", "Cycle interruptions"],
        "section_title": "An organized visit, from first look to next steps.",
        "section_copy": "Use this page to explain how PAR approaches the problem and what customers can prepare. A real PAR washer service photograph would strengthen this page before launch.",
        "secondary": None, "secondary_alt": "", "secondary_badge": "", "secondary_title": "",
        "faqs": [("What should I note before requesting service?", "Record any error code, the cycle where the problem happens, and whether water remains in the drum."),
                 ("Does this image show a PAR visit?", "No. The washer image is a generated visual used for this design concept.")],
    },
    "dryer": {
        "nav": "Dryers", "eyebrow": "Dryer service", "title": "Make room for a better laundry day.",
        "lede": "When a dryer stops heating, takes too long, or will not start, a focused service visit helps move the day forward.",
        "image": "../enhanced/par-dryer-repair-hero.jpg", "alt": "PAR technician servicing a stacked dryer",
        "badge": "PAR field photo · enhanced", "number": "03", "accent": "mint",
        "issues": ["No heat", "Long dry times", "Unusual sounds", "Start and control issues"],
        "section_title": "Real service work, shown clearly.",
        "section_copy": "This photo captures a PAR technician working on stacked laundry equipment. It gives the page a credible view of the visit without making a promise about any specific repair outcome.",
        "secondary": "../concepts/chatgpt-dryer-airflow.png", "secondary_alt": "Illustration of a technician checking dryer airflow",
        "secondary_badge": "Illustrative concept image", "secondary_title": "Attention to airflow and performance",
        "faqs": [("What details should I share?", "Tell PAR what the dryer does, whether it heats, and about any sound, smell, or message you have noticed."),
                 ("Is this a real PAR service photo?", "The main dryer image is an edited real field photo. The smaller airflow image is an illustration.")],
    },
    "dishwasher": {
        "nav": "Dishwashers", "eyebrow": "Dishwasher service", "title": "A smoother rhythm for the kitchen.",
        "lede": "Leaks, drainage trouble, and dishes that stay dirty all deserve a clear explanation and a useful next step.",
        "image": "../concepts/chatgpt-dishwasher.png", "alt": "Illustrative scene of a technician inspecting an open dishwasher",
        "badge": "Illustrative concept image", "number": "04", "accent": "sand",
        "issues": ["Water not draining", "Leaks", "Cleaning performance", "Cycle and control issues"],
        "section_title": "Built around what customers need to know.",
        "section_copy": "A good service page helps people describe the symptom and prepare for the visit. The current visual is illustrative; an authentic PAR dishwasher photograph remains a priority for the finished site.",
        "secondary": None, "secondary_alt": "", "secondary_badge": "", "secondary_title": "",
        "faqs": [("What information is useful before service?", "Share the model if available, where you see water, and whether the cycle completes."),
                 ("Is the technician pictured a PAR employee?", "No. This is a generated concept image, not a photograph of a PAR employee or job.")],
    },
    "oven-range": {
        "nav": "Ovens & ranges", "eyebrow": "Oven & range service", "title": "Bring confidence back to cooking.",
        "lede": "From uneven heat to a control that will not respond, the right next step begins with understanding what the appliance is doing.",
        "image": "../enhanced/par-oven-service.jpg", "alt": "Built-in oven pulled onto a service cart during an actual service visit",
        "badge": "PAR field photo · enhanced", "number": "05", "accent": "mint",
        "issues": ["Heating concerns", "Control issues", "Door and fit problems", "Uneven cooking"],
        "section_title": "A real look at built-in appliance service.",
        "section_copy": "The edited photo shows an oven removed for access on a service cart. It is useful for explaining the care involved in a visit, while leaving exact technical claims to the service team.",
        "secondary": None, "secondary_alt": "", "secondary_badge": "", "secondary_title": "",
        "faqs": [("What should I share when requesting service?", "Note the model, any error message, and whether the concern affects the oven, cooktop, or both."),
                 ("Does the photo show a real service visit?", "Yes. The main oven image began as a real uploaded service photo and was enhanced for this concept.")],
    },
    "ice-machine": {
        "nav": "Ice machines", "eyebrow": "Ice-machine service", "title": "Clear ice. Clear next steps.",
        "lede": "For an ice machine that slows down, leaks, or needs attention, make the path to service easy to understand.",
        "image": "../enhanced/par-ice-machine-detail.jpg", "alt": "Open clear-ice machine showing a bin of ice",
        "badge": "Real appliance photo · enhanced", "number": "06", "accent": "ice",
        "issues": ["Low ice production", "Leaks", "Cleaning concerns", "Unusual sounds"],
        "section_title": "Show the appliance, then explain the visit.",
        "section_copy": "This genuine appliance photo makes the category recognizable. It does not show a technician or document a repair result. A current field-service image would add more credibility here.",
        "secondary": None, "secondary_alt": "", "secondary_badge": "", "secondary_title": "",
        "faqs": [("What should I note before a visit?", "Share whether the machine is producing ice, whether water is collecting, and any lights or messages you see."),
                 ("Does the image show a completed repair?", "No. It is a real photo of an ice machine, edited for the visual concept.")],
    },
}


def nav(active="home"):
    links = [('<a href="index.html"' + (' aria-current="page"' if active == "home" else '') + '>Home</a>')]
    links += [f'<a href="{slug}.html"' + (' aria-current="page"' if active == slug else '') + f'>{escape(page["nav"])}</a>' for slug, page in PAGES.items()]
    return '<nav class="nav-links" aria-label="Primary">' + ''.join(links) + '</nav>'


def shell(title, active, content):
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="PAR appliance service landing-page visual concept. Photography and layout prototype.">
<meta name="robots" content="noindex, nofollow">
<title>{escape(title)} | PAR concept</title><link rel="stylesheet" href="styles.css"></head>
<body><a class="skip" href="#main">Skip to content</a><div class="concept-ribbon">PAR website visual concept <span>·</span> <a href="../index.html">Back to the main concept ↗</a></div>
<header class="site-header"><a class="brand" href="index.html" aria-label="PAR concept home"><span class="brand-mark">PAR<span class="brand-dot">.</span></span><span class="brand-name">Professional<br>Appliance Repair</span></a>
{nav(active)}<a class="header-cta" href="#request">Request service <span aria-hidden="true">↗</span></a></header>
<main id="main">{content}</main><footer class="site-footer"><div class="footer-top"><a class="brand brand-footer" href="index.html"><span class="brand-mark">PAR<span class="brand-dot">.</span></span><span class="brand-name">Professional<br>Appliance Repair</span></a><p>A photo-led concept for a clearer appliance service experience.</p></div><div class="footer-bottom"><span>PAR landing-page visual concept · October 2026</span><a href="PHOTO-NOTES.md">Photo source and usage notes ↗</a></div></footer>
<script src="site.js" defer></script></body></html>'''


def image(path, alt, badge, extra=""):
    return f'<figure class="photo {extra}"><img src="{escape(path)}" alt="{escape(alt)}"><figcaption>{escape(badge)}</figcaption></figure>'


def request(section):
    return f'''<section class="request-block" id="request"><div><span class="eyebrow light">The next step</span><h2>Let’s get your {escape(section)} working again.</h2><p>Share what you are seeing and make the service request simple.</p></div><form class="request-form" id="request-form"><label>Appliance <input value="{escape(section.title())}" readonly></label><label>What is happening? <textarea name="symptom" rows="3" placeholder="A few details about the issue"></textarea></label><button type="submit">Preview request <span aria-hidden="true">↗</span></button><p class="form-note" role="status">Prototype only. No information is sent.</p></form></section>'''


def service_card(slug, page):
    return f'''<a class="service-card" href="{slug}.html"><div class="service-card-image"><img src="{page['image']}" alt="{escape(page['alt'])}"><span>{escape(page['badge'])}</span></div><div class="service-card-copy"><span class="card-number">{page['number']} / 06</span><h3>{escape(page['nav'])}</h3><span class="card-arrow" aria-hidden="true">↗</span></div></a>'''


def home():
    hero = image('../enhanced/par-dryer-repair-hero.jpg', 'PAR technician servicing a stacked dryer', 'PAR field photo · enhanced', 'home-hero-photo')
    cards = ''.join(service_card(slug, p) for slug, p in PAGES.items())
    feature = image('../enhanced/par-built-in-refrigerator-service.jpg', 'PAR technician servicing a built-in refrigerator', 'PAR field photo · enhanced')
    oven = image('../enhanced/par-oven-service.jpg', 'Built-in oven on a service cart', 'PAR field photo · enhanced')
    content = f'''<section class="home-hero"><div class="hero-copy"><span class="eyebrow">Care that shows in the details</span><h1>When your home needs things <em>working again.</em></h1><p>Appliance service should feel clear from the first question to the next step. Explore a more human, photo-led way to find the help you need.</p><div class="hero-actions"><a class="button primary" href="#services">Explore services <span aria-hidden="true">↘</span></a><a class="text-link" href="#what-to-expect">What to expect <span aria-hidden="true">↗</span></a></div><div class="hero-foot"><span class="tiny-rule"></span><span>Real PAR service photography<br>throughout this concept</span></div></div>{hero}<div class="hero-index">01 <span>/ 03</span></div></section>
    <section class="intro-band"><span class="eyebrow">The right page, quickly</span><p>Start with the appliance. Find a practical path forward.</p><a href="#services" aria-label="Jump to appliance services">↓</a></section>
    <section class="services-section" id="services"><div class="section-heading"><div><span class="eyebrow">Explore service</span><h2>Find your appliance.</h2></div><p>Each page brings together the common concerns, a simple service story, and imagery chosen for that appliance.</p></div><div class="service-grid">{cards}</div></section>
    <section class="story-section" id="what-to-expect"><div class="story-copy"><span class="eyebrow">A visit, in focus</span><h2>Good service starts with a closer look.</h2><p>Real photos of work in progress can help customers picture the visit. The concept pairs those images with straightforward explanations and space to ask questions.</p><a class="text-link dark" href="refrigerator.html">Explore refrigerator service <span aria-hidden="true">↗</span></a></div><div class="story-images">{feature}{oven}</div></section>
    <section class="statement"><span>01 / Clear guidance</span><span>02 / Thoughtful service</span><span>03 / The next step, explained</span></section>
    {request('appliance')}'''
    return shell('Home', 'home', content)


def detail(slug, page):
    issues = ''.join(f'<li><span aria-hidden="true">↗</span>{escape(issue)}</li>' for issue in page['issues'])
    photo = image(page['image'], page['alt'], page['badge'], 'detail-hero-photo')
    secondary = (f'<div class="feature-photo">{image(page["secondary"], page["secondary_alt"], page["secondary_badge"])}<strong>{escape(page["secondary_title"])}</strong></div>' if page['secondary'] else '<div class="feature-symbol" aria-hidden="true"><span>PAR.</span><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div></div>')
    faqs = ''.join(f'<details><summary>{escape(q)}<span aria-hidden="true">+</span></summary><p>{escape(a)}</p></details>' for q, a in page['faqs'])
    related = [s for s in PAGES if s != slug][:3]
    related_cards = ''.join(service_card(s, PAGES[s]) for s in related)
    content = f'''<div class="breadcrumbs"><a href="index.html">Home</a><span>/</span>{escape(page['nav'])}</div>
    <section class="detail-hero accent-{page['accent']}"><div class="detail-hero-copy"><span class="eyebrow">{escape(page['eyebrow'])} <b>—</b> {page['number']} / 06</span><h1>{escape(page['title'])}</h1><p>{escape(page['lede'])}</p><div class="hero-actions"><a class="button primary" href="#request">Request service <span aria-hidden="true">↗</span></a><a class="text-link" href="#common">What we look at <span aria-hidden="true">↘</span></a></div></div>{photo}</section>
    <section class="issue-section" id="common"><div><span class="eyebrow">Common concerns</span><h2>Tell us what you’re noticing.</h2><p>These are useful starting points for a service conversation, not a diagnosis.</p></div><ul>{issues}</ul></section>
    <section class="feature-section"><div class="feature-copy"><span class="eyebrow">The service experience</span><h2>{escape(page['section_title'])}</h2><p>{escape(page['section_copy'])}</p><a class="text-link dark" href="#request">Start a request <span aria-hidden="true">↗</span></a></div>{secondary}</section>
    <section class="process-section"><div class="section-heading"><div><span class="eyebrow">A simple path</span><h2>What happens next.</h2></div><p>Use a calm, clear sequence to help customers prepare for a service visit.</p></div><div class="process-grid"><article><span>01</span><h3>Share the concern</h3><p>Tell PAR which appliance needs attention and what you have noticed.</p></article><article><span>02</span><h3>Prepare the details</h3><p>Have the brand, model, and any error message ready if available.</p></article><article><span>03</span><h3>Discuss the next step</h3><p>Use the visit to understand the issue and the recommended path forward.</p></article></div></section>
    <section class="faq-section"><div><span class="eyebrow">Helpful to know</span><h2>A little clarity before the visit.</h2></div><div class="faq-list">{faqs}</div></section>
    {request(page['nav'].lower())}
    <section class="related"><div class="section-heading"><div><span class="eyebrow">Explore more</span><h2>Other appliances we cover.</h2></div></div><div class="service-grid related-grid">{related_cards}</div></section>'''
    return shell(page['nav'], slug, content)


(OUT / 'index.html').write_text(home(), encoding='utf-8')
for slug, page in PAGES.items():
    (OUT / f'{slug}.html').write_text(detail(slug, page), encoding='utf-8')
print('Built 7 PAR concept pages in', OUT)
