interface Props {
  crop: string;
  advice: string;
  onReset: () => void;
}

function parseMarkdown(text: string): string {
  const lines = text.split("\n");
  let html = "";
  let inList = false;

  for (const line of lines) {
    if (/^###\s+/.test(line)) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${inlineFormat(line.replace(/^###\s+/, "").trim())}</h3>`;
      continue;
    }
    if (/^-\s+/.test(line)) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${inlineFormat(line.replace(/^-\s+/, "").trim())}</li>`;
      continue;
    }
    if (line.trim() === "") {
      if (inList) { html += "</ul>"; inList = false; }
      continue;
    }
    if (inList) { html += "</ul>"; inList = false; }
    html += `<p>${inlineFormat(line.trim())}</p>`;
  }

  if (inList) html += "</ul>";
  return html;
}

function inlineFormat(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

export default function ResultCard({ crop, advice, onReset }: Props) {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center gap-4 pb-5 border-b border-[var(--border)]">
        <div className="w-16 h-16 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-2xl flex items-center justify-center text-3xl">
          🌾
        </div>
        <div>
          <p className="text-[var(--accent)] text-xs uppercase tracking-widest">
            Recommended Crop
          </p>
          <h2 className="text-3xl font-bold capitalize text-[var(--text)] mt-0.5">
            {crop}
          </h2>
        </div>
        <div className="ml-auto px-3 py-1 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-full text-[var(--badge-text)] text-xs">
          ✓ High Confidence
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[var(--panel-strong)] border border-[var(--border)] rounded-md flex items-center justify-center text-xs">
            🤖
          </div>
          <p className="text-[var(--accent)] text-xs uppercase tracking-widest">
            AI Field Advisor
          </p>
        </div>

        <div className="bg-[var(--input-bg)] border border-[var(--border)] rounded-xl p-5 md:p-6">
          <div
            className="prose-advice max-h-[340px] overflow-y-auto pr-1"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(advice) }}
          />
        </div>
      </div>

      <button
        onClick={onReset}
        className="w-full py-2.5 rounded-xl border border-[var(--button-secondary-border)] hover:border-[var(--button-secondary-hover)] text-[var(--button-secondary-text)] hover:text-[var(--text)] text-sm transition active:scale-95"
      >
        ↩ Analyze Another Field
      </button>
    </div>
  );
}