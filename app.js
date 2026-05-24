const glyphs = {
  ni: {
    char: "你",
    pinyin: "nǐ",
    title: "你 = bạn",
    meaning:
      "Dùng để gọi người đối diện: bạn, anh, chị, em. Trong cụm 你好, 你 là người mình đang chào.",
    strokes: [
      { name: "phẩy", path: "M139 88 C127 125 105 166 82 205" },
      { name: "sổ", path: "M132 152 L132 318" },
      { name: "phẩy", path: "M226 88 C202 123 176 148 145 170" },
      { name: "ngang móc", path: "M197 145 L318 145 L296 190" },
      { name: "sổ móc", path: "M257 170 L257 305 C257 326 235 326 225 314" },
      { name: "phẩy", path: "M214 218 C195 255 175 286 146 316" },
      { name: "chấm", path: "M298 220 C318 250 333 280 345 314" }
    ],
    components: [
      {
        glyph: "亻",
        name: "nhân đứng: người",
        text: "Bộ này gắn với con người. Ở đây nó gợi ý chữ này liên quan đến người đối diện."
      },
      {
        glyph: "尔",
        name: "phần âm: ěr / nǐ",
        text: "Phần bên phải chủ yếu giúp gợi âm đọc lịch sử. Không nên cắt nghĩa từng nét thành câu chuyện quá mức."
      }
    ],
    mnemonicTitle: "Mẹo nhớ",
    mnemonic:
      "Thấy 亻 thì nghĩ đến người. 你 là 'người kia' mình đang nói với: bạn."
  },
  hao: {
    char: "好",
    pinyin: "hǎo",
    title: "好 = tốt, được, thích",
    meaning:
      "好 nghĩa là tốt, ổn, được. 你好 ghép lại thành lời chào: 'bạn tốt/anh ổn chứ' rồi trở thành 'xin chào'.",
    strokes: [
      { name: "phẩy chấm", path: "M122 104 C152 168 149 250 92 316" },
      { name: "phẩy", path: "M180 104 C155 188 124 256 78 324" },
      { name: "ngang", path: "M77 226 L204 226" },
      { name: "ngang móc", path: "M236 118 L326 118 L284 174" },
      { name: "sổ móc", path: "M284 174 L284 315 C284 334 264 332 250 320" },
      { name: "ngang", path: "M225 222 L346 222" }
    ],
    components: [
      {
        glyph: "女",
        name: "nữ: người phụ nữ",
        text: "Bộ bên trái. Trong nhiều chữ, 女 liên quan đến người, gia đình, giới tính, quan hệ."
      },
      {
        glyph: "子",
        name: "tử: đứa trẻ",
        text: "Bộ bên phải. Cách giải thích phổ biến: mẹ và con tạo cảm giác tốt lành, êm ấm."
      }
    ],
    mnemonicTitle: "Mẹo nhớ",
    mnemonic:
      "女 + 子 thành 好: hình ảnh mẹ và con, nên nhớ là 'tốt/lành'. Đây là mẹo học, không phải lúc nào cũng là nghĩa gốc tuyệt đối."
  },
  wo: {
    char: "我",
    pinyin: "wǒ",
    title: "我 = tôi",
    meaning:
      "我 là đại từ ngôi thứ nhất: tôi, mình. Câu quick win quan trọng nhất là 我叫... = tôi tên là...",
    strokes: [
      { name: "phẩy", path: "M102 112 C150 98 198 88 252 72" },
      { name: "ngang", path: "M92 167 L270 156" },
      { name: "sổ móc", path: "M174 97 L174 304 C174 330 145 321 132 303" },
      { name: "hất", path: "M82 250 C135 235 185 219 236 195" },
      { name: "cong móc", path: "M238 80 C250 168 280 250 336 313" },
      { name: "phẩy", path: "M307 88 C286 116 267 141 246 164" },
      { name: "chấm", path: "M294 136 C318 150 337 167 353 190" }
    ],
    components: [
      {
        glyph: "我",
        name: "đại từ: tôi",
        text: "Với người mới học, ưu tiên nhớ cách dùng trong câu. Không cần ép tách nghĩa từng nét của chữ này."
      },
      {
        glyph: "找",
        name: "dễ liên tưởng",
        text: "我 xuất hiện trong vài chữ khác như 找. Nhận mặt chữ trước, rồi học sâu sau."
      }
    ],
    mnemonicTitle: "Mẹo nhớ",
    mnemonic:
      "Câu đầu tiên nên thuộc là 我叫 + tên. Biết 我 là mở được rất nhiều câu tự giới thiệu."
  },
  jiao: {
    char: "叫",
    pinyin: "jiào",
    title: "叫 = gọi, tên là",
    meaning:
      "叫 nghĩa gốc là gọi/kêu. Trong mẫu 我叫 Nam, nó hoạt động như 'tôi được gọi là Nam' hay tự nhiên hơn: tôi tên là Nam.",
    strokes: [
      { name: "sổ", path: "M96 135 L96 256" },
      { name: "ngang gập", path: "M96 135 L183 135 L183 256" },
      { name: "ngang", path: "M96 256 L183 256" },
      { name: "sổ", path: "M261 86 L261 315" },
      { name: "sổ gập", path: "M333 118 L333 296 L255 296" }
    ],
    components: [
      {
        glyph: "口",
        name: "khẩu: miệng",
        text: "Bên trái là miệng, nên hợp với hành động gọi, nói, kêu."
      },
      {
        glyph: "丩",
        name: "phần gợi âm",
        text: "Bên phải giúp gợi âm/lịch sử chữ. Với app học nhanh, chỉ cần nhớ 叫 dùng trong tự giới thiệu."
      }
    ],
    mnemonicTitle: "Mẫu câu ăn ngay",
    mnemonic:
      "我叫 Nam = Tôi tên là Nam. Đây là quick win tốt vì học xong dùng được liền."
  },
  qiu: {
    char: "囚",
    pinyin: "qiú",
    title: "囚 = tù nhân",
    meaning:
      "Đây là ví dụ anh nhắc: người ở trong khung vây quanh thì thành ý 'bị giam'. Chữ này khác với 你 trong 你好.",
    strokes: [
      { name: "sổ", path: "M104 92 L104 326" },
      { name: "ngang gập", path: "M104 92 L322 92 L322 326" },
      { name: "ngang", path: "M104 326 L322 326" },
      { name: "phẩy", path: "M218 150 C198 203 178 255 151 292" },
      { name: "mác", path: "M219 152 C242 207 267 252 298 292" }
    ],
    components: [
      {
        glyph: "囗",
        name: "vi: khung bao",
        text: "Khung bao quanh, trong cách nhớ có thể hiểu như tường/vòng vây."
      },
      {
        glyph: "人",
        name: "nhân: người",
        text: "Người nằm trong khung, nên tạo ý 'bị giam, tù nhân'."
      }
    ],
    mnemonicTitle: "Dễ nhầm với câu chuyện nét",
    mnemonic:
      "Cách 'người trong bốn bức tường' hợp với 囚, không phải 你. Với 你, 亻 là bộ người, còn 尔 nghiêng về gợi âm."
  }
};

