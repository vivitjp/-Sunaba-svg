export type KeyDef = {
  color: string
  keys: string[]
}

type SyntaxHighlight = {
  target: string
  keyDef: KeyDef[]
}

export const syntaxHighlight = ({ target, keyDef }: SyntaxHighlight) => {
  const escaped = escapeHtml(target)

  const rebuilt: JSX.Element[] = []

  escaped.split("\n").forEach((line, idx) => {
    let result = line

    //Quotation("")
    result = result.replaceAll(
      /&quot;(.+?)&quot;/g,
      '<span class="syntaxQ">&quot;$1&quot;</span>'
    )

    //Quotation({})
    result = result.replaceAll(
      /\{(.+?)\}/g,
      '<span class="syntaxQ">{$1}</span>'
    )

    //Keywords
    keyDef.forEach(({ color, keys }) => {
      keys.forEach((key) => {
        const re = new RegExp(`\\b${key}\\b`, "g")
        result = result.replaceAll(
          re,
          `<span class="syntax" style="color:${color}">${key}</span>`
        )
      })
    })

    rebuilt.push(
      <pre
        key={idx}
        dangerouslySetInnerHTML={{
          __html: result,
        }}
      />
    )
  })
  return rebuilt
}

const HTML_ESCAPE_REPLACE_RE = /[&<>"]/g
const HTML_REPLACEMENTS: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
}
function replaceUnsafeChar(ch: string): string {
  return HTML_REPLACEMENTS[ch]
}

export function escapeHtml(str: string): string {
  if (HTML_ESCAPE_REPLACE_RE.test(str)) {
    return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar)
  }
  return str
}
