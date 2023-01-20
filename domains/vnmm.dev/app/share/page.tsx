import { readdirSync } from "fs";

const shareDir = process.env.SHARE_DIR ?? "public/";

export default function page() {
  const ls = readdirSync(shareDir);

  return <div style={{padding: "18px"}}>
    {ls.map(path => {
      return <a style={{color: "#44a3e7"}} key={path} href={path}> {path.split("/").at(-1)} </a>
    })}
  </div>
}