const phraseDeck = {
  hello: {
    title: "Chào một người mới",
    goal: "Mục tiêu: gặp ai đó thì nói được xin chào, rồi biết 你 và 好 nằm trong câu.",
    hanzi: "你好！",
    pinyin: "Nǐ hǎo!",
    meaning: "Xin chào.",
    focus: "ni"
  },
  name: {
    title: "Tự giới thiệu tên",
    goal: "Mục tiêu: nói được tên mình bằng mẫu 我叫 + tên.",
    hanzi: "我叫 Nam。",
    pinyin: "Wǒ jiào Nam.",
    meaning: "Tôi tên là Nam.",
    focus: "wo"
  },
  askName: {
    title: "Hỏi tên người đối diện",
    goal: "Mục tiêu: hỏi tên trước khi học cấu trúc dài hơn.",
    hanzi: "你叫什么名字？",
    pinyin: "Nǐ jiào shénme míngzi?",
    meaning: "Bạn tên là gì?",
    focus: "jiao"
  },
  thanks: {
    title: "Cảm ơn lịch sự",
    goal: "Mục tiêu: có một câu kết thúc hội thoại cực ngắn, dễ dùng.",
    hanzi: "谢谢！",
    pinyin: "Xièxie!",
    meaning: "Cảm ơn.",
    focus: "hao"
  }
};

