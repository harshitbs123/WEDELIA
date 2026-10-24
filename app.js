(() => {
  const products = [
    {
      id: "wd-201",
      name: "Parisian Café Chic",
      category: "western",
      kind: "Corset & ruffle skirt",
      occasion: "Birthday · Café date · Photoshoot",
      price: 299,
      deposit: 400,
      colour: "Ivory floral & espresso brown",
      size: "Top and skirt sizing to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1515886657613-9f3515b0c78f-1.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
      tag: "City-girl edit",
      description: "A romantic floral corset paired with a layered dark skirt. Exact measurements, condition and availability must be confirmed by the owner."
    },
    {
      id: "wd-202",
      name: "Dark Romance Lace Top",
      category: "statement",
      kind: "Lace statement top",
      occasion: "Concert · Night out · Photoshoot",
      price: 249,
      deposit: 350,
      colour: "Chocolate brown",
      size: "Size to confirm with owner",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1529139574466-a303027c1d8b.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
      tag: "After-dark edit",
      description: "A dramatic lace-inspired statement piece for styling with denim or a skirt. Fit and garment condition are confirmed before a real rental."
    },
    {
      id: "wd-203",
      name: "Sage Garden Co-ord",
      category: "boho",
      kind: "Boho co-ord",
      occasion: "Campus day · Brunch · Day out",
      price: 279,
      deposit: 350,
      colour: "Sage green & ivory",
      size: "Top and skirt sizing to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1490481651871-ab68de25d43d.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85",
      tag: "Soft-girl edit",
      description: "A light, floral-inspired co-ord concept for daytime plans. Actual fabric, fit and availability must be verified."
    },
    {
      id: "wd-204",
      name: "Bohemian Sunset Set",
      category: "boho",
      kind: "Boho statement set",
      occasion: "Fest · Cultural evening · Photoshoot",
      price: 349,
      deposit: 450,
      colour: "Burgundy, cream & earthy prints",
      size: "Measurements to confirm",
      condition: "Sample listing — inspect before handover",
      image: "assets/images/photo-1539109136881-3be0616acf4b.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85",
      tag: "Boho mood",
      description: "An earthy, layered bohemian-inspired look for statement occasions. The displayed price is illustrative, not a live offer."
    },
    {
      id: "wd-205",
      name: "Golden Hour Mini Dress",
      category: "dress",
      kind: "Printed mini dress",
      occasion: "Birthday · Party · Dinner",
      price: 299,
      deposit: 400,
      colour: "Golden yellow & brown print",
      size: "Size to confirm with owner",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1539008835657-9e8e9680c956.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=800&q=85",
      tag: "Main-character look",
      description: "A playful statement dress for birthdays and evenings out. Fit, condition and availability would be verified before accepting a request."
    },
    {
      id: "wd-206",
      name: "Crimson Garden Dress",
      category: "dress",
      kind: "Floral occasion dress",
      occasion: "Birthday · Date · Celebration",
      price: 329,
      deposit: 400,
      colour: "Crimson red floral",
      size: "Size to confirm with owner",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1496747611176-843222e1e57c.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
      tag: "Romantic edit",
      description: "A romantic floral dress concept for celebrations. The owner would confirm measurements and condition before any rental."
    },
    {
      id: "wd-207",
      name: "Vintage Band Tee & Cheetah",
      category: "statement",
      kind: "Graphic tee & mini skirt",
      occasion: "Concert · Casual fest · Photoshoot",
      price: 249,
      deposit: 350,
      colour: "Charcoal, leopard print & burgundy",
      size: "Tee and skirt sizes to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1525507119028-ed4c629a60a3.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=85",
      tag: "Indie sleaze",
      description: "A playful vintage-inspired pairing for casual events and photoshoots. Exact items and fit need owner confirmation."
    },
    {
      id: "wd-208",
      name: "Midnight Gothic Look",
      category: "statement",
      kind: "Black lace statement outfit",
      occasion: "Concert · Theme party · Night out",
      price: 329,
      deposit: 450,
      colour: "Black",
      size: "Size and included pieces to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1524504388940-b1c1722653e1.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
      tag: "Dark feminine",
      description: "A dark, dramatic outfit concept for a themed event or night out. All images and terms are illustrative for this prototype."
    },
    {
      id: "wd-209",
      name: "Olive Boho Tie-Front Top",
      category: "boho",
      kind: "Boho top",
      occasion: "Brunch · Campus · Day out",
      price: 199,
      deposit: 300,
      colour: "Olive green",
      size: "Size to confirm with owner",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1483985988355-763728e1935b.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85",
      tag: "Everyday statement",
      description: "A versatile boho-inspired top for relaxed styling. The real garment's condition and sizing must be checked."
    },
    {
      id: "wd-210",
      name: "Soft Goth Layered Look",
      category: "statement",
      kind: "Oversized knit & lace styling",
      occasion: "Winter fest · Concert · Night out",
      price: 279,
      deposit: 350,
      colour: "Black",
      size: "Knit and accessories to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1509631179647-0177331693ae.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
      tag: "Soft goth",
      description: "An oversized dark look concept with lace styling. This listing demonstrates how outfit details and rental terms could appear."
    },
    {
      id: "wd-211",
      name: "Ivory Ruffle Boho Skirt Set",
      category: "boho",
      kind: "Corset & layered skirt",
      occasion: "Fest · Photoshoot · Celebration",
      price: 349,
      deposit: 450,
      colour: "Ivory, tan & chocolate",
      size: "Top and skirt sizing to confirm",
      condition: "Sample listing — condition must be checked",
      image: "assets/images/photo-1524504388940-b1c1722653e1.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
      tag: "Western boho",
      description: "A layered, western-inspired styling concept. Actual pieces, measurements and availability must be confirmed by the owner."
    }
  ];

  const grid = document.getElementById("productGrid");
  const search = document.getElementById("searchInput");
  const filters = document.getElementById("filters");
  const bookingDialog = document.getElementById("bookingDialog");
  const ownerDialog = document.getElementById("ownerDialog");
  const bookingContent = document.getElementById("bookingContent");
  const ownerForm = document.getElementById("ownerForm");
  const toast = document.getElementById("toast");

  let activeFilter = "all";
  let selectedProduct = null;
  let saved = new Set();
  let toastTimer;

  const money = value => "₹" + Number(value).toLocaleString("en-IN");
  const safe = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3100);
  }

  function renderProducts() {
    if (!grid) return;
    const term = (search ? search.value || "" : "").trim().toLowerCase();
    const matches = products.filter(p => 
      (activeFilter === "all" || p.category === activeFilter) &&
      [p.name, p.kind, p.occasion, p.colour].join(" ").toLowerCase().includes(term)
    );

    grid.innerHTML = matches.map(p => `
      <article class="product-card group relative min-w-0">
        <div class="product-image relative h-[285px] max-[1000px]:h-[330px] max-[700px]:h-[245px] max-[390px]:h-[204px] overflow-hidden bg-[#eee5ea]">
          <img src="${safe(p.image)}" alt="${safe(p.kind)} sample listing: ${safe(p.name)}" loading="lazy" class="w-full h-full object-cover block transition-transform duration-[450ms] group-hover:scale-[1.045]" onerror="this.onerror=null;this.src='${safe(p.fallbackImage)}'">
          <span class="product-tag absolute left-[10px] top-[10px] bg-cream text-plum text-[8px] tracking-[1px] uppercase px-2 py-[6px] font-bold">${safe(p.tag)}</span>
          <button class="heart-button ${saved.has(p.id) ? "saved text-red" : "text-plum"} absolute right-[10px] top-[10px] border-0 w-[31px] h-[31px] rounded-full bg-[#fffdf0eb] text-[17px] flex items-center justify-center cursor-pointer transition-colors leading-none" data-save="${p.id}" aria-label="${saved.has(p.id) ? "Remove saved outfit" : "Save outfit"}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? "♥" : "♡"}</button>
        </div>
        <div class="product-info pt-[13px] px-[1px]">
          <div class="product-category text-[8px] text-[#8c7e8d] tracking-[1.4px] uppercase font-bold">${safe(p.kind)} · DEMO</div>
          <h3 class="product-name font-serif font-normal text-[17px] max-[700px]:text-[15px] leading-[1.35] my-1 mb-2">${safe(p.name)}</h3>
          <div class="product-meta flex justify-between items-center gap-[7px] text-[10px] max-[700px]:text-[9px] text-[#776c79]">
            <span>${safe(p.occasion)}</span>
            <span class="price"><strong class="text-[14px] max-[700px]:text-[12px] text-plum font-bold">${money(p.price)}</strong> <small class="text-[#8b7e8a] text-[9px] font-normal">/ event*</small></span>
          </div>
          <button class="product-cta flex items-center justify-between w-full bg-transparent border-0 border-t border-[#e7dfe5] mt-3 py-[11px] text-[10px] text-plum font-bold text-left cursor-pointer hover:text-plum-dark" data-product="${p.id}">
            <span>View outfit &amp; terms</span>
            <span class="text-[16px]">↗</span>
          </button>
        </div>
      </article>`).join("");

    if (!matches.length) {
      grid.innerHTML = '<div class="empty-state col-span-full py-[38px] px-5 text-center border border-dashed border-[#d9cadb] text-muted text-[13px]">No sample outfits match that search. Try another category or keyword.</div>';
    }
  }

  function openBooking(id) {
    selectedProduct = products.find(p => p.id === id);
    if (!selectedProduct) return;
    const p = selectedProduct;
    bookingContent.innerHTML = `
      <div class="booking-product grid grid-cols-[125px_1fr] max-[700px]:grid-cols-[100px_1fr] gap-[17px] max-[700px]:gap-[13px] mt-[18px]">
        <img src="${safe(p.image)}" alt="${safe(p.name)}" class="w-[125px] max-[700px]:w-[100px] h-[166px] max-[700px]:h-[139px] object-cover bg-[#eee]" onerror="this.onerror=null;this.src='${safe(p.fallbackImage)}'">
        <div>
          <span class="product-category text-[8px] text-[#8c7e8d] tracking-[1.4px] uppercase font-bold">${safe(p.kind)} · SAMPLE LISTING</span>
          <h3 class="font-serif font-normal text-[19px] leading-[1.3] my-1 mb-2">${safe(p.name)}</h3>
          <div class="booking-price text-[12px] text-plum font-bold">${money(p.price)} <small class="font-normal text-muted">/ proposed rental</small></div>
          <div class="booking-specs text-[10px] text-muted leading-[1.8] mt-[9px]">Refundable deposit (illustrative): ${money(p.deposit)}<br>${safe(p.size)}<br>${safe(p.condition)}</div>
        </div>
      </div>
      <p class="dialog-copy text-[11px] leading-[1.8] text-muted mt-3">Illustrative listing only. Rental duration, final price, deposit, garment condition and availability must be confirmed. No payment is collected here.</p>
      <h2 class="booking-title font-serif text-[35px] max-[700px]:text-[29px] leading-[1.15] tracking-[-0.8px] my-3 font-normal">Request this <em class="text-plum italic font-normal">look.</em></h2>
      <form id="bookingForm" class="form-stack flex flex-col gap-[13px] mt-5">
        <label class="flex flex-col gap-[6px] text-[10px] font-bold text-[#4a3d4d]">Your name
          <input name="name" required maxlength="80" autocomplete="name" placeholder="Name" class="w-full border border-[#ded3df] bg-white p-[11px_12px] rounded-[3px] outline-none text-[12px] text-ink min-h-[42px] focus:border-plum focus:ring-2 focus:ring-plum/10 transition-shadow">
        </label>
        <label class="flex flex-col gap-[6px] text-[10px] font-bold text-[#4a3d4d]">Email or phone for follow-up
          <input name="contact" required maxlength="120" placeholder="Contact detail" class="w-full border border-[#ded3df] bg-white p-[11px_12px] rounded-[3px] outline-none text-[12px] text-ink min-h-[42px] focus:border-plum focus:ring-2 focus:ring-plum/10 transition-shadow">
        </label>
        <label class="flex flex-col gap-[6px] text-[10px] font-bold text-[#4a3d4d]">Event date
          <input name="eventDate" type="date" required class="w-full border border-[#ded3df] bg-white p-[11px_12px] rounded-[3px] outline-none text-[12px] text-ink min-h-[42px] focus:border-plum focus:ring-2 focus:ring-plum/10 transition-shadow">
        </label>
        <label class="flex flex-col gap-[6px] text-[10px] font-bold text-[#4a3d4d]">Occasion
          <select name="occasion" required class="w-full border border-[#ded3df] bg-white p-[11px_12px] rounded-[3px] outline-none text-[12px] text-ink min-h-[42px] focus:border-plum focus:ring-2 focus:ring-plum/10 transition-shadow">
            <option value="">Choose an occasion</option>
            <option>College event / fest</option>
            <option>Freshers / farewell</option>
            <option>Puja / festival</option>
            <option>Birthday / party</option>
            <option>Wedding guest</option>
            <option>Other</option>
          </select>
        </label>
        <label class="flex flex-col gap-[6px] text-[10px] font-bold text-[#4a3d4d]">Anything we should know? (optional)
          <textarea name="note" rows="2" maxlength="500" placeholder="Size, pickup preference, questions…" class="w-full border border-[#ded3df] bg-white p-[11px_12px] rounded-[3px] outline-none text-[12px] text-ink min-h-[42px] focus:border-plum focus:ring-2 focus:ring-plum/10 transition-shadow resize-y"></textarea>
        </label>
        <input type="hidden" name="productId" value="${safe(p.id)}">
        <input type="hidden" name="productName" value="${safe(p.name)}">
        <button class="button button-plum form-submit w-full mt-[2px] min-h-[47px] px-[19px] py-[13px] rounded-[3px] border border-transparent inline-flex items-center justify-center gap-[22px] text-[11px] font-bold tracking-[0.25px] bg-plum text-white transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_8px_18px_rgba(57,33,65,0.11)] cursor-pointer" type="submit">
          <span>Send booking request</span>
          <span class="text-[14px]">↗</span>
        </button>
        <p class="form-disclaimer text-[9px] leading-[1.7] text-[#857888] m-0 font-normal">Prototype only: no booking is confirmed and no payment is taken. Request details are stored for demo testing; use test contact details during judging.</p>
        <div class="form-message text-[11px] rounded-[3px] leading-[1.7]" role="status" aria-live="polite"></div>
      </form>`;

    const dateInput = bookingContent.querySelector('input[name="eventDate"]');
    if (dateInput) {
      dateInput.min = new Date().toISOString().slice(0, 10);
    }
    bookingDialog.showModal();
    document.body.classList.add("no-scroll");
    const form = document.getElementById("bookingForm");
    if (form) form.addEventListener("submit", submitBooking);
  }

  async function sendForm(endpoint, payload, messageBox) {
    messageBox.className = "form-message text-[11px] rounded-[3px] leading-[1.7] p-3";
    messageBox.textContent = "Sending request…";
    const form = messageBox.closest("form");
    const buttons = form ? form.querySelectorAll('button[type="submit"]') : [];
    buttons.forEach(b => b.disabled = true);

    try {
      const response = await fetch("/api/" + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Could not submit the request right now.");
      }
      messageBox.className = "form-message success p-3 bg-[#edf4ee] text-[#2e6047] text-[11px] rounded-[3px] leading-[1.7]";
      messageBox.textContent = result.message || "Your prototype request has been recorded. This is not a confirmed booking.";
      messageBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
      return true;
    } catch (error) {
      // In local demo or preview mode without backend server, store safely in localStorage
      try {
        const storedKey = "wedelia_" + endpoint;
        const currentList = JSON.parse(localStorage.getItem(storedKey) || "[]");
        currentList.push({ timestamp: new Date().toISOString(), payload });
        localStorage.setItem(storedKey, JSON.stringify(currentList));
        messageBox.className = "form-message success p-3 bg-[#edf4ee] text-[#2e6047] text-[11px] rounded-[3px] leading-[1.7]";
        messageBox.textContent = "Your prototype interest has been recorded (demo mode). This is not a confirmed booking.";
        messageBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
        return true;
      } catch (e) {
        messageBox.className = "form-message error p-3 bg-[#fbebeb] text-[#8b2628] text-[11px] rounded-[3px] leading-[1.7]";
        messageBox.textContent = "This demo request could not be saved just now. Please try again.";
        return false;
      }
    } finally {
      buttons.forEach(b => b.disabled = false);
    }
  }

  async function submitBooking(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const message = form.querySelector(".form-message");
    const ok = await sendForm("rental-requests", {
      name: data.name,
      contact: data.contact,
      eventDate: data.eventDate,
      occasion: data.occasion,
      note: data.note,
      productId: data.productId,
      productName: data.productName
    }, message);
    if (ok) {
      const submit = form.querySelector('button[type="submit"]');
      if (submit) {
        submit.textContent = "Request recorded ✓";
        submit.disabled = true;
      }
    }
  }

  if (filters) {
    filters.addEventListener("click", event => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      activeFilter = button.dataset.filter;
      filters.querySelectorAll(".filter-chip").forEach(b => {
        b.classList.toggle("active", b === button);
      });
      renderProducts();
    });
  }

  if (search) {
    search.addEventListener("input", renderProducts);
  }

  if (grid) {
    grid.addEventListener("click", event => {
      const save = event.target.closest("[data-save]");
      if (save) {
        const id = save.dataset.save;
        if (saved.has(id)) {
          saved.delete(id);
        } else {
          saved.add(id);
        }
        renderProducts();
        showToast(saved.has(id) ? "Saved to your demo favourites." : "Removed from your demo favourites.");
        return;
      }
      const button = event.target.closest("[data-product]");
      if (button) openBooking(button.dataset.product);
    });
  }

  document.querySelectorAll("[data-open-owner]").forEach(button => {
    button.addEventListener("click", () => {
      if (ownerDialog) {
        ownerDialog.showModal();
        document.body.classList.add("no-scroll");
      }
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach(button => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (dialog) dialog.close();
      document.body.classList.remove("no-scroll");
    });
  });

  [bookingDialog, ownerDialog].filter(Boolean).forEach(dialog => {
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("no-scroll");
    });
  });

  if (ownerForm) {
    ownerForm.addEventListener("submit", async event => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      const message = form.querySelector(".form-message");
      const ok = await sendForm("owner-submissions", {
        name: data.name,
        contact: data.contact,
        ownerType: data.ownerType,
        garmentType: data.garmentType,
        details: data.details
      }, message);
      if (ok) {
        form.querySelectorAll('input, select, textarea, button[type="submit"]').forEach(el => el.disabled = true);
      }
    });
  }

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuToggle.textContent = open ? "×" : "☰";
    });
    mainNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  renderProducts();
})();
