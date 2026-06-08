import asyncio, os, json
from playwright.async_api import async_playwright

HTML = "/sessions/wonderful-brave-hawking/mnt/Portfolio/index.html"
OUT  = "/sessions/wonderful-brave-hawking/mnt/Portfolio/portfolio-audit-2026/qa_sage"
URL  = "file://" + HTML

console_msgs = []
page_errors  = []

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch(args=["--no-sandbox"])
        ctx = await browser.new_context(viewport={"width":1440,"height":1000}, device_scale_factor=2)
        page = await ctx.new_page()
        page.on("console", lambda m: console_msgs.append(f"[{m.type}] {m.text}"))
        page.on("pageerror", lambda e: page_errors.append(str(e)))

        await page.goto(URL, wait_until="networkidle")
        await page.wait_for_timeout(800)

        # 1. CLOSED trigger pill (before clicking)
        trig = page.locator(".ai-trigger")
        await trig.scroll_into_view_if_needed()
        await page.wait_for_timeout(400)
        await trig.screenshot(path=os.path.join(OUT,"01_trigger_closed.png"))
        trig_text = (await trig.inner_text()).strip()
        has_before = await page.evaluate("""() => {
          const t = document.querySelector('.ai-morph-slot:not(.is-open) .ai-trigger');
          if(!t) return null;
          const cs = getComputedStyle(t, '::before');
          return { content: cs.content, anim: cs.animationName, bg: cs.background.slice(0,80) };
        }""")
        print("TRIGGER TEXT:", repr(trig_text))
        print("TRIGGER ::before:", has_before)

        await trig.click()
        await page.wait_for_timeout(2700)

        # 2. OPEN dock full bounding box
        dock = page.locator(".ai-dock")
        await dock.screenshot(path=os.path.join(OUT,"02_dock_open.png"))

        av_info = await page.evaluate("""() => {
          const av = document.querySelector('.ai-avatar');
          const svg = av && av.querySelector('svg.sage-mark');
          if(!svg) return {found:false};
          const r = av.getBoundingClientRect();
          const paths = svg.querySelectorAll('path,circle');
          return { found:true, tag: svg.tagName, nPaths: paths.length,
            classes: [...svg.querySelectorAll('*')].map(e=>e.getAttribute('class')).filter(Boolean),
            box: {w: Math.round(r.width), h: Math.round(r.height)} };
        }""")
        print("HEADER AVATAR SVG:", json.dumps(av_info))

        align = await page.evaluate("""() => {
          const av = document.querySelector('.ai-avatar');
          const nm = document.querySelector('.ai-name');
          const sub = document.querySelector('.ai-subtitle');
          const r = e => { const b=e.getBoundingClientRect(); return {x:Math.round(b.x),y:Math.round(b.y),w:Math.round(b.width),h:Math.round(b.height),bottom:Math.round(b.bottom),right:Math.round(b.right)}; };
          return { avatar:r(av), name:r(nm), subtitle:r(sub) };
        }""")
        print("HEADER ALIGN:", json.dumps(align))
        await page.locator(".ai-header").screenshot(path=os.path.join(OUT,"03_header.png"))

        demo_info = await page.evaluate("""() => {
          const d = document.querySelector('[data-demo]');
          if(!d) return {present:false};
          const tag = d.querySelector('.ai-demo-tag');
          const cs = getComputedStyle(d);
          const vis = cs.display !== 'none' && d.offsetParent !== null;
          return { present:true, visible:vis, tagText: tag?tag.textContent.trim():null,
                   borderStyle: cs.borderStyle, borderTopStyle: cs.borderTopStyle, borderColor: cs.borderColor };
        }""")
        print("DEMO:", json.dumps(demo_info))

        chips_info = await page.evaluate("""() => {
          const chips = [...document.querySelectorAll('[data-chip-container] .ai-followup')];
          return chips.map((c,i) => {
            const cs = getComputedStyle(c);
            return { i, text:c.textContent.trim(), hero:c.classList.contains('is-hero'),
                     bg: cs.backgroundColor, color: cs.color, border: cs.borderColor,
                     hasSparkSvg: !!c.querySelector('svg') };
          });
        }""")
        print("CHIPS:", json.dumps(chips_info))
        await page.locator(".ai-followup-chips").screenshot(path=os.path.join(OUT,"04_chips.png"))

        # 3. Click avatar -> profile popover
        await page.locator(".ai-avatar").click()
        await page.wait_for_timeout(600)
        prof = await page.evaluate("""() => {
          const p = document.querySelector('#sage-profile');
          if(!p) return {found:false};
          const hidden = p.hasAttribute('hidden');
          const r = p.getBoundingClientRect();
          const cs = getComputedStyle(p);
          const svg = p.querySelector('svg');
          const clipped = r.left < 0 || r.top < 0 || r.right > 1440 || r.bottom > 1000;
          return { found:true, hidden, display:cs.display,
                   box:{x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height),bottom:Math.round(r.bottom),right:Math.round(r.right)},
                   clipped, nSvgEls: svg? svg.querySelectorAll('path,circle').length : 0 };
        }""")
        print("PROFILE POPOVER:", json.dumps(prof))
        try:
            await page.locator("#sage-profile").screenshot(path=os.path.join(OUT,"05_profile_popover.png"))
        except Exception as e:
            print("profile shot fallback:", e)
        await dock.screenshot(path=os.path.join(OUT,"05b_profile_in_dock.png"))

        await page.locator(".ai-avatar").click()
        await page.wait_for_timeout(300)

        # 4. Type JD-like text
        JD = ("We are looking for a senior product designer to join our team. "
              "Responsibilities: lead end-to-end design for enterprise dashboards, "
              "partner with engineering and product, and mentor junior designers across squads. "
              "Requirements: 7+ years of experience shipping complex B2B and internal tools, "
              "strong systems thinking, and a portfolio that demonstrates measurable outcomes.")
        print("JD length:", len(JD), "has resp:", "responsibilities:" in JD.lower(), "has req:", "requirements:" in JD.lower())
        inp = page.locator(".ai-input input")
        await inp.click()
        await inp.fill(JD)
        await page.wait_for_timeout(400)
        await inp.press("Enter")
        await page.wait_for_timeout(3800)

        post = await page.evaluate("""() => {
          const demo = document.querySelector('[data-demo]');
          const convo = document.querySelector('.ai-convo');
          const userMsgs = convo.querySelectorAll('.ai-msg-user');
          const toggle = document.querySelector('.ai-toggle');
          const welcome = document.querySelector('[data-welcome]');
          const wcs = welcome ? getComputedStyle(welcome) : null;
          return {
            demoExists: !!demo,
            demoVisible: demo ? (getComputedStyle(demo).display!=='none') : false,
            hasMessages: convo.classList.contains('has-messages'),
            nUserMsgs: userMsgs.length,
            userTexts: [...userMsgs].map(m=>m.textContent.trim().slice(0,40)),
            recruiterChecked: toggle ? toggle.getAttribute('aria-checked') : null,
            welcomeVisible: wcs ? (wcs.display!=='none') : null
          };
        }""")
        print("POST-SUBMIT:", json.dumps(post))
        await dock.screenshot(path=os.path.join(OUT,"06_after_jd_submit.png"))

        print("=== CONSOLE MESSAGES ===")
        for m in console_msgs: print(m)
        print("=== PAGE ERRORS ===")
        for e in page_errors: print(e)

        await browser.close()

asyncio.run(main())