const authStorageKey = "han-viet-glyph-lab-users";
const sessionStorageKey = "han-viet-glyph-lab-session";
const guestProgressKey = "han-viet-glyph-lab-guest-progress";
const scorePassThreshold = 80;

const state = {
  activeKey: "ni",
  activePhrase: "hello",
  currentStroke: 0,
  completed: new Set(),
  drawing: false,
  userPoints: [],
  xp: 0,
  streak: 1,
  lastScore: null,
  authMode: "login",
  currentUser: null
};

const $ = (selector) => document.querySelector(selector);
const guideSvg = $("#guideSvg");
const canvas = $("#drawCanvas");
const ctx = canvas.getContext("2d");
const strokeTrack = $("#strokeTrack");
const authDialog = $("#authDialog");

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(authStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(authStorageKey, JSON.stringify(users));
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function makeSalt() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256(value) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(password, salt) {
  return sha256(`${salt}:${password}`);
}

function getProgressKey() {
  return state.currentUser ? `${authStorageKey}:${state.currentUser.email}:progress` : guestProgressKey;
}

function readProgress() {
  try {
    return JSON.parse(localStorage.getItem(getProgressKey())) || {};
  } catch {
    return {};
  }
}

function hasProgressFor(email) {
  return Boolean(localStorage.getItem(`${authStorageKey}:${email}:progress`));
}

function readGuestProgress() {
  try {
    return JSON.parse(localStorage.getItem(guestProgressKey)) || null;
  } catch {
    return null;
  }
}

function saveProgress() {
  const progress = {
    xp: state.xp,
    streak: state.streak,
    activePhrase: state.activePhrase,
    activeKey: state.activeKey,
    displayName: state.currentUser?.displayName || null,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(getProgressKey(), JSON.stringify(progress));
}

function loadProgress() {
  const progress = readProgress();
  state.xp = Number.isFinite(progress.xp) ? progress.xp : 0;
  state.streak = Number.isFinite(progress.streak) ? progress.streak : 1;
  if (progress.activePhrase && phraseDeck[progress.activePhrase]) {
    state.activePhrase = progress.activePhrase;
  }
  if (progress.activeKey && glyphs[progress.activeKey]) {
    state.activeKey = progress.activeKey;
  } else {
    state.activeKey = phraseDeck[state.activePhrase].focus;
  }
}

function syncScore() {
  $("#xpValue").textContent = state.xp;
  $("#streakValue").textContent = state.streak;
}

function updateScorePanel(score = null) {
  const panel = document.querySelector(".score-panel");
  const percent = $("#scorePercent");
  const verdict = $("#scoreVerdict");
  const hint = $("#scoreHint");
  const bar = $("#scoreBar");

  panel.classList.remove("pass", "fail");

  if (score === null) {
    percent.textContent = "--%";
    verdict.textContent = "Chưa chấm";
    hint.textContent = `Vẽ theo nét đang tô xanh, rồi bấm “Chấm nét vừa vẽ”. Đạt từ ${scorePassThreshold}% là qua.`;
    bar.style.width = "0%";
    syncNextButton();
    return;
  }

  const clampedScore = Math.max(0, Math.min(100, score));
  const passed = clampedScore >= scorePassThreshold;
  percent.textContent = `${clampedScore}%`;
  verdict.textContent = passed ? "Đạt" : "Chưa đạt";
  hint.textContent = passed
    ? "Nét này đủ khớp. Bấm “Nét tiếp” để qua nét kế."
    : `Cần từ ${scorePassThreshold}%. Vẽ sát nét xanh hơn rồi chấm lại.`;
  bar.style.width = `${clampedScore}%`;
  panel.classList.add(passed ? "pass" : "fail");
  syncNextButton();
}

function syncNextButton() {
  const glyph = glyphs[state.activeKey];
  const isCurrentDone = state.completed.has(state.currentStroke);
  const isLastStroke = state.currentStroke >= glyph.strokes.length - 1;
  const nextButton = $("#nextBtn");
  nextButton.disabled = !isCurrentDone || isLastStroke;
  nextButton.textContent = isLastStroke && isCurrentDone ? "Đã xong" : "Nét tiếp";
}

function renderAccount() {
  const accountName = state.currentUser?.displayName || "Khách";
  $("#accountName").textContent = accountName;
  $("#accountStatus").textContent = state.currentUser
    ? `${state.currentUser.email} · progress đã lưu`
    : "Progress chỉ lưu trên máy này";
  $("#authOpenBtn").hidden = Boolean(state.currentUser);
  $("#logoutBtn").hidden = !state.currentUser;
}

function loadSession() {
  const email = localStorage.getItem(sessionStorageKey);
  if (!email) return;

  const users = getUsers();
  if (users[email]) {
    state.currentUser = {
      email,
      displayName: users[email].displayName
    };
  } else {
    localStorage.removeItem(sessionStorageKey);
  }
}

function setAuthMode(mode) {
  state.authMode = mode;
  const isSignup = mode === "signup";
  $("#authTitle").textContent = isSignup ? "Đăng ký" : "Đăng nhập";
  $("#authSubmitBtn").textContent = isSignup ? "Tạo tài khoản" : "Đăng nhập";
  $("#displayNameField").hidden = !isSignup;
  $("#passwordInput").autocomplete = isSignup ? "new-password" : "current-password";
  setAuthMessage("");

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authMode === mode);
  });
}

