const errorCodes = [
  {
    code: "1010",
    title: "비상정지 알람",
    category: "비상정지",
    severity: "안전 확인",
    level: "high",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "조작반의 비상정지 스위치가 작동 중이거나 비상정지 릴레이 회로의 신호가 정상적이지 않을 때 발생합니다.",
    checks: [
      "주변에 위험 상황이나 비상정지가 필요한 원인이 있는지 먼저 확인하고, 작업자와 장비의 안전을 확보합니다.",
      "제공된 자료 기준 X8.4 신호는 1일 때 정상이며, 0이면 알람 조건입니다.",
      "비상정지 스위치 상태와 KAR EMG 릴레이의 24VDC 공급 여부는 자격을 갖춘 담당자가 확인하도록 합니다."
    ],
    resolution: [
      "비상정지 원인이 제거되고 장비 주변이 안전한 경우에만 담당자가 조작반 스위치를 매뉴얼 절차에 따라 복귀합니다.",
      "스위치 복귀 후에도 X8.4가 정상 신호가 아니거나 24VDC가 공급되지 않으면 릴레이 PCB의 CR EMG 릴레이와 회로를 담당자가 점검합니다."
    ],
    caution: "비상정지 회로나 인터록을 우회·강제 복귀하지 마세요. CR EMG 릴레이 교체와 전압 측정은 전원 차단 및 안전 절차를 따르는 자격자만 수행해야 합니다.",
    keywords: ["emergency stop alarm", "emergency stop", "emg", "비상정지", "비상 정지", "x8.4", "kar emg", "cr emg"]
  },
  {
    code: "1020",
    title: "스핀들 APM 알람",
    category: "스핀들",
    severity: "담당자 확인",
    level: "medium",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "메인 스핀들 유닛에서 발생하는 APM 알람입니다. 제공된 자료에는 세부 원인이나 복구 절차가 포함되어 있지 않습니다.",
    checks: [
      "장비 화면에 표시된 전체 알람 문구와 발생 시점, 직전 동작을 기록합니다.",
      "메인 스핀들 유닛의 표시 상태를 안전한 외부 위치에서 확인합니다.",
      "유지보수 매뉴얼의 Alarm List 중 1.4 Spindle Alarm 항목에서 해당 APM 알람을 확인합니다."
    ],
    resolution: [
      "알람 번호와 유닛 표시 내용을 장비 담당자 또는 제조사 서비스 담당자에게 전달하고, 매뉴얼의 해당 항목에 따라 조치합니다.",
      "원인이 확인되기 전에는 스핀들을 반복 재시작하거나 보호 설정을 변경하지 마세요."
    ],
    caution: "스핀들 및 구동부 내부 점검은 장비를 안전하게 정지한 뒤 자격을 갖춘 담당자만 수행해야 합니다.",
    keywords: ["spindle apm alarm", "spindle apm", "apm", "main spindle", "스핀들", "메인 스핀들"]
  },
  {
    code: "1030",
    title: "에어 압력 저하",
    category: "공압",
    severity: "주의",
    level: "high",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "공급 공기 압력이 확인되지 않을 때 발생하는 알람입니다. 제공된 자료에는 X8.3이 1일 때 정상이라고 안내되어 있습니다.",
    checks: [
      "기계에 공급되는 에어 압력이 정상인지, 공급원이나 에어 라인에 문제가 없는지 확인합니다.",
      "기계 화면에서 알람 상태를 확인합니다. 제공된 발췌 기준으로 X8.3=1은 정상 신호입니다.",
      "입력 신호 확인이나 회로 점검은 해당 기종의 전기도면을 아는 담당자에게 요청합니다."
    ],
    resolution: [
      "공급 압력이 낮거나 공급이 끊겼다면 설비의 공압 공급 상태를 담당자가 확인하도록 합니다.",
      "압력이 정상인데 알람이 계속되면 압력 스위치, 배선, 입력 신호를 점검하도록 유지보수 담당자에게 전달합니다."
    ],
    caution: "압축 공기 라인이나 기계 내부를 분해하지 마세요. 압력을 임의로 높이거나 인터록을 우회하지 말고 기종별 설정과 도면을 확인하세요.",
    keywords: ["air pressure down", "air", "압력", "에어", "공압", "x8.3"]
  },
  {
    code: "1040",
    title: "윤활유 부족",
    category: "윤활",
    severity: "주의",
    level: "high",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "베드 측으로 윤활유가 공급되지 않거나 베드 오일 박스의 검출 스위치 신호가 정상적이지 않을 때 발생할 수 있습니다. M02/M30 완료 후나 수동 모드에서 나타날 수 있다고 안내되어 있습니다.",
    checks: [
      "베드 측 윤활유 잔량과 공급 상태를 안전하게 확인합니다.",
      "제공된 자료 기준으로 X4.2=0이 정상 신호이며, 지정 No.8의 Bit 0은 0으로 안내되어 있습니다.",
      "유량이 정상인데도 알람이 남으면 베드 오일 박스 검출 스위치, 케이블, X4.2 입력을 담당자가 점검하도록 합니다."
    ],
    resolution: [
      "윤활유가 부족하면 장비에 지정된 종류의 윤활유를 담당자가 보충합니다.",
      "보충 후에도 알람이 지속되면 검출 스위치와 배선 상태를 확인하고, 장비 운전을 재개하기 전 원인을 해결합니다."
    ],
    caution: "윤활유 종류와 보충 방법은 장비 공식 매뉴얼을 확인하세요. 스위치나 입력 신호를 우회해 알람을 해제하지 마세요.",
    keywords: ["lubrication oil lack", "lubrication oil", "oil lack", "bed oil", "윤활유", "오일 부족", "x4.2"]
  },
  {
    code: "1050",
    title: "윤활 압력 저하",
    category: "윤활",
    severity: "주의",
    level: "high",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "윤활 모터가 켜진 뒤 설정 시간(TIMER1) 안에 윤활 압력이 확인되지 않을 때 발생하는 알람입니다. 제공된 자료에는 X4.3=0 및 지정 No.8 Bit 1=0이 정상이라고 안내되어 있습니다.",
    checks: [
      "윤활유 라인에 누유가 있는지 외부에서 확인하도록 담당자에게 요청합니다.",
      "윤활 모터에서 오일이 정상 공급되는지 확인하도록 합니다.",
      "윤활유 장치의 압력 스위치와 X4.3 신호를 담당자가 점검하도록 합니다."
    ],
    resolution: [
      "누유, 공급 불량, 압력 스위치 이상 중 원인을 확인한 뒤 담당자가 수리합니다.",
      "정상 신호와 압력이 확인되기 전에는 알람을 반복 초기화하거나 장비 운전을 계속하지 마세요."
    ],
    caution: "윤활 계통이나 전기 회로를 직접 분해하지 마세요. 타이머·파라미터를 임의로 변경하지 말고 해당 기종의 회로도와 설정표를 대조하세요.",
    keywords: ["lubrication pressure down", "lubrication pressure", "pressure down", "윤활 압력", "압력 저하", "x4.3", "timer1"]
  },
  {
    code: "1060",
    title: "베드 윤활 모터 열동계전기 트립",
    category: "모터",
    severity: "점검 후 조치",
    level: "high",
    source: "사용자 제공 매뉴얼 발췌",
    summary: "슬라이드 윤활 모터의 열동계전기가 트립된 상태입니다. 제공된 자료에는 X3.0 신호와 지정 No.5 Bit 0 설정에 대한 안내가 있습니다.",
    checks: [
      "윤활 모터 과부하 원인이 있는지 자격을 갖춘 전기 담당자가 확인합니다.",
      "담당자가 모터 전원선 U1/V1/W1과 PE 사이의 단락 여부 및 배선 상태를 점검합니다.",
      "제공된 자료 기준 X3.0=1이 정상 신호이며, 지정 No.5 Bit 0 설정은 1로 안내되어 있습니다."
    ],
    resolution: [
      "고장이나 과부하 원인이 없는 것을 확인한 뒤 자격을 갖춘 담당자만 열동계전기를 복귀합니다.",
      "원인이 해결되고 안전이 확인된 다음에만 알람 해제와 재가동을 진행합니다."
    ],
    caution: "열동계전기를 원인 확인 없이 복귀하면 모터 손상이나 감전 위험이 있습니다. 전원 차단·잠금 절차를 따르고 전기 담당자에게 작업을 맡기세요.",
    keywords: ["bed lub motor th trip", "lub motor", "thermal relay", "motor trip", "열동계전기", "모터 트립", "윤활 모터", "x3.0"]
  },
  {
    code: "AL-001",
    title: "센서 통신 오류",
    category: "센서",
    severity: "확인 필요",
    level: "medium",
    summary: "센서와 제어 장치 사이의 통신이 원활하지 않을 때 나타날 수 있는 예시 알람입니다.",
    checks: [
      "장비 화면에서 센서 연결 상태와 다른 알람이 함께 표시되는지 확인합니다.",
      "장비 전원이 안전하게 꺼진 상태에서 케이블이 눈에 띄게 빠지거나 손상되지 않았는지 확인합니다.",
      "재가동이 허용된 장비라면 제조사 안내에 따라 한 번 재시작한 뒤 알람을 확인합니다."
    ],
    resolution: [
      "연결이 느슨해 보이거나 케이블이 손상된 경우 직접 수리하지 말고 담당자에게 점검을 요청합니다.",
      "알람이 반복되면 발생 시각과 함께 표시 화면을 기록해 서비스 담당자에게 전달합니다."
    ],
    caution: "장비를 열거나 배선을 분리하지 마세요. 점검 전 장비 정지 및 전원 차단 절차는 반드시 공식 매뉴얼을 따르세요.",
    keywords: ["센서", "연결", "통신", "케이블"]
  },
  {
    code: "AL-002",
    title: "전원 상태 확인",
    category: "전원",
    severity: "주의",
    level: "low",
    summary: "전원 공급이 불안정하거나 보조 전원의 상태 확인이 필요할 때를 가정한 예시 알람입니다.",
    checks: [
      "화면에 전원 또는 배터리 관련 추가 알람이 있는지 확인합니다.",
      "표시등과 전원 케이블의 외관을 안전한 거리에서 확인합니다.",
      "최근 정전이나 전원 차단이 있었는지 확인합니다."
    ],
    resolution: [
      "전원 케이블이 손상됐거나 과열 흔적이 있으면 만지지 말고 장비 사용을 중단합니다.",
      "전원 상태가 정상인데 알람이 계속되면 유지보수 담당자에게 점검을 요청합니다."
    ],
    caution: "전기 부품, 퓨즈, 배터리를 직접 교체하지 마세요. 자격을 갖춘 담당자와 공식 절차를 이용하세요.",
    keywords: ["전원", "배터리", "전압", "전기"]
  },
  {
    code: "AL-003",
    title: "신호 품질 저하",
    category: "신호",
    severity: "확인 필요",
    level: "medium",
    summary: "센서 입력이나 장비 간 신호가 기준 범위를 벗어났을 때를 가정한 예시 알람입니다.",
    checks: [
      "알람이 특정 동작이나 환경 변화 직후 발생했는지 확인합니다.",
      "센서 주변에 가림, 오염, 장애물이 있는지 외부에서 확인합니다.",
      "같은 시간에 발생한 다른 알람을 함께 기록합니다."
    ],
    resolution: [
      "외부 오염 제거가 허용되는 장비라면 공식 매뉴얼에 안내된 방법만 사용합니다.",
      "신호 이상이 반복되거나 측정값이 비정상적이면 장비를 임의로 보정하지 말고 점검을 요청합니다."
    ],
    caution: "안전 센서나 보호 장치를 우회하거나 비활성화하지 마세요.",
    keywords: ["신호", "센서", "측정", "품질"]
  },
  {
    code: "E-101",
    title: "네트워크 연결 확인",
    category: "연결",
    severity: "주의",
    level: "low",
    summary: "장비 또는 서비스와의 네트워크 연결이 끊겼을 때를 가정한 예시 오류입니다.",
    checks: [
      "다른 화면이나 장비에서도 연결 문제가 발생하는지 확인합니다.",
      "네트워크 장비의 상태 표시등을 확인합니다.",
      "최근 네트워크 점검이나 설정 변경이 있었는지 관리자에게 확인합니다."
    ],
    resolution: [
      "네트워크 관리자에게 연결 상태와 오류 발생 시각을 전달합니다.",
      "장비의 네트워크 설정을 임의로 변경하지 말고 담당자 안내에 따라 조치합니다."
    ],
    caution: "업무용 또는 산업용 네트워크 설정은 관리자 승인 없이 변경하지 마세요.",
    keywords: ["네트워크", "연결", "통신", "인터넷"]
  },
  {
    code: "E-202",
    title: "온도 상승 감지",
    category: "온도",
    severity: "주의",
    level: "high",
    summary: "장비 온도가 평소보다 높아졌을 때를 가정한 예시 오류입니다.",
    checks: [
      "장비가 정상 운전 중인지, 화면에 온도 관련 추가 알람이 있는지 확인합니다.",
      "환기구 주변이 막혀 있거나 주변 온도가 높지 않은지 안전한 거리에서 확인합니다.",
      "온도가 계속 오르거나 타는 냄새, 연기, 이상 소음이 있으면 즉시 주변 안전을 확보합니다."
    ],
    resolution: [
      "위험 징후가 있으면 장비에 접근하지 말고 현장 비상 절차에 따라 담당자에게 알립니다.",
      "위험 징후가 없더라도 알람이 지속되면 장비를 정지할지 공식 매뉴얼과 담당자의 지시에 따릅니다."
    ],
    caution: "뜨거운 표면이나 내부 부품을 만지지 마세요. 냉각을 위해 덮개를 열거나 물을 뿌리지 마세요.",
    keywords: ["온도", "과열", "열", "냉각"]
  },
  {
    code: "E-303",
    title: "동작 상태 점검",
    category: "동작",
    severity: "확인 필요",
    level: "medium",
    summary: "명령한 동작이 완료되지 않거나 장비 상태가 예상과 다를 때를 가정한 예시 오류입니다.",
    checks: [
      "장비가 정지 상태인지, 주변에 사람이나 장애물이 있는지 안전한 거리에서 확인합니다.",
      "화면에 표시된 현재 상태와 오류 발생 직전의 동작을 기록합니다.",
      "비상 정지나 안전 인터록 상태는 담당자와 공식 절차에 따라 확인합니다."
    ],
    resolution: [
      "움직이는 부품에 접근하거나 끼인 물체를 직접 제거하지 마세요.",
      "장비를 안전하게 정지할 수 있는지 확실하지 않다면 현장 담당자에게 즉시 알립니다."
    ],
    caution: "보호 커버나 인터록을 해제하지 마세요. 움직이는 부품 주변에서는 안전거리를 유지하세요.",
    keywords: ["동작", "정지", "모터", "구동"]
  }
];

