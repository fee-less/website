import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function MarkdownPage() {
  const filePath = path.join(process.cwd(), "public", "whitepaper.md");
  const fileContent = fs.readFileSync(filePath, "utf8");

  return (
    <div className="mx-auto p-8 markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{fileContent}</ReactMarkdown>
    </div>
  );
}