function setAuthMessage(message, kind = "error") {
  const element = $("#authMessage");
  element.textContent = message;
  element.classList.toggle("success", kind === "success");
}

function openAuthDialog(mode = "login") {
  setAuthMode(mode);
  $("#authForm").reset();
  if (authDialog.showModal) {
    authDialog.showModal();
  } else {
    authDialog.setAttribute("open", "");
  }
  $("#emailInput").focus();
}

function closeAuthDialog() {
  authDialog.close?.();
  authDialog.removeAttribute("open");
}

async function submitAuth(event) {
  event.preventDefault();
  const email = normalizeEmail($("#emailInput").value);
  const password = $("#passwordInput").value;
  const displayName = $("#displayNameInput").value.trim() || email.split("@")[0] || "Bạn học";

  if (!email || password.length < 6) {
    setAuthMessage("Email hợp lệ và mật khẩu từ 6 ký tự nha.");
    return;
  }

  const users = getUsers();
  const existing = users[email];

  if (state.authMode === "signup") {
    if (existing) {
      setAuthMessage("Email này đã có tài khoản. Chuyển qua đăng nhập nha.");
      return;
    }

    const salt = makeSalt();
    users[email] = {
      email,
      displayName,
      salt,
      passwordHash: await hashPassword(password, salt),
      createdAt: new Date().toISOString()
    };
    saveUsers(users);
    loginAs(users[email]);
    setAuthMessage("Tạo tài khoản xong, progress sẽ lưu theo user này.", "success");
    setTimeout(closeAuthDialog, 450);
    return;
  }

  if (!existing) {
    setAuthMessage("Chưa có tài khoản này. Bấm Đăng ký để tạo mới.");
    return;
  }

  const passwordHash = await hashPassword(password, existing.salt);
  if (passwordHash !== existing.passwordHash) {
    setAuthMessage("Mật khẩu chưa đúng.");
    return;
  }

  loginAs(existing);
  setAuthMessage("Đăng nhập xong.", "success");
  setTimeout(closeAuthDialog, 450);
}

function loginAs(user) {
  const guestProgress = readGuestProgress();
  state.currentUser = {
    email: user.email,
    displayName: user.displayName
  };
  localStorage.setItem(sessionStorageKey, user.email);
  if (!hasProgressFor(user.email) && guestProgress) {
    localStorage.setItem(getProgressKey(), JSON.stringify(guestProgress));
  }
  loadProgress();
  syncScore();
  renderAccount();
  renderPhrase();
  renderGlyph();
}

function logout() {
  saveProgress();
  state.currentUser = null;
  localStorage.removeItem(sessionStorageKey);
  loadProgress();
  syncScore();
  renderAccount();
  renderPhrase();
  renderGlyph();
}