const form = document.querySelector("#search-form");
const input = document.querySelector("#error-code");
const results = document.querySelector("#results");
const codeList = document.querySelector("#code-list");
const codeCount = document.querySelector("#code-count");

function normalize(value) {
  return value.trim().toLocaleUpperCase().replace(/[\s_-]/g, "");
}

function renderCard(item) {
  const severityClass = item.level === "high" ? "high" : item.level === "low" ? "low" : "";
  const checkItems = item.checks.map((step) => `<li>${step}</li>`).join("");
  const resolutionItems = item.resolution.map((step) => `<li>${step}</li>`).join("");

  return `
    <article class="result-card">
      <div class="result-top">
        <span class="result-code">${item.code} · ${item.category}</span>
        <span class="severity ${severityClass}">${item.severity}</span>
      </div>
      <h2>${item.title}</h2>
      ${item.source ? `<p class="source-label">${item.source}</p>` : ""}
      <p class="result-summary">${item.summary}</p>
      <div class="steps">
        <section>
          <h3>먼저 확인해 주세요</h3>
          <ol>${checkItems}</ol>
        </section>
        <section>
          <h3>권장 조치</h3>
          <ol>${resolutionItems}</ol>
        </section>
      </div>
      <p class="safety-note"><strong>안전 안내</strong> · ${item.caution}</p>
    </article>`;
}