function renderGlyph() {
  const glyph = glyphs[state.activeKey];
  state.currentStroke = 0;
  state.completed = new Set();
  state.userPoints = [];
  state.lastScore = null;

  $("#targetChar").textContent = glyph.char;
  $("#charPinyin").textContent = glyph.pinyin;
  $("#strokeCount").textContent = `${glyph.strokes.length} nét`;
  $("#lessonTitle").textContent = glyph.title;
  $("#lessonMeaning").textContent = glyph.meaning;
  $("#mnemonicTitle").textContent = glyph.mnemonicTitle;
  $("#mnemonicText").textContent = glyph.mnemonic;

  document.querySelectorAll(".char-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.char === state.activeKey);
  });

  $("#components").innerHTML = glyph.components
    .map(
      (item) => `
        <article class="component-item">
          <div class="component-glyph">${item.glyph}</div>
          <div>
            <strong>${item.name}</strong>
            <p>${item.text}</p>
          </div>
        </article>
      `
    )
    .join("");

  renderGuide();
  renderStrokeTrack();
  clearCanvas();
  updateScorePanel();
}

function renderPhrase() {
  const phrase = phraseDeck[state.activePhrase];
  $("#missionTitle").textContent = phrase.title;
  $("#missionGoal").textContent = phrase.goal;
  $("#phraseHanzi").textContent = phrase.hanzi;
  $("#phrasePinyin").textContent = phrase.pinyin;
  $("#phraseMeaning").textContent = phrase.meaning;

  document.querySelectorAll(".phrase-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.phrase === state.activePhrase);
  });
}

function renderGuide(animatingIndex = null) {
  const glyph = glyphs[state.activeKey];
  guideSvg.innerHTML = glyph.strokes
    .map((stroke, index) => {
      const classes = ["guide-stroke"];
      if (index === state.currentStroke) classes.push("current");
      if (state.completed.has(index)) classes.push("done");
      if (index === animatingIndex) classes.push("animating");
      return `<path class="${classes.join(" ")}" d="${stroke.path}" />`;
    })
    .join("");
}

function renderStrokeTrack() {
  const glyph = glyphs[state.activeKey];
  strokeTrack.innerHTML = glyph.strokes
    .map((stroke, index) => {
      const classes = ["stroke-chip"];
      if (index === state.currentStroke) classes.push("active");
      if (state.completed.has(index)) classes.push("done");
      return `<span class="${classes.join(" ")}">${index + 1}. ${stroke.name}</span>`;
    })
    .join("");
  syncNextButton();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function canvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  const source = touch || event;
  return {
    x: ((source.clientX - rect.left) / rect.width) * canvas.width,
    y: ((source.clientY - rect.top) / rect.height) * canvas.height
  };
}

function startDraw(event) {
  event.preventDefault();
  state.drawing = true;
  state.userPoints = [];
  const point = canvasPoint(event);
  state.userPoints.push(point);
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function moveDraw(event) {
  if (!state.drawing) return;
  event.preventDefault();
  const point = canvasPoint(event);
  state.userPoints.push(point);
  ctx.strokeStyle = "#20394d";
  ctx.lineWidth = 18;
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
}

function endDraw() {
  if (!state.drawing) return;
  state.drawing = false;
}

function samplePath(pathData, samples = 28) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  guideSvg.appendChild(path);
  const length = path.getTotalLength();
  const points = Array.from({ length: samples }, (_, index) =>
    path.getPointAtLength((length * index) / (samples - 1))
  );
  path.remove();
  return points;
}

function scoreStroke() {
  const glyph = glyphs[state.activeKey];
  const stroke = glyph.strokes[state.currentStroke];
  if (!stroke || state.userPoints.length < 3) return 0;

  const guidePoints = samplePath(stroke.path);
  const tolerance = 34;
  const matched = guidePoints.filter((guidePoint) =>
    state.userPoints.some((point) => distance(point, guidePoint) < tolerance)
  ).length;

  return Math.round((matched / guidePoints.length) * 100);
}

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function checkCurrentStroke() {
  const score = scoreStroke();
  state.lastScore = score;
  updateScorePanel(score);

  if (score >= scorePassThreshold) {
    const wasAlreadyDone = state.completed.has(state.currentStroke);
    state.completed.add(state.currentStroke);
    if (!wasAlreadyDone) {
      state.xp += 10;
      const glyph = glyphs[state.activeKey];
      if (state.completed.size >= glyph.strokes.length) {
        state.xp += 40;
        $("#scoreHint").textContent = "Hoàn thành chữ này. Nhận thêm XP hoàn thành.";
      }
      syncScore();
      saveProgress();
    }
    renderGuide();
    renderStrokeTrack();
  } else {
    flashBoard();
  }
}

function nextStroke() {
  const glyph = glyphs[state.activeKey];
  if (!state.completed.has(state.currentStroke)) {
    $("#scoreHint").textContent = `Chấm đạt ${scorePassThreshold}% trước rồi mới qua nét tiếp.`;
    flashBoard();
    syncNextButton();
    return;
  }

  if (state.currentStroke < glyph.strokes.length - 1) {
    state.currentStroke += 1;
  }
  state.userPoints = [];
  state.lastScore = null;
  renderGuide();
  renderStrokeTrack();
  updateScorePanel();
}

function flashBoard() {
  const stage = $("#gridStage");
  stage.animate(
    [
      { transform: "translateX(0)", borderColor: "rgba(200, 79, 95, 0.55)" },
      { transform: "translateX(-4px)", borderColor: "rgba(200, 79, 95, 0.95)" },
      { transform: "translateX(4px)", borderColor: "rgba(200, 79, 95, 0.95)" },
      { transform: "translateX(0)", borderColor: "rgba(200, 79, 95, 0.55)" }
    ],
    { duration: 260, easing: "ease-out" }
  );
}

async function playStrokes() {
  const glyph = glyphs[state.activeKey];
  state.completed = new Set();
  clearCanvas();
  for (let index = 0; index < glyph.strokes.length; index += 1) {
    state.currentStroke = index;
    renderGuide(index);
    renderStrokeTrack();
    await wait(920);
    state.completed.add(index);
  }
  state.currentStroke = 0;
  renderGuide();
  renderStrokeTrack();
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.querySelectorAll(".char-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeKey = button.dataset.char;
    renderGlyph();
  });
});

document.querySelectorAll(".phrase-tab").forEach((button) => {
  button.addEventListener("click", () => {
    state.activePhrase = button.dataset.phrase;
    state.activeKey = phraseDeck[state.activePhrase].focus;
    renderPhrase();
    renderGlyph();
    saveProgress();
  });
});

$("#nameInput").addEventListener("input", (event) => {
  const name = event.target.value.trim() || "Nam";
  $("#nameOutput").textContent = `我叫 ${name}。`;
  if (state.activePhrase === "name") {
    $("#phraseHanzi").textContent = `我叫 ${name}。`;
    $("#phraseMeaning").textContent = `Tôi tên là ${name}.`;
  }
});

canvas.addEventListener("pointerdown", startDraw);
canvas.addEventListener("pointermove", moveDraw);
canvas.addEventListener("pointerup", endDraw);
canvas.addEventListener("pointercancel", endDraw);

$("#playBtn").addEventListener("click", playStrokes);
$("#checkBtn").addEventListener("click", checkCurrentStroke);
$("#nextBtn").addEventListener("click", nextStroke);
$("#clearBtn").addEventListener("click", () => {
  state.completed = new Set();
  state.currentStroke = 0;
  state.userPoints = [];
  state.lastScore = null;
  clearCanvas();
  renderGuide();
  renderStrokeTrack();
  updateScorePanel();
});

$("#authOpenBtn").addEventListener("click", () => openAuthDialog("login"));
$("#logoutBtn").addEventListener("click", logout);
$("#authCloseBtn").addEventListener("click", closeAuthDialog);
$("#authForm").addEventListener("submit", submitAuth);
document.querySelectorAll(".auth-tab").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

loadSession();
loadProgress();
syncScore();
renderAccount();
setAuthMode("login");
renderPhrase();
renderGlyph();