function renderUnknown(query) {
  return `
    <article class="result-card unknown-card">
      <div class="result-top"><span class="result-code">검색 결과 없음</span></div>
      <h2>“${escapeHtml(query)}” 코드를 찾지 못했어요.</h2>
      <p>현재 예시 데이터에 해당 코드가 없습니다. 코드의 철자와 기기 제조사·모델을 확인하고, 공식 매뉴얼의 알람 표를 찾아보세요.</p>
      <ol>
        <li>알람이 표시된 화면과 발생 시각을 기록합니다.</li>
        <li>장비 상태가 위험해 보이면 안전거리를 확보하고 현장 담당자에게 알립니다.</li>
        <li>코드가 반복되면 임의로 초기화하지 말고 제조사 또는 유지보수 담당자에게 문의합니다.</li>
      </ol>
    </article>`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function search(query) {
  const value = query.trim();
  if (!value) {
    results.innerHTML = "";
    input.focus();
    return;
  }
  const normalized = normalize(value);
  const match = normalized ? errorCodes.find((item) => {
    const searchable = [item.code, item.title, item.category, ...item.keywords]
      .map(normalize);
    return searchable.some((field) => field.includes(normalized) || normalized.includes(field));
  }) : undefined;
  results.innerHTML = match ? renderCard(match) : renderUnknown(value);
  results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function renderDirectory() {
  codeCount.textContent = `${errorCodes.length}개 코드`;
  codeList.innerHTML = errorCodes.map((item) => `
    <button class="code-card" type="button" data-code="${item.code}" aria-label="${item.code} ${item.title} 해결 방법 보기">
      <span class="code-card-code">${item.code}</span>
      <h3>${item.title}</h3>
      <p>${item.source ? "매뉴얼 기반 안내" : item.summary}</p>
    </button>
  `).join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  search(input.value);
});

document.querySelectorAll(".example-chip").forEach((button) => {
  button.addEventListener("click", () => {
    input.value = button.dataset.code;
    search(input.value);
  });
});

codeList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-code]");
  if (!button) return;
  input.value = button.dataset.code;
  search(input.value);
});

renderDirectory();
